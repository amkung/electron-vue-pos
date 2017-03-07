<template>
  <section class="module-container wrapper">
      <navbar class="header"></navbar>
      <div class="content">
        <div class="inner-content module-container">
          <div class="panel-pos-1">            
            <client-info></client-info>
            <vendor-info></vendor-info>   
          </div>
          <div class="panel-pos-2">
            <product-detail></product-detail>
            <calculator-input></calculator-input>
          </div>
          <div class="panel-pos-3">
            <cart-summary></cart-summary>
            <cart-list></cart-list>
          </div>
          <div class="panel-pos-4">
            <manage-control></manage-control>
          </div>
        </div>
      </div>
      <links></links>
  </section>
</template>

<script>
  import Navbar from './Module/Navbar'
  import ClientInfo from './Module/ClientInfo'
  import ProductDetail from './Module/ProductDetail'
  import CartList from './Module/CartList'
  import CartSummary from './Module/CartSummary'
  import CalculatorInput from './Module/CalculatorInput'
  import ManageControl from './Module/ManageControl'
  import VendorInfo from './Module/VendorInfo'
  import Links from './DashboardPageView/Links'
  export default {
    components: {
      Navbar,
      ClientInfo,
      ProductDetail,
      CartList,
      CartSummary,
      CalculatorInput,
      ManageControl,
      VendorInfo,
      Links
    },
    name: 'dashboard-page'
  }
</script>

<style scoped>

  .module-container {    
    -webkit-flex-flow: column wrap;
    flex-flow: column wrap;
  }
  .content{
    flex: 1;
    margin: 10px;
  }
  .inner-content{
    padding: 15px;
    flex-flow: row wrap;
  }
  .panel-pos-1{
    flex: 1.5;
  }
  .panel-pos-2{
    flex: 2;
  }
  .panel-pos-3{
    flex: 4;
  }
  .panel-pos-4{
    flex: 1.5;
  }
</style>
