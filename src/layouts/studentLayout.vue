<template>
<div>
    <student-nav-bar/>
    <transition appear name="custom-classes-transition" enter-active-class="animated fadeIn">
        <router-view/>
    </transition>
</div>
</template>

<script>
export default {
    
}
</script>