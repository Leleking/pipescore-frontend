<template>
    <div>
        <transition appear name="custom-classes-transition" enter-active-class="animated fadeIn">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>