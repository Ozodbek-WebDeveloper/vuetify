<template>
  <div class="profile_menu bg-green-300 px-5 py-2 flex items-center justify-between">
    <!-- toggler -->

    <div class="saidbar-toggler-wrapper h-full">
      <div
        class="saidbar-toggler h-full w-9 bg-white cursor-pointer p-1 shadow-md rounded-md flex"
        :class="IS_COLLAPSED ? 'justify-end' : 'justify-start'"
        @click="toggleSaidbar"
      >
        <div class="saidbar-toggler-item w-1/2 h-full bg-brend rounded-md"></div>
      </div>
    </div>
    <!-- user info -->

    <div class="user-info flex items-center">
      <div class="text-content text-right">
        <h4 class="user-name text-lg font-semibold text-gray-800 leading-3">Ozodbek Dev</h4>
        <p class="role text-xs font-semibold text-gray-500">Creator</p>
      </div>
      <!--  -->
      <div class="profile-pic ml-2">
        <v-avatar color="info">
          <img src="../assets/images/ImagesUsers/user_one.jpg" alt="images" v-if="profileImages" />
          <div class="icon" v-else>
            <i class="fas fa-user"></i>
          </div>
        </v-avatar>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex';

export default {
  data() {
    return {
      profileImages:"../assets/images/ImagesUsers/.jpg",
      isCallapsed: null,
    };
  },
  computed:{
    ...mapGetters('ui',['IS_COLLAPSED'])
  },
  methods:{
    ...mapActions('ui',['TOGGLE_SIDEBAR']),
    toggleSaidbar(){
      this.TOGGLE_SIDEBAR()
    }   
  }
};
</script>
