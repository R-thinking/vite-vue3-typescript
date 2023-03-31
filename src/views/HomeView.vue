<script lang="ts" setup>
import { TestStore } from "@/store/index.js";
import { toRefs } from "vue";

const testStore = TestStore();

const { testVar, testFunc } = toRefs(testStore);

type testType = (_test: string) => string;

const func: testType = function (_str) {
  console.log(_str);
  return _str;
};

const str = "hello world";

type Member = {
  name: string;
  plusOne: (_a: number) => number;
};

let userInfo: Member = {
  name: "kim",
  plusOne: (_a) => {
    return _a + 1;
  },
};

interface testObject {
  var1: string;
  var2: number;
}
const testObj: testObject = {
  var1: "hello",
  var2: 100,
};

const objFunc = ({ var1, var2 }: testObject) => {
  console.log(var1, var2);
};
type direction = "left" | "right" | "forward" | "backward";
const myWay: direction = "right";
</script>

<template>
  <div id="home">
    <router-link to="/test">Test</router-link>
    <h1>{{ testVar }}</h1>
    <button @click="testFunc">ts Increase</button>
    <button @click="func(str)">test function</button>
    <button @click="objFunc(testObj)">testObj print</button>
  </div>
</template>

<style lang="scss" scoped>
#home {
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
