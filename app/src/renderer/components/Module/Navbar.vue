<template>
  <div class="navbar-dark flex flex-row-middle">
    <manager-panel></manager-panel>
    <brand-name-panel></brand-name-panel>
    <time-panel></time-panel>
  </div>
</template>

<script>
  import TimePanel from './Navbar/TimePanel'
  import BrandNamePanel from './Navbar/BrandNamePanel'
  import ManagerPanel from './Navbar/ManagerPanel'
  export default {
    components: {
      TimePanel,
      BrandNamePanel,
      ManagerPanel
    }
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
</style>
