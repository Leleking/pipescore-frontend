<template>
    <div>
        
       
            <h4 class="example-title">Modules</h4>
            <base-accordion>
                <draggable 
                    v-model="modules"
                    @start="drag = true"
                    @end="drag = false"
                    @change="checkShift"
                >
                    <transition-group>
                        <base-tab-list v-for="course_module in modules" :key="course_module.id" :id="course_module.id" :title="course_module.name" :to="`activity/add/${course_module.id}`">
                            <div>
                                <div v-if="!course_module.activities.length">No lessons found under {{course_module.name}}</div>
                                <ul style="list-style-type:none">
                                    <li v-for="activity in course_module.activities" :key="activity.id">
                                        <div class="checkbox-custom checkbox-default">
                                            <input type="checkbox" id="inputCheckboxAgree" name="inputCheckboxesAgree " 
                                                autocomplete="off" />
                                            <label for="inputCheckboxAgree">
                                                <i v-if="!activity.video" class="fa fa-file"></i> 
                                                <i v-if="activity.video" class="fa fa-video"></i> 
                                                {{activity.name}}
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                                <div style="float:right">
                                    <router-link :to="`activity/add/${course_module.id}`">
                                        <i class="fa fa-plus"></i> Add an activity or resource
                                    </router-link>
                                </div>
                            </div>
                        </base-tab-list>         
                    </transition-group>
                </draggable>
            </base-accordion>
            
        
        
    </div>
</template>

<script>
import CourseService from '../../../../../services/Admin/Courses.js'
    import draggable from 'vuedraggable'
    export default {
        components: {
            draggable,
        },
        data() {
            return {
                modules: []
            }
        },
        methods: {
            async getModules() {
                this.$store.dispatch('setLoading',true)
                try {
                    var modules = await CourseService.getCourseModules(this.$store.state.appStore.app.course_id)
                    this.modules = modules.data
                    console.log(this.modules)
                    this.$store.dispatch('setLoading',false)

                } catch (error) {
                    console.log(error)
                    this.$store.dispatch('setLoading',false)

                }
            },

            checkShift() {
                var new_position = this.modules.map((module) => {
                    return module.id
                })
                console.log(new_position)
                this.$store.dispatch('setLoading',true)
                CourseService.updateModulePosition({positions: new_position})
                .then(({data}) => {
                    this.$store.dispatch('setLoading',false)
                    //this.$router.push({name: "View Course",params: {id:data.id}})
                    console.log(data)
                    this.$snotify.success("Position Updated")
                })
                .catch((err) => {
                    console.log(err.response)
                    this.$store.dispatch('setLoading',false)
                    this.$snotify.error(err.response.data.message)
                })
                
            },
        },
        created() {
            this.getModules()
        }
    }
</script>

<style lang="scss" scoped>

</style>