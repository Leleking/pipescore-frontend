<template>
    <div>
        <div class="panel" id="exampleReport">
            <div class="panel-body">
                <div class=" ">
                    
                    <!-- Example Horizontal Form -->
                    <div class="example-wrap">
                        <h4 class="example-title">Course Module Form</h4>
                        <p v-if="msg">
                            <p v-if="msg" class="alert alert-info" v-html="msg"></p>
                        </p>
                    <div class="example">
                        <form class="form-horizontal">
                        <div class="form-group row">
                            <label class="col-md-3 form-control-label"><strong>Program Name</strong> </label>
                            <div class="col-md-9">
                            <input v-validate="'required'" readonly type="text" v-model="program.name" class="form-control"  autocomplete="off"
                            />

                            </div>
                            
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 form-control-label">Course Name: </label>
                            <div class="col-md-9">
                            <input v-validate="'required'" readonly type="text" v-model="course.name" class="form-control" name="Course Name"  autocomplete="off"
                            />
                            <span style="color: #D8000C"><small>{{ errors.first('Course Name') }}</small></span>

                            </div>
                            
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 form-control-label">Module Name: </label>
                            <div class="col-md-9">
                                <input v-validate="'required'" type="text" v-model="module.name" class="form-control" name="Module Name"  autocomplete="off"/>
                                <span style="color: #D8000C"><small>{{ errors.first('Module Name') }}</small></span>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 form-control-label">Description: </label>
                            <div class="col-md-6">
                            <textarea v-model="module.description" rows="7" class="form-control" name="description" v-validate="'required'" placeholder="Briefly Describe course"></textarea>
                            <span style="color: #D8000C"><small>{{ errors.first('description') }}</small></span>

                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-9 offset-md-3">
                            <button type="button" @click.prevent="addModule" class="btn btn-primary">Submit </button>
                            
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
import CourseService from "../../../../services/Admin/Courses.js";
export default {
  data() {
    return {
      course: {
        session: "",
        session_time: "",
        duration: "",
        name: "",
        description: "",
        course_type: "",
        program_id: "",
        program_name: ""
      },
      module: {
        name: "",
        description: "",
        course_id: ""
      },
      program: {

      },
      url: "../../../assets/img/login.jpg",
      msg: "",
      modules_length: 0
    };
  },
  methods: {
    async getCourseModules() {
      this.$store.dispatch("setLoading", true);
      try {
        var modules = await CourseService.getCourseModules(
          this.$store.state.appStore.app.course_id
        );
        var course = await CourseService.getCourse(this.$store.state.appStore.app.course_id);
        this.course = course.data
        this.program = this.course.program
        console.log(modules);
        this.modules_length = modules.data.length;
        this.msg = this.modules_length
        ? ""
        : `Hello ${
            this.$store.state.authStore.authUser.name
            }, you don't have any course modules under this course, we suggest you start with a <i style="font-weight:bold">course overview</i> module`;
        this.module.name = this.msg ? "Course Overview" : "";
        this.module.description = this.msg ? `this will give you a better understanding of what this course is going to be about` : "";

        this.$store.dispatch("setLoading", false);
        console.log(this.course);
      } catch (error) {
        console.log(error);
        this.$store.dispatch("setLoading", false);
      }
    },

    addModule() {
        this.$validator.validateAll()
        .then(() => {
            if(!this.errors.any()) {
                this.$store.dispatch('setLoading',true)
                this.module.course_id = this.course.id
                CourseService.addCourseModule(this.module)
                .then(({data}) => {
                    this.$store.dispatch('setLoading',false)
                    this.$router.push({name: "Add Lesson",params: {id:data.id}})
                           
                    this.$snotify.success("New Module Added")
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
    this.getCourseModules();
    
    

  }
};
</script>
