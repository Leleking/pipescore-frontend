<template>
    <div>
        <div class="page-header" style="padding-top:0px">
            <ol class="breadcrumb breadcrumb-arrow">
                <li v-for="(item,index) in breadcrumb" :key="index" :class="{'breadcrumb-item':true,'active':item.active}">
                    <router-link :to="item.to">{{item.text}}</router-link>
                </li>
            </ol>
            <div class="page-header-actions">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                default: () => {return ''}
            },
            breadcrumb: {
                type: Array,
                default: () => { return []}
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>