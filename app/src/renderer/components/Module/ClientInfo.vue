<template>
  <div class="client-info-panel">
   	<div class="client-info-content">
   		<label>Client n ####</label>
   		<div class="client-info-text"><strong>John Doe Client</strong></div>
   	</div>
   	<div class="client-info-content">
   		<label class="client-info-label">ID</label>
   		<div class="client-info-text">3300000000X</div>
   	</div>
   	<div class="client-info-content">
   		<label class="client-info-label">Address</label>
   		<div class="client-info-text">C/ Julio Verm 12 07001 Palma de Mallorca</div>
   	</div>
   	<div class="client-info-content">
   		<label class="client-info-label">Phones</label>
   		<div class="client-info-text">971 12314</div>
   	</div>
   	<div class="client-info-content">
   		<label class="client-info-label">Mail</label>
   		<div class="client-info-text">Johndoe@john.con</div>
   	</div>
   	<div class="flex flex-row-middle text-center">
   		<!-- Client manage panel -->
   		<i class="material-icons flex-1">search</i>
   		<i class="material-icons flex-1">mode_edit</i>
   		<i class="material-icons flex-1">person_add</i>
   	</div>
  </div>
</template>

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
