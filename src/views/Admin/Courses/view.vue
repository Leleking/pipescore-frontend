<template>
    <div>
        <div class="page-header page-header-bordered">
            <base-breadcrumb :items="breadcrumb"/>
            <h1 class="page-title">{{course.name}}</h1>
            <div class="page-header-actions">
                <button @click="$router.go(-1)" type="button" class="btn btn-sm btn-icon btn-inverse btn-round"
                    >
                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                </button>
            </div>
        </div>
        <div class="page-content">
            <div class="row">
                <div class="col-md-3">
                    <div class="card p-30 flex-row justify-content-between">
                    <div class="white">
                        <i class="icon icon-circle icon-2x wb-users bg-blue-600" aria-hidden="true"></i>
                    </div>
                    <div class="counter counter-md counter text-right">
                        <div class="counter-number-group">
                        <span class="counter-number">0</span>
                        <span class="counter-number-related text-capitalize"> Enrolled</span>
                        </div>
                        <div class="counter-label text-capitalize font-size-16">
                            <button @click="route('Course Students')" class="btn btn-primary btn-outline">
                                Students
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card p-30 flex-row justify-content-between">
                    <div class="white">
                        <i class="icon icon-circle icon-2x wb-graph-up bg-warning" aria-hidden="true"></i>
                    </div>
                    <div class="counter counter-md counter text-right">
                        <div class="counter-number-group">
                        <span class="counter-number">{{modules.length}}</span>
                        <span class="counter-number-related text-capitalize"> modules</span>
                        </div>
                        <div class="counter-label text-capitalize font-size-16">
                            <button class="btn btn-warning btn-outline" @click="route('Course Modules')">
                                Modules
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card p-30 flex-row justify-content-between">
                    <div class="white">
                        <i class="icon icon-circle icon-2x wb-clipboard bg-red-600" aria-hidden="true"></i>
                    </div>
                    <div class="counter counter-md counter text-right">
                        <div class="counter-number-group">
                        <span class="counter-number">0</span>
                        <span class="counter-number-related text-capitalize"> exams</span>
                        </div>
                        <div class="counter-label text-capitalize font-size-16">
                            <button class="btn btn-danger btn-outline" disabled>
                                Exams
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card p-30 flex-row justify-content-between">
                    <div class="white">
                        <i class="icon icon-circle icon-2x wb-link bg-success" aria-hidden="true"></i>
                    </div>
                
                    <div class="counter counter-md counter text-right">
                        <div class="counter-number-group">
                        <span class="counter-number">0</span>
                        <span class="counter-number-related text-capitalize"> Lecturers</span>
                        </div>
                        <div class="counter-label text-capitalize font-size-16">
                            <button @click="getLecturers()" data-target="#assignLecturerModal" data-toggle="modal" class="btn btn-success btn-outline">
                                Assign
                            </button>
                        </div>
                    </div>
               
                    </div>
                </div>
           
            </div>
        
            <div class="panel course-inactive" id="exampleReport">
                <div class="panel-body">
                    <div class="row justify-content-md-center">
                    

                            <div class="col-md-4">
                                <div>Course Name: <span style="font-weight:bold;font-size:15px;color:#BB3F1D">{{course.name}}</span></div>
                                <div>Code: {{course.code}}</div>
                                <div>Type: {{course.course_type}}</div>
                                <div>Year: {{course.year}}</div>
                                <div>Semester: {{course.sem}}</div>
                            </div>
                            <div class="col-md-3">
                                <div>Status: 
                                    <span v-if="course.status == 'Inactive'" class="badge badge-round badge-danger">Inactive</span>
                                    <span v-if="course.status == 'Active'" class="badge badge-round badge-success">Active</span>
                                </div>
                                <div>Created At: {{course.created_at}}</div>
                                <div>Added By:user</div>
                            </div>
                            <div class="col-md-3">
                                <div>duration: <span style="font-size:15px">{{course.duration}}</span></div>
                                <div>Session: {{course.session}}</div>
                                <div>Session Time: {{course.session_time}}</div>
                            </div>
                            <div class="col-md-2">
                                <div>
                                    <button type="button" @click="editCourse" class="btn btn-info">Edit</button>
                                </div>
                                <br>
                                <div>
                                    <button type="button"  class="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        
                        
                        
                        </div>

                    </div>
                </div>
            <div class="row">
                <div class="col-md-3 col-sm-12 col-xs-12">
                        <div class="container">
                            <div class="polaroid">
                            <img v-if="course.image == 'default.jpg' " src="../../../assets/img/adult-book-series-books-1181672.jpg" alt="Norway" class="img-fluid"  style="width:100%;height:200px">
                            <img v-else :src="`${apiDomain}/${course.image}`" alt="Norway" class="img-fluid"  style="width:100%;height:200px">
                            <div class="container bg-white">
                                <span style="font-weight:bold;font-size:15px;color:#BB3F1D">{{course.name}}</span>
                            </div>
                            </div>
                        </div>
                </div>
                <div class="col-md-9">
                    <div class="panel">
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-md-12 offset-1" style="font-size:12px">
                                    <div style="font-size:12px;padding:10px;color:#B7BBBB">Description</div>
                                    {{course.description}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            

            <!-- Modal -->
            <div class="modal fade" id="assignLecturerModal" aria-hidden="true" aria-labelledby="examplePositionCenter"
                role="dialog" tabindex="-1">
                <div class="modal-dialog modal-simple modal-center">
                <div class="modal-content">
                    <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h4 class="modal-title">Assign Lecturers to {{course.name}} ({{course.code}})</h4>
                    </div>
                    <div class="modal-body">
                        <form class="form-horizontal">
                            <span v-if="this.$store.state.routerStore.fetching">
                                <i  class="fa fa-spinner fa-spin"></i>
                                loading
                            </span>
                            <div v-if="!this.$store.state.routerStore.fetching" class="form-group row">
                                <label class="col-md-3 form-control-label">Lecturers: </label>
                            
                                <div class="col-md-9">
                                    <multiselect :multiple="true" :searchable="true"  track-by="name" label="name"  v-model="assigned_lecturers" :options="lecturers"  ></multiselect>
                                </div>
                            
                                
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" @click="assignLecturers()" class="btn btn-primary">Assign</button>
                    </div>
                </div>
                </div>
            </div>
            <!-- End Modal -->
        

      
       
       
        
        </div>
    </div>
</template>

<script>
    import CourseService from '../../../services/Admin/Courses.js'
    import CrudService from '../../../services/Admin/Crud.js'
    import Multiselect from 'vue-multiselect'

    export default {
        
        data() {
            return {
                apiDomain: process.env.VUE_APP_API_DOMAIN,
                course: {},
                id: this.$route.params.id,
                modules: [],
                assign: false,
                assigned_lecturers: [],
                lecturers: [
                    { name: 'Vue.js', code: 'vu' },
                    { name: 'Javascript', code: 'js' },
                    { name: 'Open Source', code: 'os' }
                ],
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
                    },
                    {
                        text: 'Course',
                        to: '/admin/programs/all',
                        active: false
                    }
                ],
            }
        },
        components: {
            Multiselect
        },
        methods: {
            async getCourse() {
                this.$store.dispatch('setLoading',true)
                try {
                    var course = await CourseService.getCourse(this.id)
                    var modules = await CourseService.getCourseModules(this.id)
                    this.modules = modules.data
                    this.course = course.data

                    this.$store.dispatch('setLoading',false)

                } catch (error) {
                    console.log(error)
                    this.$store.dispatch('setLoading',false)

                }
            },
            async getLecturers() {
                this.$store.dispatch('setFetching',true)
                try {
                    var lecturers = await CrudService.index('lecturers')

                    this.lecturers = lecturers.data
                    this.$store.dispatch('setFetching',false)

                } catch (error) {
                    console.log(error)
                    this.$store.dispatch('setFetching',false)

                }
            },

            assignLecturers() {
                var lecturers = this.assigned_lecturers.map((lecturer) => {
                    return lecturer.id
                })
                let objData = {}
                objData ={
                    lecturers
                }
                CourseService.assignLecturer(this.id, objData)
                .then(({data}) => {
                    this.$store.dispatch('setLoading',false)
                           
                    this.$snotify.success(`Lecturers Assigned to ${course.name} ${course.code}`)
                })
                .catch((err) => {
                    console.log(err.response)
                    this.$store.dispatch('setLoading',false)
                    this.$snotify.error(err.response.data.message)
                })
                console.log(this.assigned_lecturers)
            },
         
           
            setCourseId() {
                this.$store.dispatch('setCourseId',this.course.id)
            },
            route(name) {
                this.setCourseId()
                this.$router.push({name})
            },

            editCourse() {
                this.$router.push({path: `/admin/courses/edit/${this.id}`})
            }
           
           
            
        },
        created() {
            this.getCourse()
        },
       
    }
</script>

<style lang="scss" scoped>
    .course-inactive {
        border-left: 5px solid red
    }
    .course-active {
        border-left: 5px solid green
    }
    div.polaroid {
        
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        text-align: center;
    }

    div.container {
    padding: 10px;
    }
</style>