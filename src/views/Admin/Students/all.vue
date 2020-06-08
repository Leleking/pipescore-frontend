<template>
<div>
    <div class="page-header page-header-bordered">
        <base-breadcrumb :items="breadcrumb"/>
        <h1 class="page-title">Students</h1>
        <div class="page-header-actions">
            <router-link v-if="$route.name == 'All Students'" to="/admin/students/add">
                <button type="button"  class="btn btn-icon btn-inverse btn-round">
                        <i class="fa fa-file-excel" aria-hidden="true"></i> Excel
                </button>
            </router-link>
            <router-link v-if="$route.name == 'All Students'" to="/admin/students/add">
                <button type="button"  class="btn btn-sm btn-icon btn-inverse btn-round">
                        <i class="fa fa-plus" aria-hidden="true"></i> Add Student
                </button>
            </router-link>
            <button @click="$router.go(-1)" type="button" class="btn btn-sm btn-icon btn-inverse btn-round"
                >
                <i class="fa fa-arrow-left" aria-hidden="true"></i> Back
            </button>
        </div>
    </div>
    <div class="page-content">
        <div class="panel">
        <div class="panel-heading">
            <h3 class="panel-title"><i class="icon wb-search" aria-hidden="true"></i>Search By <i v-if="show" class="fa fa-spinner fa-spin" style="font-size:24px"></i></h3>
        </div>
        <div class="panel-body">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="form-group row">
                        <label class="col-md-3 form-control-label">Program</label>
                        <div class="col-md-9">
                            <multiselect track-by="id" label="name" :searchable="true" v-model="program" :options="programs"></multiselect>
                            <input type="hidden" name="program"  v-model="program" v-validate="'required'">
                            <span style="color: #D8000C"><small>{{ errors.first('program') }}</small></span>
                        </div>
                                
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group row">
                        <label class="col-md-2 form-control-label">Year:</label>
                        <div class="col-md-10">
                            <multiselect   :searchable="true" v-model="search.year" :options="years"></multiselect>
                        </div>
                            
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group row">
                        <label class="col-md-2 form-control-label">Semester:</label>
                        <div class="col-md-10">
                            <multiselect   :searchable="true" v-model="search.sem" :options="sems"></multiselect>
                        </div>      
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group row">
                        <label class="col-md-2 form-control-label">Courses</label>
                        <div class="col-md-10">
                            <multiselect track-by="id" :disabled="show" label="name" :searchable="true" v-model="course" :options="courses"></multiselect>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-7">
                    <div class="form-group row">
                        <label class="col-md-2 form-control-label">First Name</label>
                        <div class="col-md-10">
                        <div class="row">
                            <div class="col-md-4">
                                <input type="text" name="program" class="form-control"  v-model="search.fname" placeholder="first name">
                            </div>
                            <div class="col-md-4">
                                <input type="text" name="program" class="form-control"  v-model="search.lname" placeholder="other name">
                            </div>
                            <div class="col-md-4">
                                <input type="text" name="program" class="form-control"  v-model="search.oname" placeholder="last name" >
                            </div>
                        </div>
                        </div>
                                
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group row">
                        <label class="col-md-3 form-control-label">Index No#:</label>
                        <div class="col-md-9">
                            <input type="text" class="form-control" name="index_number"  v-model="search.index_number" v-validate="'required'">
                        </div>
                            
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-group row">
                        <button @click="searchStudent" class="btn btn-icon btn-primary">Search</button>
                    </div>
                </div>
            
            
            </div>
        </div>
        </div>
        </div>
        <div v-if="showDelete" class="alert dark alert-icon alert-danger alert-dismissible" role="alert">
           
            <button type="button" class="close" @click.prevent="showDelete = false" >
            
                <i class="icon wb-close" aria-hidden="true"></i>
            </button>
            
            <i class="icon wb-bell" aria-hidden="true"></i> Are you sure you want to delete {{this.trash.name}} ? 
            <span style="text-decoration:underline" @click="deleteItem()">Yes</span>
        </div>
        <base-table :headers="headers" :checkbox="true">
            <tr v-for="student in students" :key="student.id">
                <td>
                    <span class="checkbox-custom checkbox-primary">
                        <input class="selectable-item" type="checkbox">
                        <label></label>
                    </span>
                </td>
                <td>{{student.index_number}}</td>
                <td class="pointer" style="color:#488692" @click="view(student.id)">{{student.fname}}</td>
                <td class="pointer" style="color:#488692" @click="view(student.id)">{{student.lname}}</td>
                <td class="pointer" style="color:#488692" @click="view(student.id)">{{student.oname}}</td>
            
                <td>{{student.email}}</td>
                <td>{{student.program_name}}</td>    
                <td>
                <span>{{student.created_at | dateType2 }}</span>
                <i class="icon wb-time ml-10" aria-hidden="true"></i>
                </td>
                <td>
                    <div class="">
                        <a class="panel-action icon wb-edit" data-container="body" title=""></a>
                        <a @click.prevent="moveToTrash(student.id)" class="panel-action icon wb-trash pl-2" data-container="body" title=""></a>
                    </div>
                </td>
            </tr>
        </base-table>
    </div>
