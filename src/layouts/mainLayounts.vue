<template>
  <main class="main_layouts">
    <Saidbar />
    <div class="main_wrapper flex flex-column">
      <ProfileMenu />
      <div class="main_router  grow overflow-y-scroll">
        <slot />
      </div>
    </div>
  </main>
</template>

<script>
import ProfileMenu from "./profilemenu.vue";
import Saidbar from "./Saidbar.vue";
export default {
  components: { Saidbar, ProfileMenu },
};
</script>

<style lang="scss" >
.main_layouts {
  display: flex;
  height: 100vh;
  width: 100% ;
  
  .main_wrapper{
    flex-grow: 1;
    .main_router{
      &::-webkit-scrollbar{
        display: none;
      }
    }
  }
}
</style>