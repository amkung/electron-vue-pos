<template>
  <content>
    <div class="landing-page-container flex flex-row-middle flex-align-center">
      <div >
        <img src="./LandingPageView/assets/loading.svg" alt="electron-vue">
        <h1>Welcome.</h1>
        <current-page></current-page>
        <versions></versions>
        <links></links>
      </div>
    </div>
  </content>
</template>

<script>
  import CurrentPage from './LandingPageView/CurrentPage'
  import Links from './LandingPageView/Links'
  import Versions from './LandingPageView/Versions'
  export default {
    components: {
      CurrentPage,
      Links,
      Versions
    },
    name: 'landing-page'
  }
</script>

<style scoped>
  img {
    margin-top: -25px;
    margin-bottom: 25px;
    width: 120px;
    animation: jump-float 5s linear infinite;
  }

  @keyframes jump-float {
    0%   {transform: translateY(0)}
    25%  {transform: translateY(-25px)}
    75%  {transform: translateY(25px)}
    100% {transform: translateY(0)}
  }

  .landing-page-container{
    flex: 1;
  }
</style>
