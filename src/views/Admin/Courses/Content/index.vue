<template>
    <div>
        <div class="row">
            <div class="col-md-9">
                <transition appear name="custom-classes-transition" enter-active-class="animated fadeIn">
                    <router-view/>
                </transition>
            </div>
            <div class="col-md-3">
                <div class="example-wrap">
                <h4 class="example-title">Background</h4>
                <p>Add Exams, tests and others to your course</p>
                <div class="list-group bg-blue-grey-100 bg-inherit">
                    <a @click.prevent="showAddLessonPanel" v-if="showAddLessonButton" class="list-group-item blue-grey-500" href="javascript:void(0)">
                        <span v-if="!this.$store.state.appStore.showAddLesson">
                            <i class="icon wb-plus" aria-hidden="true"></i> Add Activity
                        </span>
                        <span v-if="this.$store.state.appStore.showAddLesson">
                            <i class="icon wb-file" aria-hidden="true"></i> View Module
                        </span>
                    </a>
                    <a class="list-group-item blue-grey-500" href="javascript:void(0)">
                        <i class="icon wb-inbox" aria-hidden="true"></i> Participants
                    </a>
                    <a class="list-group-item blue-grey-500" href="javascript:void(0)">
                <i class="icon wb-user" aria-hidden="true"></i> Badges
                </a>
                    <a class="list-group-item blue-grey-500" href="javascript:void(0)">
                <i class="icon wb-bell" aria-hidden="true"></i> Competencies
                </a>
                    <a class="list-group-item blue-grey-500" href="javascript:void(0)">
                <i class="icon wb-envelope" aria-hidden="true"></i> Grades
                </a>
                    <a class="list-group-item blue-grey-500" href="javascript:void(0)">
                <i class="icon wb-tag" aria-hidden="true"></i> Bookmarks
                </a>
                </div>
                </div>
            </div>
        </div>
       

    </div>
</template>

<script>
import CourseService from '../../../../services/Admin/Courses.js'
    export default {
        data() {
            return {
                id: this.$route.params.id,
                modules: []
            }
        },
        methods: {
            async getModules() {
                this.$store.dispatch('setLoading',true)
                try {
                    var modules = await CourseService.getCourseModules(this.$route.params.id)

                    this.modules = modules.data

                    this.$store.dispatch('setLoading',false)
                    console.log(modules)

                } catch (error) {
                    console.log(error)
                    this.$store.dispatch('setLoading',false)

                }
            },
            

            showAddLessonPanel() {
                
                this.$store.dispatch('showAddLessonPanel')
                console.log(this.$store.state.appStore.app.showAddLesson)
            }
        },
        computed: {
            showAddLessonButton() {
                var show = (this.$route.name == "Add Lesson") ? true : false
                return show
            },
        },
        created() {
            this.getModules()
        }
    }
</script>

<style lang="scss" scoped>

</style>