<script lang="ts" setup>
import ImageEditor from "tui-image-editor";
import { onMounted } from "vue";

let savedInst: ImageEditor | null = null;
function crop() {
  savedInst?.startDrawingMode("CROPPER");
}
function apply() {
  let cropZone = savedInst?.getCropzoneRect();
  savedInst?.crop(cropZone as tuiImageEditor.IRectConfig);
}
onMounted(async () => {
  const imageContainer = document.querySelector("#imageContainer");
  const displayWidth = window.screen.width * 0.75;
  if (imageContainer) {
    const instance = new ImageEditor(imageContainer, {
      cssMaxWidth: displayWidth,
      // cssMaxHeight: displayHeight,
    });
    await instance
      .loadImageFromURL("./src/test.jpg", "originImage")
      .then(() => {});
    savedInst = instance;
  }
});
</script>

<template>
  <div id="test">
    <router-link to="/">Home</router-link>
    <div id="imageContainer"></div>
    <button @click="crop">crop</button>
    <button @click="apply">apply</button>
  </div>
</template>

<style lang="scss" scoped>
#test {
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
