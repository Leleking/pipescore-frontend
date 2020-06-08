<template>
    <div>
        <div class="page-header page-header-bordered">
            <base-breadcrumb :items="breadcrumb"/>
            <div class="page-header-actions">
                <button @click="$router.go(-1)" type="button" class="btn btn-sm btn-icon btn-inverse btn-round"
                    >
                    <i class="fa fa-arrow-left" aria-hidden="true"></i> Back
                </button>
            </div>
        </div>
        <div class="page-content">
            <div class="panel" id="exampleReport">
                <div class="panel-body">
                    <div class=" ">
                    
                        <!-- Example Horizontal Form -->
                        <div class="example-wrap">
                            <h4 class="example-title">Student Form</h4>
                            <p>
                                Students will be informed immediately they are added to Papermap
                            </p>
                        <div class="example">
                            <form class="form-horizontal">
                            <div class="form-group row">
                                <label class="col-md-3 form-control-label"><strong>Student Name</strong> </label>
                                <div class="col-md-9">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <input v-validate="'required'" name="first name"  type="text" v-model="student.fname" class="form-control" placeholder="First Name"  autocomplete="off"
                                            />
                                                <span style="color: #D8000C"><small>{{ errors.first('first name') }}</small></span>

                                        </div>
                                        <div class="col-md-4">
                                            <input v-validate="'required'" name="last name"  type="text" v-model="student.lname" class="form-control" placeholder="Last Name"  autocomplete="off"
                                            />
                                                <span style="color: #D8000C"><small>{{ errors.first('last name') }}</small></span>

                                        </div>
                                        <div class="col-md-4">
                                            <input name="other name"  type="text" v-model="student.oname" class="form-control" placeholder="Other Name"  autocomplete="off"
                                            />
                                         

                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 form-control-label">Email: </label>
                                <div class="col-md-9">
                                <input v-validate="'required'" type="text" v-model="student.email" class="form-control" name="email"  autocomplete="off"
                                />
                                <span style="color: #D8000C"><small>{{ errors.first('email') }}</small></span>

                                </div>
                            
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 form-control-label">Phone#: </label>
                                <div class="col-md-9">
                                <input v-validate="'required'" type="text" v-model="student.phone" class="form-control" name="phone"  autocomplete="off"
                                />
                                <span style="color: #D8000C"><small>{{ errors.first('phone') }}</small></span>

                                </div>
                                
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 form-control-label">Index Number#: </label>
                                <div class="col-md-9">
                                <input  type="text" v-validate="'required'" v-model="student.index_number" class="form-control" name="index number"  autocomplete="off"
                                />
                                <span style="color: #D8000C"><small>{{ errors.first('index number') }}</small></span>

                                </div>
                                
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 form-control-label">Program</label>
                                <div class="col-md-9">
                                    <multiselect track-by="id" label="name" v-model="student.program" :options="programs"></multiselect>
                                    <input type="hidden" name="program"  v-model="student.program" v-validate="'required'">
                                    <span style="color: #D8000C"><small>{{ errors.first('program') }}</small></span>
                                </div>
                                
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 form-control-label">Year</label>
                                <div class="col-md-9">
                                    <multiselect v-model="student.year" :options="years"></multiselect>
                                    <input type="hidden" name="year"  v-model="student.year" v-validate="'required'">
                                    <span style="color: #D8000C"><small>{{ errors.first('year') }}</small></span>
                                </div>
                                
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 form-control-label">Semester</label>
                                <div class="col-md-9">
                                    <multiselect v-model="student.sem" :options="semester"></multiselect>
                                    <input type="hidden" name="semester"  v-model="student.sem" v-validate="'required'">
                                    <span style="color: #D8000C"><small>{{ errors.first('semester') }}</small></span>
                                </div>
                                
                            </div>
                        
                       
                            <div class="form-group row">
                                <label class="col-md-3 form-control-label">Address: </label>
                                <div class="col-md-9">
                                <textarea name="address" v-model="student.address"  id="" cols="70" rows="10"></textarea>
                                <span style="color: #D8000C"><small>{{ errors.first('address') }}</small></span>

                                </div>
                                
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 form-control-label">location: </label>
                                <div class="col-md-9">
                                <textarea name="" id="" v-model="student.location" cols="70" rows="10"></textarea>
                                <span style="color: #D8000C"><small>{{ errors.first('location') }}</small></span>

                                </div>
                                
                            </div>
                   
                     
                            <div class="form-group row">
                                <div class="col-md-9 offset-md-3">
                                <button type="button" @click.prevent="addStudent" class="btn btn-primary">Submit </button>
                            
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Crud from '../../../services/Admin/Crud.js'
    import Multiselect from 'vue-multiselect'
    export default {
        components: {
            Multiselect
        },
        data() {
            return {
                session: ["Weekdays","Weekends"],
                session_time: ["Morning","Afternoon","Evening"],
                course_type: ["Core","Elective"],
                student: {
                   
                    fname: "",
                    lname: "",
                    oname: "",
                    email: "",
                    phone: "",
                    index_number: "",
                    address: "",
                    location: "",
                    program: "",
                    program_id: "",
                    program_name: "",
                    year: "",
                    sem: "",
                },
                breadcrumb: [
                    {
                        text: 'Dashboard',
                        to: '/',
                        active: true
                    },
                    {
                        text: 'Students',
                        to: '/admin/students/all',
                        active: true
                    },
                    {
                        text: 'Add Student',
                        to: '/admin/',
                        active: false
                    }
                ],
                programs: [],
                years: [1,2,3,4,5,6,7],
                semester: [1,2,3],
                url: "../../../assets/img/login.jpg"
            }
        },
        methods: {
             getPrograms() {
                this.$store.dispatch('setLoading',false)
                Crud.index('allprograms',this.student)
                .then((res) => {
                    this.programs = res
                    this.$store.dispatch('setLoading',false)
                   
                })
                .catch((err) => {
                    console.log(err.response)
                    this.$store.dispatch('setLoading',false)
                   
                })
            },
            addStudent() {
                this.$validator.validateAll()
                .then(() => {
                    if(!this.errors.any()) {
                        this.$store.dispatch('setLoading',true)
                        this.student.program_id = this.student.program.id
                        this.student.program_name = this.student.program.name
                        //this.student.oname = (this.student.oname) ? this.student.oname: " " 
                        Crud.add('students',this.student)
                        .then(({data}) => {
                            this.$store.dispatch('setLoading',false)
                            //this.$router.push({name: "View Course",params: {id:data.id}})
                           
                            this.$snotify.success("Student Added")
                        })
                        .catch((err) => {
                            console.log(err.response)
                            this.$store.dispatch('setLoading',false)
                            this.$snotify.error(err.response.data.message)
                            this.$snotify.error(err.response.data.errors)
                        })
                    }
                })
            }
            
        },
        created() {
            this.getPrograms()
        }
    }
