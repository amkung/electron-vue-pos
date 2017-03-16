<template>
  <content>
    <div>
      <div>User ID {{$route.params.id}}</div>
      <router-link :to="{ name: 'dashboard-page'}">dashboard</router-link>
    </div>
  </content>
</template>

<script>
  export default {
    name: 'member-edit-page'
  }

</script>
