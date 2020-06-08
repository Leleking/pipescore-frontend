<template>
    <div>
        <div class="page-header page-header-bordered">
            <base-breadcrumb :items="breadcrumb"/>
            <h1 class="page-title">Lectuerers</h1>
            <div class="page-header-actions">
                <router-link v-if="$route.name == 'A-Lecturers'" to="/admin/lecturers/add">
                    <button type="button"  class="btn btn-sm btn-icon btn-inverse btn-round" data-toggle="tooltip"
                        data-original-title="Add Course">
                            <i class="fa fa-plus" aria-hidden="true"></i> Add Lectuerer
                    </button>
                </router-link>
                <button @click="$router.go(-1)" type="button" class="btn btn-sm btn-icon btn-inverse btn-round"
                    >
                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                </button>
            </div>
        </div>
        <div class="page-content">
            <div class="panel" id="exampleReport">
                <div class="panel-body">
                    <div class="panel-heading">
                   <!--  <h6 class="panel-title">Last Updated - 23rd June, 2019</h6> -->
                    <div class="panel-actions">
                        <a class="panel-action icon wb-edit" data-toggle="tooltip" data-original-title="edit"
                        data-container="body" title=""></a>
                        <a class="panel-action icon wb-trash" data-toggle="tooltip" data-original-title="move to trash"
                        data-container="body" title=""></a>
                    </div>
                    </div>
                    <div class="">
                        <base-table :headers="headers" :checkbox="true" :search="true">
                            <tr v-for="lecturer in lecturers" :key="lecturer.id">
                                <td>
                                    <span class="checkbox-custom checkbox-primary">
                                        <input class="selectable-item" type="checkbox">
                                        <label></label>
                                    </span>
                                </td>
                                <td>{{lecturer.index_numbers}}</td>
                                <td class="pointer" style="color:#488692" @click="view(lecturer.id)">{{lecturer.name}}
                                
                                </td>
                
                                <td>{{lecturer.email}}</td>
                                <td>{{lecturer.phone}}</td>
                                <td>
                        
                                <span>{{lecturer.created_at | dateType2 }}</span>
                                <i class="icon wb-time ml-10" aria-hidden="true"></i>
                                </td>
                                <td>
                                    <div class="">
                                        <router-link class="panel-action icon wb-edit" data-container="body" :to="`/admin/lecturers/edit/${lecturer.id}`"></router-link>
                                        <a class="panel-action icon wb-trash pl-2" data-container="body" title=""></a>
                                    </div>
                                </td>
                            </tr>
                        </base-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CrudService from '../../../../services/Admin/Crud.js'
    export default {
        data() {
            return {
                lecturers: [],
                breadcrumb: [
                    {
                        text: 'Dashboard',
                        to: '/',
                        active: true
                    },
                    {
                        text: 'Lecturers',
                        to: '/admin/lecturers/all',
                        active: false
                    }
                ],
                headers: ["Id", "Name", "Email", "Phone#", "Created At", "Actions"]
                
            }
        },
        methods: {
            async getLecturers() {
                this.$store.dispatch('setLoading',true)
                try {
                    var lecturers = await CrudService.index('lecturers')

                    this.lecturers = lecturers.data
                    this.$store.dispatch('setLoading',false)

                } catch (error) {
                    console.log(error)
                    this.$store.dispatch('setLoading',false)

                }
            },
            view(id) {
                this.$router.push({name: "View Lecturer",params: {id}})
            }
        },
        created() {
            this.getLecturers()
        }
        
    }
</script>

<style lang="scss" scoped>

</style>