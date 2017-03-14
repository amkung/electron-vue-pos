<template>
  <div id="#app" class="app-container flex flex-column ">
    <router-view></router-view>
  </div>
</template>

<script>
  import store from 'renderer/vuex/store'
  export default {
    // created () {
    //   console.log('created', this.$store.getters.currentTimestamp)
    //   // return {
    //   //   time: this.$store.getters.currentTimestamp
    //   // }
    // },
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
  .wrapper {
    height: 100%;
    min-height: 100%
  }
  
  body {
    background: #c2cdd6;
    /*background:
      radial-gradient(
        ellipse at center,
        rgba(255, 255, 255, 1) 0%,
        rgba(229, 229, 229, .85) 100%
      );
    background-position: center;*/
    font-family: Lato, Helvetica, sans-serif;
  }
  
  .app-container {
    height: 100%;
    min-height: 100%;
  }
  
  .flex {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  }
  
  .flex-column {
    flex-flow: column wrap;
  }

  .flex-row {
    flex-flow: row nowrap;    
  }
  
  .flex-row-middle {
    flex-flow: row nowrap;
    align-items: center;
  }
  
  .flex-align-center {
    justify-content: center;
    text-align: center;
  }

  .flex-1 {
    flex: 1;
  }

  .text-center {
    text-align: center;
  }
</style>
