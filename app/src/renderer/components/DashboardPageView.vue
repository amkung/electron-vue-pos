<template>
  <section class="flex flex-column wrapper">
    <navbar class="header"></navbar>
    <div class="dashboard-content">
      <div class="dashboard-inner-content flex flex-column">
        <div class="dashboard-panel-pos-1 flex flex-column">
          <div class="dashboard-panel client-info-panel">
            <client-info></client-info>
          </div>
          <div class="dashboard-panel vendor-info-panel">
            <vendor-info></vendor-info>
          </div>
        </div>
        <div class="dashboard-panel-pos-2 flex flex-column">
          <div class="dashboard-panel product-detail-panel">
            <product-detail></product-detail>
          </div>
          <div class="dashboard-panel calculator-input-panel">
            <calculator-input></calculator-input>
          </div>
          <div class="dashboard-panel calculator-keyboard-panel">
            <calculator-keyboard></calculator-keyboard>
          </div>
        </div>
        <div class="dashboard-panel-pos-3 flex flex-column">
          <div class="dashboard-panel cart-info-panel flex flex-column">
            <cart-list></cart-list>
            <cart-summary></cart-summary>
          </div>
        </div>
        <div class="dashboard-panel-pos-4 flex flex-column">
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
  .dashboard-content {
    flex: 1;
    display: flex;
    flex-flow: column;
    padding: 5px;
  }
  
  .dashboard-inner-content {
    flex-flow: row wrap;
    flex: 1;
  }
  
  .dashboard-panel-pos-1 {
    flex: 1.5;
  }
  
  .dashboard-panel-pos-2 {
    flex: 2;
  }
  
  .dashboard-panel-pos-3 {
    flex: 4;
  }
  
  .dashboard-panel-pos-4 {
    flex: 1.5;
  }

  .dashboard-panel{
    background: #fff;
    padding: 10px;
    margin: 5px;
    border-radius: 3px;
  }

  .client-info-panel{
    flex: 1.21;
  }

  .vendor-info-panel{
    flex: 1;
  }

  .product-detail-panel{
    flex: 1;
  }
  
  .calculator-input-panel{
    flex: 0.1;
  }

  .calculator-keyboard-panel{
    flex: 1;
  }
  
  .cart-info-panel{
    flex: 1;
  }
</style>
