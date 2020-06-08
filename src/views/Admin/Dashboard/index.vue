<template>
    <div class="">
        <div class="page-header page-header-bordered">
            <ol class="breadcrumb">
           <!--      <li class="breadcrumb-item"><a href="../index.html">Home</a></li>
                <li class="breadcrumb-item"><a href="javascript:void(0)">Layouts</a></li> -->
            </ol>
            <h1 class="page-title">Dashboard</h1>
            <div class="page-header-actions">
            <button type="button" class="btn btn-sm btn-outline btn-default btn-round">
                <span class="text hidden-sm-down">Settings</span>
                <i class="icon wb-chevron-right" aria-hidden="true"></i>
            </button>
            </div>
        </div>
        
        
   <!--      <div class="row no-gutters">
            <div @click.prevent="openUp('/lecturer/dashboard')" class="col-xl-2 col-lg-3 col-md-4 col-sm-12 col-xs-12 p-2 pointer">
                <div class="card" >
                    <img class="card-img-top w-full" height="149.16px" src="../../../assets/img/login.jpg" alt="Card image cap">
                    <div class="card-block">
                        <h4  class="card-title cut-text">
                            <center>
                                Dashboard
                            </center>
                        </h4>
                   
                    </div>
                </div>
            </div>
            <div @click.prevent="openUp('/admin/students/all')"  class="col-xl-2 col-lg-3 col-md-4 col-sm-12 col-xs-12 p-2 pointer">
                <div class="card" >
                    <img class="card-img-top w-full" height="149.16px" src="../../../assets/img/student.png" alt="Card image cap">
                    <div  class="card-block">
                        <h4 class="card-title cut-text">
                            <center>
                                Students
                            </center>
                        </h4>
                   
                    </div>
                </div>
            </div>
            <div  @click.prevent="openUp('/admin/programs')" class="col-xl-2 col-lg-3 col-md-4 col-sm-12 col-xs-12 p-2 pointer">
                <div class="card" >
                    <img class="card-img-top w-full" height="149.16px" src="../../../assets/img/login.jpg" alt="Card image cap">
                    <div class="card-block">
                        <h4 class="card-title cut-text">
                            <center>
                                Programs
                            </center>
                        </h4>
                   
                    </div>
                </div>
            </div>
        </div> -->
        <div class="page-content">
            <div class="row ">
                <div class="col-md-3">
                    <div @click.prevent="openUp('/lecturer/dashboard')"  class="card card-block p-25 box">
                        <div class="counter counter-lg pointer">
                            <span class="counter-number"><i class="md-file"></i></span>
                            <div class="counter-label text-uppercase ">Dashboard</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div @click.prevent="openUp('/admin/lecturers')"  class="card card-block p-25 box">
                        <div class="counter counter-lg pointer">
                            <span class="counter-number"><i class="icon wb-inbox" aria-hidden="true"></i></span>
                            <div class="counter-label text-uppercase">Lecturers</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div @click.prevent="openUp('/admin/programs')" class="card card-block p-25 box">
                        <div class="counter counter-lg pointer">
                            <span class="counter-number"><i class="icon wb-inbox" aria-hidden="true"></i></span>
                            <div class="counter-label text-uppercase">Programs</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div @click.prevent="openUp('/admin/courses/all')" class="card card-block p-25 box">
                        <div class="counter counter-lg pointer">
                            <span class="counter-number"><i class="fa fa-book" aria-hidden="true"></i></span>
                            <div class="counter-label text-uppercase">Courses</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card card-block p-25 box">
                        <div class="counter counter-lg pointer">
                            <span class="counter-number"><i class="icon wb-plugin"></i></span>
                            <div class="counter-label text-uppercase">Course Types</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card card-block p-25 box">
                        <div class="counter counter-lg pointer">
                            <span class="counter-number"><i class="md-view-dashboard"></i></span>
                            <div class="counter-label text-uppercase">Timetable</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card card-block p-25 box">
                        <div class="counter counter-lg pointer">
                            <span class="counter-number"><i class="md-account-calendar"></i></span>
                            <div class="counter-label text-uppercase">Calender</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card card-block p-25 box">
                        <div class="counter counter-lg pointer">
                            <span class="counter-number"><i class="md-folder"></i></span>
                            <div class="counter-label text-uppercase">Files</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div @click.prevent="openUp('/admin/students/all')" class="card card-block p-25 box">
                        <div class="counter counter-lg pointer">
                            <span class="counter-number"><i class="md-accounts"></i></span>
                            <div class="counter-label text-uppercase">Students</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card card-block p-25 box">
                        <div class="counter counter-lg pointer">
                            <span class="counter-number"><i class="fa fa-cog"></i></span>
                            <div class="counter-label text-uppercase">Settings</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
</template>

<script>
    export default {
        
        data() {
            return {
                series: [
                    {
                        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
                    }
                ],
                options: {
                    chart: {
                        id: 'vuechart-example'
                    },
                    xaxis: {
                        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                    }
                },
            }
        },
        methods: {
            openUp(link) {
                this.$router.push(link)
            }
        }
    }
</script>

<style lang="scss" scoped>
.pointer {
    cursor: pointer;
}
.box {
    border:1px solid rgb(189, 189, 189);
}
</style>