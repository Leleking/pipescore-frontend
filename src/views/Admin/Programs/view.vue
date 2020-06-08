<template>
    <div>
        <div class="page-header page-header-bordered">
            <base-breadcrumb :items="breadcrumb"/>
            <h1 class="page-title">{{program.name}}</h1>
            <div class="page-header-actions">
              
                    <button @click="route(`/admin/courses/add/${program.id}/${program.name}`)" type="button"  class="btn btn-sm btn-icon btn-inverse btn-round">
                            <i class="fa fa-plus" aria-hidden="true"></i> Add New Course
                    </button>
                <button @click="$router.go(-1)" type="button" class="btn btn-sm btn-icon btn-inverse btn-round"
                    >
                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                </button>
            </div>
        </div>
        <div class="page-content">
            <div class="row">
                <div class="col-md-7">
                    <div class="panel">
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-md-6 offset-1">
                                    <div>Program Name: <span style="font-weight:bold;font-size:15px;color:#BB3F1D">{{program.name}}</span></div>
                                    <div>Cost: GHC{{program.cost}}</div>
                                    <div>Currency: {{program.currency}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel">
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-md-6 offset-1" style="font-size:12px">
                                    <div style="font-size:12px;padding:10px;color:#B7BBBB">Description</div>
                                    {{program.description}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <!-- Example Background -->
                    <div class="example-wrap">
                        <h4 class="example-title">Program Information</h4>
                        <p>&nbsp;</p>
                        <div class="list-group bg-blue-grey-100 bg-inherit">
                            <a class="list-group-item blue-grey-500" href="javascript:void(0)">
                                <div>
                                    Students Enrolled: <span style="float:right;font-weight:bold">0</span>
                                </div>
                            </a>
                            <a class="list-group-item blue-grey-500" href="javascript:void(0)">
                                <div>
                                    Lecturer's associated: <span style="float:right;font-weight:bold">0</span>
                                </div>
                            </a>
                           
                        </div>
                    </div>
                    <!-- End Example Background -->
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-xl-12">
                    <!-- Example Background -->
                    <div class="row">
                        <div class="col-md-3">
                            <h4 class="example-title">Courses</h4>
                        </div>
                        <div class="col-md-9">
                            <div class="form-group row">
                                <label class="col-md-1 form-control-label">Year & Semester: </label>
                                <div class="col-md-2">
                                    <multiselect v-model="year" :options="years"  placeholder="Select Year" ></multiselect>
                                   
                                </div>
                                <div class="col-md-2">
                                    <multiselect v-model="sem" :options="semesters"  placeholder="Select Semester" ></multiselect>
                                </div>
                                <div class="col-md-2">
                                    <button class="btn btn-outline-primary" @click="resetSearch">Reset Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="panel-heading">
                    <div class="row p-10">
                        <div class="col-md-6 offset-md-3">
                            <form class="page-search-form" role="search">
                                <div class="input-search input-search-dark">
                                    <i class="input-search-icon wb-search" aria-hidden="true"></i>
                                    <input type="text" class="form-control" id="inputSearch" name="search" placeholder="Search...">
                                </div>
                            </form>
                        </div>
                    </div>
                    </div> -->
                    <p><code>{{program.name}}</code> has {{courseLength}} Courses</p>
                    <h5 v-if="courseLength==0" class="text-center">No courses assigned to you</h5>
                    <div class="row no-gutters">
                        <div v-for="cs in courses" :key="cs.id" class="col-xl-2 col-lg-3 col-md-4 col-sm-12 col-xs-12 p-2 pointer">
                            <div class="card " @click="route(`/admin/courses/view/${cs.id}`)">
                                <img v-if="cs.image == 'default.jpg' || cs.image == null || cs.image == '' " class="card-img-top w-full" height="149.16px" src="/img/login.e741a6f8.jpg" alt="course image">
                                <img v-else class="card-img-top w-full " height="149.16px" :src="`${apiDomain}/${cs.image}`" alt="course image">
                                <div class="card-block box">
                                    <h4 class="card-title cut-text">{{cs.name}}</h4>
                                    <p class="card-text">
                                        <small class="text-muted">Created at {{cs.created_at | dateType2}}</small>
                                       
                                    </p>
                                    <p class="card-text">
                                       
                                        <small class="text-muted">Year: {{cs.year}} Semester: {{cs.sem}}</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <!-- End Example Background -->
                </div>
            </div>
        </div>
        
        
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import ProgramService from '../../../services/Admin/Programs.js'
import CourseService from '../../../services/Admin/Courses.js'
    export default {
        data() {
            return {
                id: this.$route.params.id,
                apiDomain: process.env.VUE_APP_API_DOMAIN,
                program: {},
                years: [1,2,3,4,5,6,7],
                year: "",
                sem: "",
                all_courses: [],
                semesters: [1,2,3],
                courses: [],
                breadcrumb: [
                    {
                        text: 'Dashboard',
                        to: '/',
                        active: true
                    },
                    {
                        text: 'Programs',
                        to: '/admin/programs/all',
                        active: true
                    }
                ],
            

            }
        },
        components: {
            Multiselect
        },
        computed: {
            courseLength() {
                
                return (this.program) ? ((this.program.courses) ? this.program.courses.length : 0) : 0
            }
        },
        methods: {
            resetSearch() {
                this.year = ""
                this.sem = ""
                this.courses = this.all_courses
            },
            route(path) {
                this.$router.push({path})
            },
            async getProgram() {
                this.$store.dispatch('setLoading',true)
                try {
                    var program = await ProgramService.getProgram(this.id)
                    //var courses =  await CourseService.getCourses(this.id)
                    this.program = program.data
                    this.all_courses = this.program.courses
                    this.courses = this.all_courses
                    this.$store.dispatch('setLoading',false)
                    console.log(this.all_courses)

                } catch (error) {
                    console.log(error)
                    this.$store.dispatch('setLoading',false)

                }
            },
        },
        created() {
            this.getProgram()
            
        },
        watch: {
            year(val) {
                
                this.courses = this.all_courses.filter((course) => {
                    if(this.year && this.sem) {
                        if(course.year == val && course.sem == this.sem) {
                            return course
                        }
                    } else {
                        if(course.year == val) {
                            return course
                        }
                    }
                })
            },
            sem(val) {
                this.courses = this.all_courses.filter((course) => {
                   if(this.year && this.sem) {
                    if(course.year == this.year && course.sem == val) {
                        return course
                    }
                   }else {
                    if(course.sem == val) {
                        return course
                    }
                   }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .box {
        border:1px solid rgb(189, 189, 189);
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        //border-top: 1px solid rgb(211, 209, 209);
    }
</style>