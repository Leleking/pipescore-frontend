<template>
    <div>
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
                            <input type="number" v-model="program.cost" class="form-control" name="cost"  placeholder="eg, 2000" autocomplete="off"
                            />
                          <!--   <span style="color: #D8000C"><small>{{ errors.first('cost') }}</small></span> -->
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
                                <button type="button" @click.prevent="updateProgram" class="btn btn-primary">Update </button>
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
import ProgramService from '../../../services/Admin/Programs.js'
    import Multiselect from 'vue-multiselect'
    export default {
        components: {
            Multiselect
        },
        data() {
            return {
                id: this.$route.params.id,
                currency: ["GH","US-Dollar"],
                program: {
                    currency: "",
                    cost: "",
                    name: "",
                    description: "",
                },
                url: "../../../assets/img/login.jpg"
            }
        },
        methods: {
            onFileChange(e) {
                const file = e.target.files[0];
                this.url = URL.createObjectURL(file);
            },

            updateProgram() {
                this.$validator.validateAll()
                .then(() => {
                    if(!this.errors.any()) {
                        this.$store.dispatch('setLoading',true)
                        ProgramService.updateProgram(this.id, this.program)
                        .then((response) => {
                            this.$store.dispatch('setLoading',false)
                            //console.log(data)
                            //this.$router.push({name: "View Program",params: {id:data.id}})
                            this.$snotify.success("Program Updated")
                        })
                        .catch((err) => {
                            console.log(err.response)
                            this.$store.dispatch('setLoading',false)
                            this.$snotify.error(err.response.data.message)
                        })
                    }
                })
            },

            async getProgram() {
                this.$store.dispatch('setLoading',true)
                try {
                    var program = await ProgramService.getProgram(this.id)
                    this.program = program.data
                    this.$store.dispatch('setLoading',false)
                } catch (e) {
                    console.log(e)
                    this.$store.dispatch('setLoading',false)
                }

            }
            
        },
        created() {
           this.getProgram()
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