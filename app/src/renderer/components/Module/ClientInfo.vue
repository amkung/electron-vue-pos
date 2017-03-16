<template>
  <div class="client-info-panel">
   	<div class="client-info-content">
   		<label>Client n {{userInfo.clientId}}</label>
   		<div class="client-info-text"><strong>{{userInfo.name}}</strong></div>
   	</div>
   	<div class="client-info-content">
   		<label class="client-info-label">ID</label>
   		<div class="client-info-text">{{userInfo.userId}}</div>
   	</div>
   	<div class="client-info-content">
   		<label class="client-info-label">Address</label>
   		<div class="client-info-text">{{userInfo.address}}</div>
   	</div>
   	<div class="client-info-content">
   		<label class="client-info-label">Phone</label>
   		<div class="client-info-text">{{userInfo.phone}}</div>
   	</div>
   	<div class="client-info-content">
   		<label class="client-info-label">Mail</label>
   		<div class="client-info-text">{{userInfo.mail}}</div>
   	</div>
   	<manage-panel :user-info="userInfo"></manage-panel>
  </div>
</template>

<script>
  import ManagePanel from './ClientInfo/ManagePanel'
  export default {
    components: {
      ManagePanel
    },
    props: ['userInfo']
  }

</script>

<style scoped>
	.client-info-panel{

	}
	.client-info-panel .client-info-content{
		margin-bottom: 15px;
	}
	.client-info-panel .client-info-text{
		font-size: 14px;
	}
	.client-info-panel .client-info-label{
		font-size: 12px;
		color:#aaa;
	}
</style>
