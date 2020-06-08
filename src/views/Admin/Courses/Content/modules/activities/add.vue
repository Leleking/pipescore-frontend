<template>
    <div>
        <div class="row" v-if="activities">
            <activity-list @showActivity="showActivity"/>
        </div>
        <div>
            <lesson v-if="form == 'lesson'" :id="courseModuleId"/>
        </div>
       
    </div>
</template>

<script>
   
    import CourseService from '@/services/Admin/Courses.js'


    import lesson from './modules/forms/lesson.vue'
    import ActivityList from './modules/ActivityList.vue'

 
    export default {
        data() {
            return {
                form: "",
                id:this.$route.params.id,
                
                activities: true,
                module: {
                    id: "",
                    name: "",
                    description: "",
                    course_id: ""
                },
                add: false,
               
            }
        },
        components: {
            lesson,
            ActivityList
        },
        methods: {
            
            
            async getModule() {
                this.$store.dispatch('setLoading',true)
                try {
                    var module = await CourseService.getModule(this.id)
                    
                    this.module = module.data
                    
                    this.$store.dispatch('setLoading',false)

                } catch (error) {
                    console.log(error)
                    this.$store.dispatch('setLoading',false)

                }
            },

            /* hides the activity list component and shows the selected activity */
            showActivity(payload) {
                this.form = payload
                this.activities = false

            },
            
            updateModule() {
                this.$validator.validateAll()
                .then(() => {
                    if(!this.errors.any()) {
                        this.$store.dispatch('setLoading',true)
                    
                        console.log(this.module)
                        CourseService.updateCourseModule(this.module.id,this.module)
                        .then(({data}) => {
                            this.$store.dispatch('setLoading',false)
                            //this.$router.push({name: "Add Lesson",params: {id:data.id}})
                           
                            this.$snotify.success("Module Updated")
                        })
                        .catch((err) => {
                            console.log(err.response)
                            this.$store.dispatch('setLoading',false)
                            this.$snotify.error(err.response.data.message)
                        })
                    }
                })
            }
        },
        computed: {
            
            showLessonPanel() {
                 return this.$store.state.appStore.showAddLesson   
            },

            /* return course module id */
            courseModuleId() {
                return this.id
            }
           
        },
        mounted() {
            this.getModule()
            
        },
       
        
        
        
    }
</script>

<style lang="scss" scoped>

</style>