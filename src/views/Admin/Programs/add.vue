<template>
    <div>
        <div class="page-header page-header-bordered">
            <base-breadcrumb :items="breadcrumb"/>
            <div class="page-header-actions">
                <router-link v-if="$route.name == 'Programs'" to="/admin/programs/add">
                    <button type="button"  class="btn btn-sm btn-icon btn-inverse btn-round">
                            <i class="fa fa-plus" aria-hidden="true"></i> Add Program
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
                            <h4 class="example-title">Program Form</h4>
                            <p>
                                Programs <code>cannot be deleted</code> but can be enabled or disabled
                            </p>
                        <div class="example">
                            <form class="form-horizontal">
                            <div class="form-group row">
                                <label class="col-md-3 form-control-label">Program Name: </label>
                                <div class="col-md-9">
                                <input v-validate="'required'" type="text" v-model="program.name" class="form-control" name="name"  autocomplete="off"
                                />
                                <span style="color: #D8000C"><small>{{ errors.first('name') }}</small></span>

                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 form-control-label">Cost: </label>
                                <div class="col-md-3">
                                <multiselect v-model="program.currency" :options="currency"  placeholder="Select Currency" ></multiselect>
                                </div>
                                <div class="col-md-6">
                                <input type="number" v-model="program.cost" class="form-control" name="cost" v-validate="'required|min:1'" placeholder="eg, 2000" autocomplete="off"
                                />
                                <span style="color: #D8000C"><small>{{ errors.first('cost') }}</small></span>
                                </div>
                            
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 form-control-label">Description: </label>
                                <div class="col-md-6">
                                <textarea v-model="program.description" rows="7" class="form-control" placeholder="Briefly Describe Program"></textarea>
                            
                                </div>
                                <div class="col-md-3">
                                    Photo
                                    <!-- <div class="avatar-upload">
                                        <div class="avatar-edit">
                                            <input type='file' id="imageUpload" @change="onFileChange" accept=".png, .jpg, .jpeg" />
                                            <label for="imageUpload"></label>
                                        </div>
                                        <div class="avatar-preview">

                                            <div id="imagePreview" :style="{'background-image': `url(${url})`}">
                                            </div>
                                        </div>
                                    </div> -->
                                
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-9 offset-md-3">
                                <button type="button" @click.prevent="addProgram" class="btn btn-primary">Submit </button>
                                <button type="reset" class="btn btn-default btn-outline">Reset</button>
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
import ProgramService from '../../../services/Admin/Programs.js'
    import Multiselect from 'vue-multiselect'
    export default {
        components: {
            Multiselect
        },
        data() {
            return {
                currency: ["GH","US-Dollar"],
                program: {
                    currency: "",
                    cost: "",
                    name: "",
                    description: "",
                    school: this.$store.state.authStore.authUser.school,
                    createdBy: this.$store.state.authStore.authUser.id
                    
                },
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
                        text: 'Add Program',
                        to: '/admin',
                        active: false
                    }
                ],
                url: "../../../assets/img/login.jpg"
            }
        },
        methods: {
            onFileChange(e) {
                const file = e.target.files[0];
                this.url = URL.createObjectURL(file);
            },

            addProgram() {
                this.$validator.validateAll()
                .then(() => {
                    if(!this.errors.any()) {
                        this.$store.dispatch('setLoading',true)
                        ProgramService.addProgram(this.program)
                        .then((response) => {
                            console.log(response)
                            this.$store.dispatch('setLoading',false)
                            this.$router.push({name: "View Program",params: {id:response.id}}) 
                            this.$snotify.success("New Program Added")
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
            //this.program.school_id = this.$store.state.authStore.authUser.school_id,
            this.program.school_id = "1"
            this.program.user_id = this.$store.state.authStore.authUser.id
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