</script>

<style lang="scss" scoped>
.image-container {
        max-width: 960px;
        margin: 30px auto;
        padding: 20px;
    }

    h1 {
        font-size: 20px;
        text-align: center;
        margin: 20px 0 20px;
        small {
            display: block;
            font-size: 15px;
            padding-top: 8px;
            color: gray;
        }
    }

    .avatar-upload {
        position: relative;
        max-width: 205px;
        
        .avatar-edit {
            position: absolute;
            right: 12px;
            z-index: 1;
            top: 10px;
            input {
                display: none;
                + label {
                    display: inline-block;
                    width: 34px;
                    height: 34px;
                    margin-bottom: 0;
                    border-radius: 100%;
                    background: #FFFFFF;
                    border: 1px solid transparent;
                    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
                    cursor: pointer;
                    font-weight: normal;
                    transition: all .2s ease-in-out;
                    &:hover {
                        background: #f1f1f1;
                        border-color: #d6d6d6;
                    }
                    &:after {
                        content: "\f040";
                        font-family: 'FontAwesome';
                        color: #757575;
                        position: absolute;
                        top: 10px;
                        left: 0;
                        right: 0;
                        text-align: center;
                        margin: auto;
                    }
                }
            }
        }
        .avatar-preview {
            width: 192px;
            height: 162px;
            position: relative;
            border: 6px solid #F8F8F8;
            box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
            > div {
                width: 100%;
                height: 100%;
                border-radius: 100%;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
            }
        }
    }
</style>
