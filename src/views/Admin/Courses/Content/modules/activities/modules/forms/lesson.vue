<template>
    <div>
        <transition appear name="custom-classes-transition" enter-active-class="animated fadeIn">

            <div   class="panel" id="exampleReport">
                <div class="panel-body">
                    <div class=" ">
                        
                        <!-- Example Horizontal Form -->
                        <div class="example-wrap">
                            <h4 class="example-title">Add lesson</h4>
                        <div class="example">
                            <form class="form-horizontal">
                            <div class="form-group row">
                                <label class="col-md-3 form-control-label">lesson Name: </label>
                                <div class="col-md-9">
                                    <input v-validate="'required'" type="text" v-model="lesson.name" class="form-control" name="lesson Name"  autocomplete="off"/>
                                    <span style="color: #D8000C"><small>{{ errors.first('lesson Name') }}</small></span>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 form-control-label">Description: </label>
                                <div class="col-md-9">
                                    <textarea v-model="lesson.description" rows="7" class="form-control" placeholder="Briefly Describe course"></textarea>
                                    <!-- <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor> -->

                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-md-3 form-control-label">Video:</label>
                                <div class="col-md-9">
                            <!--  <textarea v-model="lesson.description" rows="7" class="form-control" placeholder="Briefly Describe course"></textarea> -->
                                    <div class="DashboardContainer"></div>

                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 form-control-label">Document</label>
                                <div class="col-md-9">
                            <!--  <textarea v-model="lesson.description" rows="7" class="form-control" placeholder="Briefly Describe course"></textarea> -->
                                    
                                  <!--   <button class="UppyModalOpenerBtn" @click.prevent="loadUppy()">Open Uppy Dashboard Modal</button> -->

                                   

                                </div>
                            </div>
                            
                            <div class="form-group row">
                                <label class="col-md-3 form-control-label">Notes: </label>
                                <div class="col-md-9">
                            <!--  <textarea v-model="lesson.description" rows="7" class="form-control" placeholder="Briefly Describe course"></textarea> -->
                                    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>

                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-12">

                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-9 offset-md-3">
                                <button type="button" @click="uploadVideo()" class="btn btn-primary">Submit </button>
                                
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    import CourseService from '@/services/Admin/Courses.js'
    import Axios from 'axios'

    const Uppy = require('@uppy/core')
    const Dashboard = require('@uppy/dashboard')
    const tus = require("@uppy/tus")
    require('@uppy/core/dist/style.css')
    require('@uppy/dashboard/dist/style.css')
    export default {
        data() {
            return {
                lesson: {
                    name: "",
                    body: "",
                    lesson_id: this.$route.params.id,
                    description: "",
                },
                token: process.env.VUE_APP_VIMEO_ACCESS_TOKEN,
                form: "",
                id:this.$route.params.id,
                editor: ClassicEditor,
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    // The configuration of the editor.
                },
                activities: true,
                module: {
                    id: "",
                    name: "",
                    description: "",
                    course_id: ""
                },
                add: false,
                url: '',
                video: '',
                video_file: {
                    name: '',
                    size: '',
                    upload_link: ''
                },

                uppy: null

            }
        },
        methods: {
            loadUppy() {
                this.uppy = Uppy({
                    restrictions: {
                        maxNumberOfFiles: 1,
                        minNumberOfFiles: 1,
                        allowedFileTypes: ['video/*']
                    },
                    onBeforeFileAdded: (currentFile, files) => {
                    if (currentFile.name) {
                        console.log(currentFile)
                        this.video_file.name =currentFile.name
                        this.video_file.size = currentFile.data.size
                        this.video_file.type = currentFile.type
                        //console.log(this.video_file)
                        return true
                    }
                    return false
                    },
                })
                .use(Dashboard, {
                    trigger: '.UppyModalOpenerBtn',
                    inline: true,
                    target: '.DashboardContainer',
                    replaceTargetContent: true,
                    showProgressDetails: true,
                    hideUploadButton: true,
                    height: 250,
                    allowMultipleUploads: false
                   
                })
                

                
            },
            onVideoChange(e) {
                this.video_file = e.target.files[0];
                
                /* console.log(file)
                this.url = URL.createObjectURL(file);
                var fileReader = new FileReader()
                fileReader.readAsDataURL(file)
                fileReader.onload = (e) => {
                    this.video = e.target.result
                    console.log(e.target.result)
                } */
            },
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

            showActivity(name) {
                this.form = name
                this.activities = false

            },
            uploadVideo() {
                
                const body = {
                "upload" : {
                    "approach" : "tus",
                    "size" : this.video_file.size
                },
                "name" : this.video_file.name
                };
                Axios.post('https://api.vimeo.com/me/videos/',body,{
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/vnd.vimeo.*+json;version=3.4',
                        'Authorization': 'bearer ' + this.token
                    }
                }).then((response) => {
                    console.log(response)
                    let videoUri = response.data.uri
                    this.video_file.upload_link = response.data.upload.upload_link
                    this.uppy.use(tus, { 
                        uploadUrl: this.video_file.upload_link,
                        metadata: {
                            filename: this.video_file.name,
                            filetype: this.video_file.type,
                        },
                        resume: true,
                        autoRetry: true,
                        retryDelays: [0, 1000, 3000, 5000]
                    })
                    this.uppy.upload().then((result) => {
                    console.info('Successful uploads:', result.successful)

                    if (result.failed.length > 0) {
                        console.error('Errors:')
                        result.failed.forEach((file) => {
                        console.error(file.error)
                        })
                    }
                    })
                   

                    /* videoUpload({
                        method: 'PATCH',
                        url: uploadLink,
                        headers: {
                            'Tus-Resumable': '1.0.0',
                            'Upload-Offset': 0,
                            'Content-Type': 'application/offset+octet-stream',
                            'Accept': 'application/vnd.vimeo.*+json;version=3.4'
                        },
                        data: this.video_file,
                        onUploadProgress() {
                            Axios.head(uploadLink, {
                                headers: {
                                    'Tus-Resumable': '1.0.0',
                                    'Accept': 'application/vnd.vimeo.*+json;version=3.4'
                                }
                            }).then(uploadResp => {
                                let uploaded = uploadResp.headers['upload-offset']
                                let total = uploadResp.headers['upload-length']
                                console.info(uploaded +' of '+ total)
                            })
                        } 

                    }).then((res) => {
                        console.log(res)
                    }).catch((err) => {
                        console.log(err)
                    })*/
                }).catch((errors) => {
                    console.log(errors)
                })
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
            }
           
        },
        mounted() {
            this.getModule()
            this.loadUppy()
            
        },
        
    }
</script>

<style lang="scss" scoped>

</style>