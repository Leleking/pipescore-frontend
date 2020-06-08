<template>
    <div  data-animsition-in="fade-in" data-animsition-out="fade-out">
    <!-- ======= Hero Section ======= -->
       
    <section id="hero" class="">

        <div class="container">
        <div class="section-title">
            <h1><router-link to="/">Pipescore</router-link></h1>
        </div>
        <br>
        <div class="row">
            <div class="col-lg-6 pt-2 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h2 style="color:blue">Register for a pipescore account</h2>
                <br>
                <form action="">
                    <div class="input-group input-group-lg mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" style="background:white"><i class="fa fa-user"></i></span>
                        </div>
                        <input type="text" class="form-control" v-model="user.name" v-validate="'required'" id="inputEmail" name="username" placeholder="name">
                       
                    </div>

                    <div class="input-group input-group-lg mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" style="background:white"><i class="fa fa-envelope"></i></span>
                        </div>
                        <input type="text" class="form-control" v-model="user.email" v-validate="'required'" id="inputEmail" name="username" placeholder="Username">
                       
                    </div>
                    <span style="color:red"><small>{{ errors.first('username') }}</small></span>
                    <div class="input-group input-group-lg mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" style="background:white"><i class="fa fa-lock"></i></span>
                        </div>
                        <input type="password" class="form-control" v-model="user.password" v-validate="'required'" id="inputPassword" name="password" placeholder="Password">
                        <br>
                        
                    </div>
                    <span style="color:red"><small>{{ errors.first('password') }}</small></span>
                <div class="input-group input-group-lg mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" style="background:white"><i class="fa fa-lock"></i></span>
                    </div>
                    <input type="password" class="form-control" v-model="user.confirm_password"  id="inputPassword" name="password" placeholder="confirm password">
                    <br>
                </div>
                <div style="text-align:center">
                    <button type="submit" 
                    @click.prevent="signIn()" v-if="!this.$store.state.routerStore.fetching" class="btn-get-quote bg-white">Signup</button>
                    <button type="submit" v-if="this.$store.state.routerStore.fetching" class="btn-get-quote bg-white">
                        <i class="fa fa-spinner fa-spin"></i>
                    </button>
                </div>

                    
                </form>
                
                <div>Have an account yet? <router-link to="/auth/login">Login!</router-link></div>
            
            </div>
            <div class="col-lg-6 order-1 order-lg-2 hero-img">
            <img src="/assets/img/services.png" class="" alt="">
            </div>
        </div>
        </div>

    </section><!-- End Hero -->
    <!-- <div class="page-content">
        <div class="container">
            <span style="padding-right:50px">For Individuals</span> Teams and Conditions
        </div>
        <div class="page-brand-info">
        <div class="brand">
            <img class="brand-img" height="100px" src="../../assets/img/origami_png_966185.png" alt="...">
            <h2 class="brand-text font-size-40">PaperMap</h2>
        </div>
        <p class="font-size-20">
            “Nobody can go back and start a new beginning, but anyone can start today and make a new ending.” – Maria Robinson
        </p>
        </div>

        <div style="height:100vh" class="page-login-main animation-slide-right animation-duration-1">
        <div class="brand hidden-md-up">
            <img class="brand-img" height="50px" src="../../assets/img/origami_png_966185.png" alt="...">
            <h3 class="brand-text font-size-40">PaperMap</h3>
        </div>
        <h3 class="font-size-24">Sign In</h3>
        <p>Sign In with as a lecturer or student</p>

        <form>
            <div class="form-group">
                <label class="sr-only" for="inputEmail">Email</label>
                <input type="text" class="form-control" v-model="user.username" v-validate="'required|email'" id="inputEmail" name="email" placeholder="Email">
                <span style="color:red"><small>{{ errors.first('email') }}</small></span>
            </div>
            <div class="form-group">
                <label class="sr-only" for="inputPassword">Password</label>
                <input type="password" class="form-control" v-model="user.password" v-validate="'required'" id="inputPassword" name="password" placeholder="Password">
                <span style="color:red"><small>{{ errors.first('password') }}</small></span>
            </div>
            <div class="form-group clearfix">
                <div class="checkbox-custom checkbox-inline checkbox-primary float-left">
                    <input type="checkbox" id="rememberMe" name="rememberMe">
                    <label for="rememberMe">Remember me</label>
                </div>
                <a class="float-right" href="forgot-password.html">Forgot password?</a>
            </div>
            <button type="submit" 
            @click.prevent="signIn()" v-if="!this.$store.state.routerStore.fetching" class="btn btn-primary btn-block">Sign in</button>
            <button type="submit" v-if="this.$store.state.routerStore.fetching" class="btn btn-primary btn-block">
                <i class="fa fa-spinner fa-spin"></i>
            </button>

        </form>

       

        <footer class="page-copyright">
           
            <div class="social">
            <a class="btn btn-icon btn-round social-twitter mx-5" href="javascript:void(0)">
            <i class="icon bd-twitter" aria-hidden="true"></i>
        </a>
            <a class="btn btn-icon btn-round social-facebook mx-5" href="javascript:void(0)">
            <i class="icon bd-facebook" aria-hidden="true"></i>
        </a>
            <a class="btn btn-icon btn-round social-google-plus mx-5" href="javascript:void(0)">
            <i class="icon bd-google-plus" aria-hidden="true"></i>
        </a>
            </div>
        </footer>
        </div>

    </div> -->
    </div>
</template>
<script>
import AuthMixin from '../../mixins/authMixin.js'
    export default{
    data() {
        return {

        }
    },
    mixins: [AuthMixin],
     
    }
</script>

<style>
body {
    background: transparent;
}

</style>