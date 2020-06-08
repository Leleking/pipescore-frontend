<template>
<div>
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top ">
      <div class="container d-flex align-items-center justify-content-between">

      <h1 class="logo"><a href="index.html">Pipescore.</a></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav class="nav-menu d-none d-lg-block">
          <ul>
          <li class="active"><a href="#header">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
         
          <li v-if="authUser"  class="drop-down"><a href="" style="color:#48117F;">{{authUser.username}}</a>
              <ul>
              <li><a href="#">Profile</a></li>
             <!--  <li class="drop-down"><a href="#">Deep Drop Down</a>
                  <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
              </li> -->
              <li><a href="#">Billing</a></li>
              <li><a href="#">logout</a></li>
             
              </ul>
          </li>
         

          </ul>
      </nav><!-- .nav-menu -->

      <router-link v-if="!authUser" to="/auth/login">LOGIN</router-link>
      <a v-if="!authUser" href="#about" class="get-started-btn scrollto">SIGN UP FREE</a>
      
      <router-link to="/panel/dashboard" v-if="authUser" class="get-started-btn">Go to Dashboard</router-link>

      </div>
  </header><!-- End Header -->
   
</div>
</template>
<script>
import {mapState} from 'vuex'
    export default{
        data(){
            return{
                user:{
                    name:'',
                    email:''
                },
            }
        },
        computed: {
            ...mapState({
                authUser : state => state.authStore.authUser,
                routeStore: state => state.routeStore
            }),
        }
      
    }
</script>
