<template>
    <div>
       
       <!--  <base-page-header name="Courses" :breadcrumb="breadcrumb">
            <router-link v-if="$route.name == 'My Courses'" to="/admin/courses/add">
                <button type="button"  class="btn btn-sm btn-icon btn-inverse btn-round" data-toggle="tooltip"
                    data-original-title="Add Course">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                </button>
            </router-link>
            <router-link v-if="$route.name == 'Course Students'" to="/admin/courses/course_students/add">
                <button type="button"  class="btn btn-sm btn-icon btn-inverse btn-round">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                </button>
            </router-link>
            <router-link v-if="$route.name == 'Course Modules'" to="/admin/courses/add/module">
                <button type="button"  class="btn btn-sm btn-icon btn-inverse btn-round" data-toggle="tooltip"
                    data-original-title="Add Course">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                </button>
            </router-link>
            <button @click="$router.go(-1)" type="button" class="btn btn-sm btn-icon btn-inverse btn-round"
                >
                <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </button>
        </base-page-header> -->
        <div class="modal fade" id="examplePositionSidebar" aria-hidden="true" aria-labelledby="examplePositionSidebar"
            role="dialog" tabindex="-1">
            <div class="modal-dialog modal-simple modal-sidebar modal-sm">
            <div class="modal-content">
                <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <h4 class="modal-title">Modal Title</h4>
                </div>
                <div class="modal-body">
                <p>One fine body…</p>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-primary btn-block">Save changes</button>
                <button type="button" class="btn btn-default btn-block" data-dismiss="modal">Close</button>
                </div>
            </div>
            </div>
        </div>
        <!-- End Modal -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                breadcrumb: [
                    {
                        text: 'Dashboard',
                        to: '/admin/dashboard',
                        active: false
                    },
                    {
                        text: 'Course',
                        to: '/',
                        active: false
                    }
                ]
            }
        },
        methods: {
            goBack() {

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>