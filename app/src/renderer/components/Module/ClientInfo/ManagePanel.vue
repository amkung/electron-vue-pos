<template>
  <div class="flex flex-row-middle text-center">
    <!-- Client manage panel -->
    <router-link class="flex-1" :to="{ name: 'member-search-page'}"><i class="material-icons" >search</i></router-link>
    <router-link class="flex-1" :to="{ name: 'member-edit-page' , params: { id: userInfo.userId } }"><i class="material-icons" >mode_edit</i></router-link>
    <router-link class="flex-1" :to="{ name: 'member-add-page'}"><i class="material-icons" >person_add</i></router-link>
  </div>
</template>

<script>
  import SearchPanel from './SearchPanel'
  export default {
    components: {
      SearchPanel
    },
    props: ['userInfo']
  }

</script>

<style scoped>
  .material-icons {
    font-size: 30px;
    color: rgb(50, 174, 110);
    cursor: pointer;
  }

  .material-icons:hover,
  .material-icons:focus {
    color: green;
  }

  .material-icons:active {
    color: rgb(11, 105, 56);
  }
</style>
