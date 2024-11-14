<template>
  <div class="main_saidbar bg-dark text-white p-5 " 
      :class="{'active' : !isCollapsed}"
  >
    <!-- main saidbar_item -->
    <div v-if="isCollapsed" class="main_saidbar_item">
      <div class="logo flex items-center">
        <img src="../assets/images/logo/logo.jpg" class="w-12 rounded-full" alt="" />
        <span class="ml-2 text-2xl uppercase font-bold"> Ozodbek </span>
      </div>
      <!-- ---  menu -->
      <ul class="">
        <li
          class="flex items-center mt-4 mb-2 p-2 rounded-md"
          v-for="(item, idx) in homeItem"
          :key="idx"
          :class="{ 'bg-dark-green': item.child.includes($route.name) }"
          @click="SendPush(item, idx)"
        >
          <i :class="item.icons"></i>
          <span class="text-xl ml-2"> {{ item.name }}</span>
        </li>
      </ul>
    </div>
    <!-- ---  -->
    <div v-if="!isCollapsed"  class="min_saidbar flex items-center flex-col" >
      <img src="../assets/images/logo/logo.jpg" class="w-10 rounded-full mb-5" alt="" />
      <ul class="flex flex-col items-center">
        <li
          class="flex items-center mt-4 mb-2 p-2 rounded-md"
          v-for="(item, idx) in homeItem"
          :key="idx"
          :class="{ 'bg-dark-green': item.child.includes($route.name) }"
          @click="SendPush(item, idx)"
        >
          <i :class="item.icons" class="text-xl " ></i> 
          <span  class=" min-text text-xl ml-2 "> {{ item.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import homeItem from "./mainConfig.js";
import { mapState } from "vuex"; 
export default {
  data() {
    return {
      homeItem,
      // mainActive:false,
    };
  },
  computed:{
    ...mapState('ui', ['isCollapsed'])
  },
  methods: {
    SendPush(item, idx) {
      this.$router.push({ name: item.routerName });

      if (idx == 1) {
        this.$router.push({ name: item.routerName });
      }
    },
  },
};
</script>

<style lang="scss">
.main_saidbar {
  transition: all 0.3s;
  width: 250px;
  &.active{
    width: 100px;
  }

  .min_saidbar{

    .min-text{
      display: none;


    }
  }
}
</style>
