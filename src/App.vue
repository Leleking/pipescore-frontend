<template>
  <div>
    <loading
        :show="show"
        :label="label">
    </loading>
    
    <vue-snotify></vue-snotify>
   
    <router-view></router-view>
    
  </div>
</template>
<script>
import loading from 'vue-full-loading'
export default {
  data() {
    return {
      label: 'Loading...'
    }
  },
  components: {
    loading
  },
  computed: {
    show() {
      return this.$store.state.routerStore.loading
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
  .pointer {
      cursor: pointer
  }

</style>
