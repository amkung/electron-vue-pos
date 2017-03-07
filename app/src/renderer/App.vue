<template>
  <div id="#app" class="app-container">
    <router-view></router-view>
  </div>
</template>

<script>
  import store from 'renderer/vuex/store'
  export default {
    store
  }
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Lato:300);

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body,
  .wrapper { height: 100%;min-height: 100% }

  body {
    background:
      radial-gradient(
        ellipse at center,
        rgba(255, 255, 255, 1) 0%,
        rgba(229, 229, 229, .85) 100%
      );
    background-position: center;
    font-family: Lato, Helvetica, sans-serif;
  }
  .app-container{
        height: 100%;
    min-height: 100%;
  }

  .module-container {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;  
  }
</style>
