<template>
<div>
<nav class="site-navbar navbar navbar-default navbar-fixed-top navbar-mega navbar-inverse"
    role="navigation">
    
    <div class="navbar-header">
        <button  type="button" class="navbar-toggler hamburger hamburger-close navbar-toggler-left hided"
        data-toggle="menubar">
        <span class="sr-only">Toggle navigation</span>
        <span id="close" class="hamburger-bar"></span>
        </button>
        <button type="button" class="navbar-toggler collapsed" data-target="#site-navbar-collapse"
        data-toggle="collapse">
        <i class="icon md-more" aria-hidden="true"></i>
        </button>
        <div class="navbar-brand navbar-brand-center site-gridmenu-toggle" data-toggle="gridmenu">
        <img class="navbar-brand-logo" src="/static/assets/images/logo.png" title="Remark">
        <span class="navbar-brand-text hidden-xs-down"> Keystamp </span>
        </div>
      
    </div>
    
    <div class="navbar-container container-fluid">
        <!-- Navbar Collapse -->
        <div class="collapse navbar-collapse navbar-collapse-toolbar" id="site-navbar-collapse">
        <!-- Navbar Toolbar -->
        <ul class="nav navbar-toolbar">
            <li class="nav-item hidden-float" id="toggleMenubar">
            <a id="close" class="nav-link" data-toggle="menubar" href="#" role="button">
                <i  class="icon hamburger hamburger-arrow-left">
                <span class="sr-only">Toggle menubar</span>
                <span  class="hamburger-bar"></span>
                </i>
            </a>
            </li>
            <li class="nav-item hidden-sm-down" id="toggleFullscreen">
            <a class="nav-link icon icon-fullscreen" data-toggle="fullscreen" href="#" role="button">
                <span class="sr-only">Toggle fullscreen</span>
            </a>
            </li>
        </ul>
        <!-- End Navbar Toolbar -->
    
        <!-- Navbar Toolbar Right -->
        <ul class="nav navbar-toolbar navbar-right navbar-toolbar-right">
            <li class="nav-item dropdown">
            <a class="nav-link navbar-avatar" data-toggle="dropdown" href="#" aria-expanded="false"
                data-animation="scale-up" role="button">
                <span class="avatar avatar-online">
                <img src="/assets/portraits/5.jpg" alt="...">
                <i></i>
                </span>
            </a>
            <div class="dropdown-menu" role="menu">
                <a class="dropdown-item" href="javascript:void(0)" role="menuitem"><i class="icon md-account" aria-hidden="true"></i> Profile</a>
                <a class="dropdown-item" href="javascript:void(0)" role="menuitem"><i class="icon md-card" aria-hidden="true"></i> Billing</a>
                <a class="dropdown-item" href="javascript:void(0)" role="menuitem"><i class="icon md-settings" aria-hidden="true"></i> Settings</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" role="menuitem" @click.prevent="logout()"><i class="icon md-power"  aria-hidden="true"></i> Logout</a>
            </div>
            </li>
            <li v-show="navL" class="nav-item dropdown">
            <a class="nav-link" data-toggle="dropdown" href="javascript:void(0)" title="Notifications"
                aria-expanded="false" data-animation="scale-up" role="button">
                <i class="icon md-notifications" aria-hidden="true"></i>
                <span class="badge badge-pill badge-danger up">5</span>
            </a>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-media" role="menu">
                <div class="dropdown-menu-header">
                <h5>NOTIFICATIONS</h5>
                <span class="badge badge-round badge-danger">New 5</span>
                </div>
    
                <div class="list-group">
                <div data-role="container">
                    <div data-role="content">
                     
                    </div>
                </div>
                </div>
                <div class="dropdown-menu-footer">
                <a class="dropdown-menu-footer-btn" href="javascript:void(0)" role="button">
                    <i class="icon md-settings" aria-hidden="true"></i>
                </a>
                <a class="dropdown-item" href="javascript:void(0)" role="menuitem">
                    All notifications
                </a>
                </div>
            </div>
            </li>
            
        
        </ul>
        <!-- End Navbar Toolbar Right -->
    
        <div class="navbar-brand navbar-brand-center">
            <router-link to="/">
            <span class="navbar-brand-logo navbar-brand-logo-normal" style="color:white">Papermap - {{this.$route.name}}</span>
            <!--
            <img class="navbar-brand-logo navbar-brand-logo-normal" src="/static/assets/images/logo.png"
                title="Remark">
            <img class="navbar-brand-logo navbar-brand-logo-special" src="/static/assets/images/logo-colored.png"
                title="Remark">
                -->
            </router-link>
        </div>
        </div>
        <!-- End Navbar Collapse -->
    
        <!-- Site Navbar Seach -->
       
        <!-- End Site Navbar Seach -->
    </div>
</nav>   
    <div class="site-menubar">
    <div class="site-menubar-header">
        <div class="cover overlay">
        <img class="cover-image" src="/assets//examples/images/dashboard-header.jpg"
            alt="...">
        <div class="overlay-panel vertical-align overlay-background">
            <div class="vertical-align-middle">
            <a class="avatar avatar-lg" href="javascript:void(0)">
                <img src="/static/assets/portraits/1.jpg" alt="">
            </a>
            <div class="site-menubar-info">
                <h5 class="site-menubar-user">{{authUser.name}}</h5>
                <p class="site-menubar-email">{{authUser.email}}</p>
            </div>
            </div>
        </div>
        </div>
    </div>  <div class="site-menubar-body">
        <div>
        <div>
            <ul class="site-menu" data-plugin="menu">
                <li class="site-menu-item ">
                    <a @click.prevent="openUp('/student/dashboard')">
                            <i class="site-menu-icon md-view-dashboard" aria-hidden="true"></i>
                            <span class="site-menu-title">Dashboard</span>
                        </a>
                </li>
               
             
            </ul>      
            </div>
        </div>
    </div>
    </div>
</div>
</template>
<script>
import {mapState, mapGetters} from 'vuex'
    export default{
        data(){
            return{
                user:{
                    name:'',
                    email:''
                },
            }
        },
        computed:{
            ...mapState({
                authUser : state => state.authStore.authUser,
                routeStore: state => state.routeStore
            }),
            navL(){
            return this.loader
            }
        },
        methods:{
            logout(){
                this.$store.dispatch('unsetAuthUser')
                this.$router.push({name:'Login'})
            },
            tester(){
            this.$store.dispatch('setLoading',false)
            },
            openUp(link) {
            $('#close').click()
            this.$router.push(link)
            }
        },
        created(){
        //$('#close').click()
            this.user.name = "test"
            this.user.email = "teser"
            $(document).ready(function() {
             
            })
        }
    }
</script>
