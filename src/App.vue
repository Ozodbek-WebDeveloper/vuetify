<template>
  <main-layounts>
    <router-view v-slot="{ Component }">
      <transition name="scale" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main-layounts>
</template>

<script>
import mainLayounts from "./layouts/mainLayounts.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { mainLayounts },
  computed: {
    ...mapGetters("ui", ["IS_COLLAPSED"]),
  },
  methods: {
    ...mapActions("ui", ["GET_SIDEBAR_STATE"]),
    async chekSidebarState() {
      const data = await this.GET_SIDEBAR_STATE();
       if (data === null) {
        localStorage.setItem("sidebar-ui", JSON.stringify(false));
      }
    },
  },

  mounted() {
    this.chekSidebarState();
  },
};
</script>

<style>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
