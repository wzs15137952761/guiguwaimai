<template>
  <div id="app">
    <router-view/>
    <FooterGuideVue v-show="$route.meta.FooterIsShow"/>
  </div>
</template>

<script>
  import FooterGuideVue from './components/FooterGuide/FooterGuide.vue';
  export default {
    name: 'App',
    components:{
      FooterGuideVue,
    },
   
  }
</script>

<style lang="stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
