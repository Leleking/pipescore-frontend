<template>
  
        <div class="panel">
            <div class="panel-heading" :id="'exampleHeadingDefault' +id" role="tab">
                <a class="panel-title collapsed" data-toggle="collapse" :href="'#' + id"
                data-parent="#exampleAccordionDefault" aria-expanded="true"
                aria-controls="exampleCollapseDefaultOne">
                <i class="fa fa-anchor"></i><router-link :to="to"> {{title}}</router-link>
            </a>
            </div>
            <div class="panel-collapse collapse" :id="id" :aria-labelledby="'exampleHeadingDefault'+id"
                role="tabpanel">
                <div class="panel-body">
                    <slot></slot>
                </div>
            </div>
        </div>
                
  
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
   
        props: {
            id: {
                type: Number,
                required: true
            },
            title: {
                type: String,
                required: true,
            },
            to: {
                type: String,
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>