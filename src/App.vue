<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <main-tab-bar></main-tab-bar>
    <router-view/>
  </div>
</template>
<script>

  import MainTabBar from "./components/content/mainTabbar/MainTabBar";
  export default {
    components: {MainTabBar}
  }
  const  app=new Vue({
    el:"#app",
    components:{
      MainTabBar
    }
  })
</script>
<style>
  @import "assets/css/base.css";

</style>
