<template>
    <div>
        <div class="container-fluid">
            <h1 class="mt-4">Projects</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">Explore the mentions of your projects</li>
            </ol>
        </div>
        <transition
            enter-active-class="animated fadeIn" 
        >
            <div class="container-fluid" v-if="!show_add">
                <div class="row">
                    <div class="col-md-8">
                        <div class="card mb-4">
                            <div class="card-header bg-white">
                            <button style="float:right" class="btn btn-primary" @click="show_add = true"> <i class="fa fa-plus"></i> Add Project</button>
                            </div>
                            <div class="card-body">
                                <table class="table">
                                <thead>
                                    <tr>
                                  
                                        <th style="width:70%" scope="col">Project</th>
                                        <th style="width:15%" scope="col">Created At</th>
                                        <th style="width:15%" scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                   
                                    <td>Mark</td>
                                    <td>Yesterday</td>
                                    <td>
                                        <button type="button" class="btn btn-primary btn-circle">
                                            <i class="fa fa-edit"></i>
                                        </button>
                                        &nbsp;
                                        <button type="button" class="btn btn-danger btn-circle">
                                            <i class="fa fa-trash"></i>
                                        </button>
                                    </td>
                                    </tr>
                                    
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">

                    </div>
                </div>
            </div>
        </transition>
        <transition
            enter-active-class="animated fadeIn" 
        >

            <div class="container-fluid" v-if="show_add">
                <div class="row">
                    <div class="col-md-8">
                        <div class="card mb-4">
                            
                            <div class="card-body">
                                <div class="section-title">
                                <h2>Enter Keyword</h2>
                                <p>Enter brand name or keyword you want to monitor</p>
                                </div>
                                <form action="">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-9">
                                            <input type="text" v-model="payload.keyword" style="border-radius:20px;padding:20px" placeholder="#lauren, #AIrules, Ben Afflek" class="form-control">
                                        </div>
                                        <div class="col-md-3">
                                            <button type="submit" @click.prevent="search()" v-if="!this.$store.state.routerStore.fetching" style="border-radius:20px"  class="btn btn-outline-primary">Create Project</button>
                                            <button type="submit" v-if="this.$store.state.routerStore.fetching" class="btn btn-outline-primary">
                                                <i class="fa fa-spinner fa-spin"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">

                    </div>
                </div>
            </div>
        </transition>
        <transition
            enter-active-class="animated fadeIn" 
        >
            <div class="container-fluid" v-if="instagram.length">
                <div class="container">
                    <div><br></div>
                </div>
                <div class="row" v-for="(result,index) in instagram" :key="index">
                    <div class="col-md-8 vcenter">
                        <div class="card mb-4"  >
                            
                            <div class="card-body">
                                <div class="panel panel-default">
                                    <div class="panel-body">
                                        <div class="row">
                                            <div class="col-md-2">
                                            <center>
                                                    <img :src="result.display_url" width="70px" height="70px" alt="">

                                            </center>
                                            </div>
                                            <div class="col-md-9">
                                                <div class="result-title">{{result.caption}}</div>
                                                
                                                <div><a  :href="result.id"><img src="/assets/img/instagram.png" width="25px" height="25px" alt=""> instagram</a></div>
                                            </div>
                                            <div class="col-md-1">
                                                
                                            </div>
                                        </div>
                                        <div class="description">
                                            <div class="result-body">
                                                {{result.body}}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 vcenter">
                        <div class="card text-white bg-info mb-4 d-flex "  >
                            
                            <div class="card-body">
                                <div class="panel panel-default">
                                    <div class="panel-body">
                                       Sentimental Analysis <br>
                                       Polarity: {{result.sentiment[0]}} <br>
                                       subjectivity: {{result.sentiment[1]}}
                                    </div>
                                    <br>
                                    
                                    <span v-if="result.sentiment[0] >= 0.5 && result.sentiment[1] >= 0.5" class="badge badge-pill badge-primary">Highly Positive</span>
                                    <h4 v-if="result.sentiment[0] == 0 || result.sentiment[1] == 0" ><span class="badge badge-pill badge-warning">Neutral</span></h4>
                                    <h4 v-if="result.sentiment[0] <= 0.5 && result.sentiment[0] > 0 "><span  class="badge badge-pill badge-primary">likely Positive</span></h4>
                                    <h4 v-if="result.sentiment[0] < 0"><span  class="badge badge-pill badge-danger">Negative</span></h4>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <transition
            enter-active-class="animated fadeIn" 
        >
            <div class="container-fluid" v-if="google.length">
                <div class="container">
                    <div><br></div>
                </div>
                <div class="row">
                    <div class="col-md-8">
                        <div class="card mb-4"  v-for="(result,index) in google" :key="index">
                            
                            <div class="card-body">
                                <div class="panel panel-default">
                                    <div class="panel-body">
                                        <div class="row">
                                            <div class="col-md-1">
                                               <center>

                                                    <svg id="Capa_1" enable-background="new 0 0 512 512" height="50" viewBox="0 0 512 512" width="50" xmlns="http://www.w3.org/2000/svg"><g><path d="m120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308h-86.308c-34.255 44.488-52.823 98.707-52.823 155.785s18.568 111.297 52.823 155.785h86.308v-86.308c-12.142-20.347-19.131-44.11-19.131-69.477z" fill="#fbbd00"/><path d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216c-20.525 12.186-44.388 19.039-69.569 19.039z" fill="#0f9d58"/><path d="m139.131 325.477-86.308 86.308c6.782 8.808 14.167 17.243 22.158 25.235 48.352 48.351 112.639 74.98 181.019 74.98v-120c-49.624 0-93.117-26.72-116.869-66.523z" fill="#31aa52"/><path d="m512 256c0-15.575-1.41-31.179-4.192-46.377l-2.251-12.299h-249.557v120h121.452c-11.794 23.461-29.928 42.602-51.884 55.638l86.216 86.216c8.808-6.782 17.243-14.167 25.235-22.158 48.352-48.353 74.981-112.64 74.981-181.02z" fill="#3c79e6"/><path d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606c-48.352-48.352-112.639-74.981-181.02-74.981l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z" fill="#cf2d48"/><path d="m256 120v-120c-68.38 0-132.667 26.629-181.02 74.98-7.991 7.991-15.376 16.426-22.158 25.235l86.308 86.308c23.753-39.803 67.246-66.523 116.87-66.523z" fill="#eb4132"/></g></svg>


                                               </center>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="result-title">{{result.title}}</div>
                                                
                                                <div><a  :href="result.link"><i class="fa fa-newspaper"></i> {{result.website}}</a></div>
                                            </div>
                                            <div class="col-md-3">
                                                
                                            </div>
                                        </div>
                                        <div class="description">
                                            <div class="result-body">
                                                {{result.body}}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">

                    </div>
                </div>
            </div>
        </transition>
        <transition
            enter-active-class="animated fadeIn" 
        >
            <div class="container-fluid" v-if="facebook.length">
                <div class="container">
                    <div><br></div>
                </div>
                <div class="row">
                    <div class="col-md-8">
                        <div class="card mb-4"  v-for="(result,index) in facebook" :key="index">
                            
                            <div class="card-body">
                                <div class="panel panel-default">
                                    <div class="panel-body">
                                        <div class="row">
                                            <div class="col-md-1">
                                            <center>

                                                <img :src="result.image" width="50px" height="50px" alt="">


                                            </center>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="result-title">{{result.text.substr(0,40)}}...</div>
                                                
                                                <div><a  :href="result.post_url"><i class="fa fa-newspaper"></i> {{result.link}}</a></div>
                                            </div>
                                            <div class="col-md-3">
                                                
                                            </div>
                                        </div>
                                        <div class="description">
                                            <div class="result-body">
                                                {{result.text}}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">

                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import CrudServices from  '../../services/Admin/Crud.js'
    export default {
        data() {
            return {
                payload: {
                    keyword: "",
                    twitter: false,
                    facebook: true,
                    instagram: true
                },
                google: [],
                facebook: [],
                instagram: [],
                show_add: false,
            }
        },
        methods: {
            search() {
                if(this.payload.keyword == "") {
                    alert("Keyword can not be empty")
                } else {
                    this.$store.dispatch('setFetching', true)
                    this.payload.keyword = this.payload.keyword.replace("#", "");
                    CrudServices.add('search/', this.payload)
                    .then((res) => {
                        this.$store.dispatch('setFetching', false)
                        this.google = res.google
                        this.facebook = res.facebook
                        this.instagram = res.instagram
                        console.log(res)
                    })
                    .catch((err) => {
                        this.$store.dispatch('setFetching', false)
                        console.log(err)
                    })
                }
                
            }
        }
    }
</script>

<style lang="scss" scoped>
.btn-primary {
    background: #5A5AF3
}
th {
    border-top:none;
}
td {
    padding:20px
}
.result-title {
    font-size: 20px;
    font-weight: 300 !important;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    cursor: pointer;
    a {
        text-decoration: none;
    }
}
.result-body {
    font-size: 13px;
    padding: 10px 20px;
    width: 100%;
    line-height: 20px;
    float: left;
    color: #9393A7;
}
    .btn-circle {
        width: 30px;
        height: 30px;
        padding: 6px 0px;
        border-radius: 15px;
        text-align: center;
        font-size: 12px;
        line-height: 1.42857;
    }
    .vcenter {
        display: inline-block;
        vertical-align: middle;
        float: none;
    }
</style>