</div>
</template>

<script>
    import CrudService from '../../../services/Admin/Crud.js'
    import Multiselect from 'vue-multiselect'
    export default {
        data() {
            return {
                search: {
                    program: {},
                    year: "",
                    sem: "",
                    index_number: "",
                    course_id: "",
                    fname: "",
                    oname: "",
                    lname: ""
                },
                course: {},
                program: {},
                students: [],
                headers: ['Index No#','First Name','Last Name','Other Name','email','Program Name','Added On','Action'],
                programs: [],
                years: [1,2,3,4,5,6,7],
                sems: [1,2,3],
                courses: [],
                trash: {},
                showDelete: false,
                breadcrumb: [
                    {
                        text: 'Dashboard',
                        to: '/',
                        active: true
                    },
                    {
                        text: 'Students',
                        to: '/admin/',
                        active: false
                    }
                ],
            }
        },
        components: {
            Multiselect
        },
        methods: {
            async getStudents() {
                this.$store.dispatch('setLoading',true)
                try {
                    var students = await CrudService.index('students')

                    this.students = students.data
                    this.$store.dispatch('setLoading',false)

                } catch (error) {
                    console.log(error)
                    this.$store.dispatch('setLoading',false)

                }
            },
            moveToTrash(id) {
                var trash = this.students.filter((student) => {
                    return student.id == id
                })
                this.trash = trash[0]
                this.showDelete = true
            },
            getPrograms() {
                this.$store.dispatch('setLoading',false)
                CrudService.index('allprograms',this.student)
                .then((res) => {
                    this.programs = res
                    this.$store.dispatch('setLoading',false)
                   
                })
                .catch((err) => {
                    console.log(err.response)
                    this.$store.dispatch('setLoading',false)
                   
                })
            },

            getCoursesUnderProgram() {
                this.$store.dispatch('setFetching',true)
                CrudService.show('getCoursesUnderProgram',this.search.program_id)
                .then((res) => {
                    this.courses = res
                    this.$store.dispatch('setFetching',false)
                   
                })
                .catch((err) => {
                    console.log(err.response)
                    this.$store.dispatch('setFetching',false)
                   
                })
            },

            async deleteItem () {
            
                this.$store.dispatch('setLoading',true)
                this.showDelete = false
                try {
                    var students = await CrudService.delete('students',this.trash.id)
                    students = this.students.filter((student) => {
                        return student.id !== this.trash.id
                    })
                    this.students = students
                    this.$store.dispatch('success',`${this.trash.name} deleted`)
                    this.$store.dispatch('setLoading',false)
                } catch (e) {
                    this.$store.dispatch('setLoading',false)

                }
            
            },

            searchStudent() {
                this.$store.dispatch('setFetching',true)
                CrudService.add('searchstudent',this.search)
                .then((res) => {
                    this.students = res
                    this.$store.dispatch('setFetching',false)
                   
                })
                .catch((err) => {
                    console.log(err.response)
                    this.$store.dispatch('setFetching',false)
                   
                })
            }
        },
        created() {
            this.getPrograms()
            //this.getStudents()
        },
        computed: {
                show() {
                    return this.$store.state.routerStore.fetching
                }
            
        },
        watch: {
            program: function(val) {
                this.search.program_id = val.id
                this.getCoursesUnderProgram(val.id)
                //console.log(this.search.program_id)
            },
            course: function(val) {
                this.search.course_id = val.id
                //console.log(this.search.program_id)
            },
            
        }
        
    }
</script>

<style lang="scss" scoped>

</style>