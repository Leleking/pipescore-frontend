<template>
    <div>
        <div class="page-header page-header-bordered">
            <base-breadcrumb :items="breadcrumb"/>
            <h1 class="page-title">Programs</h1>
            <div class="page-header-actions">
                <router-link v-if="$route.name == 'Programs'" to="/admin/programs/add">
                    <button type="button"  class="btn btn-sm btn-icon btn-inverse btn-round">
                            <i class="fa fa-plus" aria-hidden="true"></i> Add Program
                    </button>
                </router-link>
                <button @click="$router.go(-1)" type="button" class="btn btn-sm btn-icon btn-inverse btn-round"
                    >
                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                </button>
            </div>
        </div>
        <!-- div
        :value="showDelete"
        color="error"
        dark
        icon="mdi-delete"
        dense
        border="left"
        transition="scale-transition"
        >
        Are you sure you want to delete {{this.trash.name}} ?
            <span  style="float:right" >
                <v-btn  @click="deleteItem()" text icon>
                    <v-icon>mdi-thumb-up</v-icon>
                </v-btn>
                <v-btn  @click="showDelete = false" text icon>
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </span>

   

        </div> -->
       <div class="page-content">
        <div v-if="showDelete" class="alert dark alert-icon alert-danger alert-dismissible" role="alert">
           
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            
                <i class="icon wb-bell" aria-hidden="true"></i>
            </button>
            
            <i class="icon wb-bell" aria-hidden="true"></i> Are you sure you want to delete {{this.trash.name}} ? 
            <span style="text-decoration:underline" @click="deleteItem()">Yes</span>
        </div>
    
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
            <div class="">
                <div class="table-responsive">
                <table class="table table-hover" data-role="content" data-plugin="selectable" data-row-selectable="true">
                    <thead class="bg-blue-grey-100">
                    <tr>
                        <th>
                        <span class="checkbox-custom checkbox-primary">
                            <input class="selectable-all" type="checkbox">
                            <label></label>
                        </span>
                        </th>
                        <th>
                        Name
                        </th>
                       
                        <th>
                        Date Created
                        </th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="program in programs" :key="program.id">
                            <td>
                            <span class="checkbox-custom checkbox-primary">
                                <input class="selectable-item" type="checkbox">
                                <label></label>
                            </span>
                            </td>
                            <td class="pointer" style="color:#488692" @click="viewProgram(program.id)">{{program.name}}
                            
                            </td>
                          
                           
                            <td>
                            <span>{{program.created_at | dateType2}}</span>
                            <i class="icon wb-time ml-10" aria-hidden="true"></i>
                            </td>
                            <td>
                                <div class="">
                                    <router-link class="panel-action icon wb-edit" data-container="body" :to="`/admin/programs/edit/${program.id}`"></router-link>
                                    <a @click.prevent="moveToTrash(program.id)" class="panel-action icon wb-trash pl-2" data-container="body" title=""></a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
        </div>
       </div>
    </div>
</template>

<script>
import ProgramService from '../../../services/Admin/Programs.js'
    export default {
        data() {
            return {
                programs: [],
                trash: {
                    name: '',
                    id: ''
                },
                breadcrumb: [
                    {
                        text: 'Dashboard',
                        to: '/',
                        active: true
                    },
                    {
                        text: 'Programs',
                        to: '/admin',
                        active: false
                    }
                ],
                showDelete: false,
            }
        },
        methods: {
            async getPrograms() {
                this.$store.dispatch('setLoading',true)
                try {
                    var programs = await ProgramService.getPrograms()
                    this.programs = programs.data
                    this.$store.dispatch('setLoading',false)

                } catch (error) {
                    console.log(error)
                    this.$store.dispatch('setLoading',false)

                }
            },
            viewProgram(id) {
                this.$router.push({name: "View Program",params: {id}})
            },

            moveToTrash(id) {
                var trash = this.programs.filter((program) => {
                    return program.id == id
                })
                this.trash = trash[0]
                this.showDelete = true
            },

            async deleteItem () {
            
                this.$store.dispatch('setLoading',true)
                this.showDelete = false
                try {
                    var programs = await ProgramService.deleteProgram(this.trash.id)
                    programs = this.programs.filter((program) => {
                        return program.id !== this.trash.id
                    })
                    this.programs = programs
                    this.$store.dispatch('success',`${this.trash.name} deleted`)
                    this.$store.dispatch('setLoading',false)
                } catch (e) {
                    this.$store.dispatch('setLoading',false)

                }
            
            },
        },
        created() {
            this.getPrograms()
        }
        
    }
</script>

<style lang="scss" scoped>

</style>