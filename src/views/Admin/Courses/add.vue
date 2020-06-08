<template>
    <div>
        <div class="panel" id="exampleReport">
            <div class="panel-body">
                <div class=" ">
                    
                    <!-- Example Horizontal Form -->
                    <div class="example-wrap">
                        <h4 class="example-title">Course Form</h4>
                        <p>
                            Courses <code>can only be deleted</code> if no student and lecturer is assign to it
                        </p>
                    <div class="example">
                        <form class="form-horizontal">
                        <div class="form-group row">
                            <label class="col-md-3 form-control-label"><strong>Program Name</strong> </label>
                            <div class="col-md-9">
                            <input v-validate="'required'" name="program_name" readonly type="text" v-model="course.program_name" class="form-control"  autocomplete="off"
                            />

                            </div>
                            
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 form-control-label">Course Name: </label>
                            <div class="col-md-9">
                            <input v-validate="'required'" type="text" v-model="course.name" class="form-control" name="Course Name"  autocomplete="off"
                            />
                            <span style="color: #D8000C"><small>{{ errors.first('Course Name') }}</small></span>

                            </div>
                            
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 form-control-label">Course Code: </label>
                            <div class="col-md-6">
                                <input v-validate="'required'" type="text" v-model="course.code" class="form-control" name="code"  autocomplete="off"/>
                                <span style="color: #D8000C"><small>{{ errors.first('code') }}</small></span>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 form-control-label">Duration: </label>
                            <div class="col-md-3">
                                <input type="text" v-model="course.duration" class="form-control" name="Duration" v-validate="'required'" placeholder="eg, 2 weeks" autocomplete="off"/>
                                <span style="color: #D8000C"><small>{{ errors.first('Duration') }}</small></span>
                            </div>
                            <div class="col-md-3">
                                <multiselect v-model="course.session" :options="session"  placeholder="Select session" ></multiselect>
                            </div>
                            <div class="col-md-3">
                                <multiselect v-model="course.session_time" :options="session_time"  placeholder="Select Session Time" ></multiselect>
                            </div>
                            
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 form-control-label">Year & Semester: </label>
                            <div class="col-md-3">
                                <multiselect v-model="course.year" :options="years"  placeholder="Select Year" ></multiselect>
                                <input type="hidden" v-model="course.year" class="form-control" name="year" v-validate="'required'"/>
                                <span style="color: #D8000C"><small>{{ errors.first('year') }}</small></span>
                            </div>
                            <div class="col-md-3">
                                <multiselect v-model="course.sem" :options="semester"  placeholder="Select Semester" ></multiselect>
                                <input type="hidden" v-model="course.sem" class="form-control" name="semester" v-validate="'required'"/>
                                <span style="color: #D8000C"><small>{{ errors.first('semester') }}</small></span>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 form-control-label">Course Type: </label>
                           
                            <div class="col-md-6">
                                <multiselect v-model="course.course_type" :options="course_type"  placeholder="Select session" ></multiselect>
                            </div>
                           
                            
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 form-control-label">Description: </label>
                            <div class="col-md-6">
                            <textarea v-model="course.description" rows="7" class="form-control" v-validate="'required'" name="description" placeholder="Briefly Describe course"></textarea>
                            <span style="color: #D8000C"><small>{{ errors.first('description') }}</small></span>
                            
                            </div>
                            <div class="col-md-3">
                                Photo
                                <div class="avatar-upload">
                                    <div class="avatar-edit">
                                        <input type='file' id="imageUpload" @change="onFileChange" accept=".png, .jpg, .jpeg" />
                                        <label for="imageUpload"></label>
                                    </div>
                                    <div class="avatar-preview">

                                        <div id="imagePreview" :style="{'background-image': `url(${url})`}">
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-9 offset-md-3">
                            <button type="button" @click.prevent="addCourse" class="btn btn-primary">Submit </button>
                            
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CourseService from '../../../services/Admin/Courses.js'
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
                course: {
                    session: "",
                    session_time: "",
                    duration: "",
                    name: "",
                    code: "",
                    description: "",
                    course_type: "",
                    program_id: this.$route.params.id,
                    course_type_id:1,
                    status: "Active",
                    program_name: this.$route.params.name,
                    user_id: this.$store.state.authStore.authUser.id,
                    image: "",
                    school_id: 1,
                    year: "",
                    sem: ""
                },
                semester: [1,2,3],
                years: [1,2,3,4,5,6,7],
                url: "../../../assets/img/login.jpg"
            }
        },
        methods: {
            onFileChange(e) {
                const file = e.target.files[0];
                this.url = URL.createObjectURL(file);
                var fileReader = new FileReader()
                fileReader.readAsDataURL(file)
                fileReader.onload = (e) => {
                    this.course.image = e.target.result
                    console.log(e.target.result)
                }
            },

            addCourse() {
                this.$validator.validateAll()
                .then(() => {
                    if(!this.errors.any()) {
                        this.$store.dispatch('setLoading',true)
                        CourseService.addCourse(this.course)
                        .then((response) => {
                            this.$store.dispatch('setLoading',false)
                            this.$router.push({name: "View Course",params: {id:response.id}})
                           
                            this.$snotify.success("New Course Added")
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
        created() {
           
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