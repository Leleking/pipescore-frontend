<template>
    <div>
        <div>
            <div class="panel" id="exampleReport">
                <div class="panel-body">
                    <div class="panel-heading">
                    <div class="row p-10">
                        <div v-if="search" class="col-md-6 offset-md-3">
                            <form class="page-search-form" role="search">
                                <div class="input-search input-search-dark">
                                    <i class="input-search-icon wb-search" aria-hidden="true"></i>
                                    <input type="text" class="form-control" id="inputSearch" name="search" placeholder="Search...">
                                </div>
                            </form>
                        </div>
                    </div>
                <!--  <div class="panel-actions">
                        <a class="panel-action icon wb-edit" data-toggle="tooltip" data-original-title="edit"
                        data-container="body" title=""></a>
                        <a class="panel-action icon wb-trash" data-toggle="tooltip" data-original-title="move to trash"
                        data-container="body" title=""></a>
                    </div> -->
                    </div>
                    <div class="">
                        <div class="table-responsive">
                            <table  class="table table-hover" data-role="content" data-plugin="selectable" data-row-selectable="true">
                                <thead class="bg-blue-grey-100">
                                    <tr >
                                        <th v-if="checkbox">
                                            <span class="checkbox-custom checkbox-primary">
                                                <input class="selectable-all" type="checkbox">
                                                <label></label>
                                            </span>
                                        </th>
                                        <th v-for="(header,index) in headers" :key="index">
                                            {{header}}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <slot/>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            headers: {
                type: Array,
                default: () => [],
                required: true
            },
            checkbox: {
                type: Boolean,
                default: () => true,
            },
            title: {
                type: String,
                default: () => ''
            },
            search: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>