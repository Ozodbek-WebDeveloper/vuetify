<template>
  <div class="page-404 h-full p-5">
    <v-btn variant="outlined" class="bg-dark text-white" @click="$router.back()" > home </v-btn>
  </div>
</template>

<script>
import router from '@/router';

export default {};
</script>

<style lang="scss">
.page-404 {
  background: url("../assets/images/404/7aqcppklh6bexoa70320.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
