<template>       
    <div class="">
        <div class="page-header page-header-bordered">
            <base-breadcrumb :items="breadcrumb"/>
            <h1 class="page-title">All Courses</h1>
            <div class="page-header-actions">
                <button @click="$router.go(-1)" type="button" class="btn btn-sm btn-icon btn-inverse btn-round"
                    >
                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                </button>
            </div>
        </div>
        
        <div class="page-content">
            <h4 class="example-title">All Courses</h4>
            <h5 v-if="course.length==0" class="text-center">No courses assigned to you</h5>
                <div class="row no-gutters">
                    <div v-for="cs in course" :key="cs.course_id" class="col-xl-2 col-lg-3 col-md-4 col-sm-12 col-xs-12 p-2 pointer">
                        <div class="card" @click="route(`/lecturer/course/viewmodules/${cs.course_id}`)">
                            <img v-if="cs.image == 'default.jpg' || cs.image == null || cs.image == '' " class="card-img-top w-full" height="149.16px" src="/img/login.e741a6f8.jpg" alt="course image">
                            <img v-else class="card-img-top w-full " height="149.16px" :src="`${apiDomain}/${cs.image}`" alt="course image">
                            <div class="card-block box">
                                <h4 class="card-title cut-text">{{cs.name}}</h4>
                                <p class="card-text">
                                <small class="text-muted">Created at {{cs.created_at.date | date}}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 class="example-title">Last Activities</h4>
        </div>
    </div>
            
</template>

<script>
import CrudService from '../../../services/Admin/Crud.js'
//import AuthServices from '@/services/Auth/auth.js'
import { mapState } from 'vuex'
    export default {
        data() {
            return {
                course : [],
                apiDomain: process.env.VUE_APP_API_DOMAIN,
                breadcrumb: [
                    {
                        text: 'Dashboard',
                        to: '/',
                        active: true
                    },
                    {
                        text: ' All Courses',
                        to: '/admin',
                        active: false
                    }
                ],
            }
        },
        computed: {
            ...mapState({
                authUser: (state) => state.authStore.authUser 
            })
        },
        methods: {

        route(path) {
            this.$router.push({path})
        },

        async getCourses() {
            this.$store.dispatch('setLoading',true)
            try {
                var course = await CrudService.index('courses')
                console.log(course.data)
                if (course.data.length == 0) {
                    this.$snotify.error('No courses assigned to you')
                    
                } else {
                    this.course = course.data

                    this.$store.dispatch('setLoading',false)
                    console.log(this.course)
                }


            } catch (error) {
                console.log(error)
                this.$store.dispatch('setLoading',false)

            }
        },
        },
        created() {
            this.getCourses()
            
        }
    }
</script>

<style lang="scss" scoped>
.v-page {
    padding-left:  200px;
    padding-right: 200px;

}

    .cut-text { 
    text-overflow: ellipsis;
    overflow: hidden; 
    height: 1.2em; 
    white-space: nowrap;
    }
    .box {
        border:1px solid rgb(189, 189, 189);
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        border-top: 1px solid rgb(211, 209, 209);
    }
</style>