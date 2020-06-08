<template>
    <div>
       <!--  <base-page-header name="Programs">
            <router-link v-if="$route.name == 'Programs'" to="/admin/programs/add">
                <button type="button"  class="btn btn-sm btn-icon btn-inverse btn-round">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                </button>
            </router-link>
            <router-link v-if="$route.name == 'Course Modules'" to="/admin/programs/add">
                <button type="button"  class="btn btn-sm btn-icon btn-inverse btn-round">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                </button>
            </router-link>

            <button type="button" class="btn btn-sm btn-icon btn-inverse btn-round" data-toggle="tooltip"
                data-original-title="Setting">
                <i class="fa fa-cog" aria-hidden="true"></i>
            </button>
            <button @click="$router.go(-1)" type="button" class="btn btn-sm btn-icon btn-inverse btn-round"
                >
                <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </button>
        </base-page-header> -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        methods: {
            goBack() {

            }
        },
        computed: {
            
        },
        
    }
</script>

<style lang="scss" scoped>

</style>