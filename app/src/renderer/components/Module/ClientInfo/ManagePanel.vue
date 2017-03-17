<template>
  <div class="flex flex-row-middle text-center">
    <!-- Client manage panel -->
    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <!-- use the modal component, pass in the prop -->
    <!-- :default-btn="defaultBtn"  -->
    <modal v-if="showModal" @close="modalClose" @action="search"> 
      <h3 slot="header">Search user</h3>
      <div slot="body">
        <input type="text" v-model="keyword" placeholder="enter user id or client id">
      </div>
    </modal>

    <!-- <router-link class="flex-1" :to="{ name: 'member-search-page'}"><i class="material-icons" >search</i></router-link> -->
    <router-link class="flex-1" :to="{ name: 'member-edit-page' , params: { id: userInfo.userId } }"><i class="material-icons" >mode_edit</i></router-link>
    <router-link class="flex-1" :to="{ name: 'member-add-page'}"><i class="material-icons" >person_add</i></router-link>
  </div>
</template>

<script>
  import Modal from '../Modal/Template'
  export default {
    components: {
      Modal
    },
    data () {
      return {
        showModal: false
        // defaultBtn: {
        //   actionShow: true
        // }
      }
    },
    props: ['userInfo'],
    methods: {
      search: function (event) {
        alert('action')
      },
      modalClose: function (event) {
        this.showModal = false
      }
    }
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

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }
</style>
