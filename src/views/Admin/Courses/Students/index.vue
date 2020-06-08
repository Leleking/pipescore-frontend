<template>
  <div>
      <base-table :headers="headers" :checkbox="true">
        <tr v-for="program in programs" :key="program.id">
            <td>
                <span class="checkbox-custom checkbox-primary">
                    <input class="selectable-item" type="checkbox">
                    <label></label>
                </span>
            </td>
            <td class="pointer" style="color:#488692" @click="viewProgram(program.id)">{{program.name}}
                            
            </td>
            <td>{{program.cost}}</td>
                           
            <td>
            <span>{{program.created_at}}</span>
            <i class="icon wb-time ml-10" aria-hidden="true"></i>
            </td>
            <td>
                <div class="">
                    <a class="panel-action icon wb-edit" data-container="body" title=""></a>
                    <a class="panel-action icon wb-trash pl-2" data-container="body" title=""></a>
                </div>
            </td>
        </tr>
      </base-table>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                programs: [],
                headers: ['Index No#','Name','Action']
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>