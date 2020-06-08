<template>
    <div>
        <div v-if="false" class="alert alert-info"><strong>Success!</strong> lesson has been added successfully</div>
        <transition appear name="custom-classes-transition" enter-active-class="animated fadeIn">

            <div v-if="!showLessonPanel" class="panel" id="exampleReport">
                <div class="panel-body">
                    <div class=" ">
                    
                        
                        <div class="example-wrap">
                            <h4 class="example-title">Module -  {{module.name}} </h4>
                        <div class="example">
                        <form class="form-horizontal">
                            <div class="form-group row">
                                <label class="col-md-3 form-control-label">Module Name: </label>
                                <div class="col-md-9">
                                    <input v-validate="'required'" type="text" v-model="module.name" class="form-control" name="Module Name"  autocomplete="off"/>
                                    <span style="color: #D8000C"><small>{{ errors.first('Module Name') }}</small></span>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 form-control-label">Description: </label>
                                <div class="col-md-9">
                                    <textarea v-model="module.description" v-validate="'required'" name="Module Description" rows="7" class="form-control" placeholder="Briefly Describe the module"></textarea>
                                    <span style="color: #D8000C"><small>{{ errors.first('Module Description') }}</small></span>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-3 offset-md-9">
                                <button type="button" @click.prevent="updateModule"  class="btn btn-primary">Update </button>
                                
                                </div>
                            </div>
                        </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>