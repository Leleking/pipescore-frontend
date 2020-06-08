<template>
    <div>
       <!--  <base-page-header name="Programs" style="padding-bottom:20px">
            <router-link v-if="$route.name == 'All Students'" to="/admin/students/add">
                <button type="button"  class="btn btn-icon btn-inverse btn-round">
                        <i class="fa fa-file-excel" aria-hidden="true"></i> Excel
                </button>
            </router-link>
            <router-link v-if="$route.name == 'All Students'" to="/admin/students/add">
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
        <router-view/>
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