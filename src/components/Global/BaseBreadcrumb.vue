<template>
    
    <ol class="breadcrumb breadcrumb-arrow">
        <li v-for="(item,index) in items" :key="index" :class="{'breadcrumb-item':true,'active':item.active}">
            <router-link v-if="item.active" :to="item.to">{{item.text}}</router-link>
            <span v-else>{{item.text}}</span>
        </li>
    </ol>
    
</template>

<script>
    export default {
        props: {
            items: {
                type: Array,
                default: () => { return []}
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>