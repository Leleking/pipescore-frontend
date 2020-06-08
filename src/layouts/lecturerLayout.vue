<template>
<div>
    <lecturer-nav-bar></lecturer-nav-bar>
        <transition appear name="custom-classes-transition" enter-active-class="animated fadeIn">
            <div class="container-fluid pl-md-100">
                <div class="page-content container-fluid">
                    <router-view></router-view>
                </div>
            </div>
        </transition>
</div>
</template>

<script>

export default {
    created() {
        document.body.style.backgroundColor = "#eceff1";
    }
    
}
</script>