<template>
    <div>
        <div class="page-header page-header-bordered">
            <base-breadcrumb :items="breadcrumb"/>
            <div class="page-header-actions">
                <router-link  to="/admin/lecturers/add">
                    <button type="button"  class="btn btn-sm btn-icon btn-inverse btn-round" data-toggle="tooltip"
                        data-original-title="Add Course">
                            <i class="fa fa-plus" aria-hidden="true"></i> Add Lectuerer
                    </button>
                </router-link>
                <button @click="$router.go(-1)" type="button" class="btn btn-sm btn-icon btn-inverse btn-round"
                    >
                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                </button>
            </div>
        </div>
        <div class="page-content">
            <div class="panel" id="exampleReport">
                <div class="panel-body">
                    <div class=" ">
                    
                        <!-- Example Horizontal Form -->
                        <div class="example-wrap">
                            <h4 class="example-title">Lecturer Form</h4>
                            <p>
                                Lecturers will be informed immediately their info is changed
                            </p>
                        <div class="example">
                            <form class="form-horizontal">
                            <div class="form-group row">
                                <label class="col-md-3 form-control-label"><strong>Lecturer Name</strong> </label>
                                <div class="col-md-9">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <input v-validate="'required'" name="first name"  type="text" v-model="lecturer.fname" class="form-control" placeholder="First Name"  autocomplete="off"
                                            />
                                                <span style="color: #D8000C"><small>{{ errors.first('first name') }}</small></span>

                                        </div>
                                        <div class="col-md-4">
                                            <input v-validate="'required'" name="last name"  type="text" v-model="lecturer.lname" class="form-control" placeholder="Last Name"  autocomplete="off"
                                            />
                                                <span style="color: #D8000C"><small>{{ errors.first('last name') }}</small></span>

                                        </div>
                                        <div class="col-md-4">
                                            <input name="other name"  type="text" v-model="lecturer.oname" class="form-control" placeholder="Other Name"  autocomplete="off"
                                            />
                                         

                                        </div>
                                    </div>
                                    </div>
                            
                            </div>
                        
                            <div class="form-group row">
                                <label class="col-md-3 form-control-label">Email: </label>
                                <div class="col-md-9">
                                <input v-validate="'required'" type="text" v-model="lecturer.email" class="form-control" name="email"  autocomplete="off"
                                />
                                <span style="color: #D8000C"><small>{{ errors.first('email') }}</small></span>

                                </div>
                            
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 form-control-label">Phone#: </label>
                                <div class="col-md-9">
                                <input v-validate="'required'" type="text" v-model="lecturer.phone" class="form-control" name="phone"  autocomplete="off"
                                />
                                <span style="color: #D8000C"><small>{{ errors.first('phone') }}</small></span>

                                </div>
                                
                            </div>
                   
                     
                            <div class="form-group row">
                                <div class="col-md-9 offset-md-3">
                                <button type="button" @click.prevent="editLecturer" class="btn btn-primary">Submit </button>
                            
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
import CrudService from '../../../../services/Admin/Crud.js'
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
                lecturer: {
                    id:0,
                    name: "",
                    email: "",
                    phone: "",
                    fname: "",
                    oname: "",
                    lname: ""
                },
                breadcrumb: [
                    {
                        text: 'Dashboard',
                        to: '/',
                        active: true
                    },
                    {
                        text: 'Lecturers',
                        to: '/admin/lecturers/all',
                        active: true
                    },
                    {
                        text: 'Edit Lecturer Details',
                        to: '/admin/lecturers/all',
                        active: false
                    }
                ],
                url: "../../../assets/img/login.jpg",
                id: this.$route.params.id
            }
        },
        methods: {
            editLecturer() {
                this.$validator.validateAll()
                .then(() => {
                    if(!this.errors.any()) {
                        this.$store.dispatch('setLoading',true)
                        CrudService.update('lecturers', this.lecturer, this.id)
                        .then(({data}) => {
                            this.$store.dispatch('setLoading',false)
                            //this.$router.push({name: "View Course",params: {id:data.id}})
                           
                            this.$snotify.success("Lecturer Information Updated")
                        })
                        .catch((err) => {
                            console.log(err.response)
                            this.$store.dispatch('setLoading',false)
                            this.$snotify.error(err.response.data.message)
                        })
                    }
                })
            },

            async getLecturer() {
                this.$store.dispatch('setLoading',true)
                try {
                    var lecturer = await CrudService.show('lecturers',this.id)

                    this.lecturer = lecturer.data
                    this.$store.dispatch('setLoading',false)

                } catch (error) {
                    console.log(error)
                    this.$store.dispatch('setLoading',false)

                }
            },
            
        },
        created() {
           this.getLecturer()
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