<template>
  <section class="flex flex-column-content wrapper">
      <navbar class="header"></navbar>
      <div class="dashboard-content">
        <div class="dashboard-inner-content flex flex-column-content">
          <div class="dashboard-panel-pos-1 flex flex-column-content">    
              <client-info></client-info>
              <vendor-info></vendor-info>   
          </div>
          <div class="dashboard-panel-pos-2 flex flex-column-content">
            <product-detail></product-detail>
            <calculator-input></calculator-input>
            <calculator-keyboard></calculator-keyboard>
          </div>
          <div class="dashboard-panel-pos-3 flex flex-column-content">
            <div class="__test flex flex-column-content" >
              <cart-list></cart-list>
              <cart-summary></cart-summary>
            </div>
          </div>
          <div class="dashboard-panel-pos-4 flex flex-column-content">
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
  import CalculatorKeyboard from './Module/CalculatorKeyboard'
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
      CalculatorKeyboard,
      ManageControl,
      VendorInfo,
      Links
    },
    name: 'dashboard-page'
  }
</script>

<style scoped>
  .dashboard-content{
    flex: 1;
    display: flex;
    flex-flow: column;
  }
  .dashboard-inner-content{
    flex-flow: row wrap;
    height: 100%;
  }
  .dashboard-panel-pos-1{
    flex: 1.5;
  }
  .dashboard-panel-pos-2{
    flex: 2;
  }
  .dashboard-panel-pos-3{
    flex: 4;
  }
  .dashboard-panel-pos-4{
    flex: 1.5;
  }
  /* TODO: for some module */
  .__test{
    background: #fff;
    padding: 10px;
    margin: 10px;
    margin-right: 0;
    border-radius: 3px;
    height: 100%;
  }
</style>
