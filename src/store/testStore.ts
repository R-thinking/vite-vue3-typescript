import { defineStore } from "pinia";
import { ref } from "vue";

const testStore = defineStore("test", () => {
  const testVar = ref(100);
  function testFunc() {
    testVar.value++;
  }

  return { testVar, testFunc };
});

export default testStore;
