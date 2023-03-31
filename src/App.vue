<script lang="ts" setup>
import { onMounted } from "vue";
const next = () => {};

/* onMounted(async () => {
  }
}); */
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
#app {
  width: 100vw;
  height: 100vh;
  #imageContainer {
    width: 100%;
    height: 100%;
  }
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
