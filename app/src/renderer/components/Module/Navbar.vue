<template>
  <div class="navbar-dark flex flex-row-middle-content">
    <div class="navbar-manager-panel flex flex-row-middle-content">
      <img class="navbar-image-manager" src="./Navbar/assets/man.svg" alt="manager">
      <div class="navbar-text-manager">Supakrit Nuanpho</div>
    </div>
    <div class="navbar-brand-name-panel">
      <h3>AmmykO Shop</h3>
    </div>
    <div class="navbar-time-panel">
      <!--<div>7 March 2017</div>
      <h1>{{time}}</h1>-->
      {{time}}
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        time: new Date()
      }
    }
    // created () {

    // }
  }

</script>

<style scoped>
  .navbar-dark {
    background: rgba(0, 0, 0, 1);
    background: -moz-linear-gradient(45deg, rgb(19, 19, 19) 0%, rgb(80, 80, 80) 64%, rgb(64, 64, 64) 100%);
    background: -webkit-gradient(left bottom, right top, color-stop(0%, rgb(19, 19, 19)), color-stop(64%, rgb(80, 80, 80)), color-stop(100%, rgb(64, 64, 64)));
    background: -webkit-linear-gradient(45deg, rgb(19, 19, 19) 0%, rgb(80, 80, 80) 64%, rgb(64, 64, 64) 100%);
    background: -o-linear-gradient(45deg, rgb(19, 19, 19) 0%, rgb(80, 80, 80) 64%, rgb(64, 64, 64) 100%);
    background: -ms-linear-gradient(45deg, rgb(19, 19, 19) 0%, rgb(80, 80, 80) 64%, rgb(64, 64, 64) 100%);
    background: linear-gradient(45deg, rgb(19, 19, 19) 0%, rgb(80, 80, 80) 64%, rgb(64, 64, 64) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#8c8c8c', GradientType=1);
    padding: 0 10px;
    color: #fff;
    height: 60px;
    justify-content: space-between;
  }
  
  .navbar-manager-panel {
    flex: 1;
  }
  
  .navbar-brand-name-panel {
    flex: 2;
    text-align: center
  }
  
  .navbar-time-panel {
    flex: 1;
    text-align: right
  }
  
  .navbar-image-manager {
    width: 50px;
    height: 50px;
  }
  
  .navbar-text-manager {
    padding: 5px 10px;
    align-self: flex-end;
  }
</style>
