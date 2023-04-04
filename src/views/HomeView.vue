<script lang="ts" setup>
import { TestStore } from "@/store/index.js";
import { toRefs } from "vue";
import { paramType } from "@/views/testModule1";
import pType2 from "@/views/testModule2";

const testStore = TestStore();

const { testVar, testFunc } = toRefs(testStore);

/* type */

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

/* interface */
interface testObject {
  var1: string;
  var2: number;
}
const testObj: testObject = {
  var1: "hello",
  var2: 100,
};

interface addObject extends testObject {
  var3?: string;
}

const objFunc = ({ var1, var2, var3 }: addObject) => {
  console.log(var1, var2, var3 ?? "add");
};

/* Literal type */
type direction = "left" | "right" | "forward" | "backward";
const myWay: direction = "right";

/* optional parameter & default parameter */
function coffeeAndDonut(
  coffee: string,
  donut: string | number = "glazed"
): void {
  if (typeof donut === "number") return console.log(coffee, `glazed ${donut}`);
  donut ? console.log(coffee, donut) : console.log(coffee);
}
const coffee = "americano";
const donut = 2;

/* rest parameter */
function diner(...food: string[]) {
  console.log("Today dinner is");
  food.forEach((ele) => {
    console.log(ele);
  });
}
const food1 = "water";
const food2 = "steak";
const food3 = "pasta";
const food4 = "bread";
const food = ["water", "steak", "pasta", "bread"];

/* class */
class Franchise {
  public name: string; // public name = name
  static businessNum: string; // accessible only in class
  protected assets: string;
  private revenue: number = 100;

  constructor() {
    this.name = "franchise";
    Franchise.businessNum = "000-00-0000";
    this.assets = "recipe";
  }

  getRevenue() {
    // access to private
    return this.revenue;
  }
}

class FoodCompany extends Franchise {
  static businessNum: string;

  constructor(_name: string, _businessNum: string) {
    super();
    this.name = _name;
    FoodCompany.businessNum = _businessNum;
  }

  getAssets() {
    // access to protected
    return this.assets;
  }
}

const fran = new Franchise();
const company = new FoodCompany("company", "111-11-1111");

console.log("private", fran.getRevenue()); // accessible only in class
console.log("protected", company.getAssets()); // accessible in child class
console.log("static", FoodCompany.businessNum); // accessible with parent.

/* module */
const param: paramType = "hello";
const param2: pType2 = "hello 2";
console.log(param, param2);

/* generic */
function genFunc<T>(arg: T[]): T[] {
  console.log(arg);
  return arg;
}
//constraint type
function constFunc<T extends number>(arg: T[]): T[] {
  console.log(arg[0] + 1);
  return arg;
}
const arg1 = genFunc<number>([1, 2, 4, 6]);
const arg2 = genFunc<string>(["hello", "world", "generic", "function"]);
constFunc<number>([20, 13, 42]);
</script>

<template>
  <div id="home">
    <router-link to="/test">Test</router-link>
    <h1>{{ testVar }}</h1>
    <button @click="testFunc">ts Increase</button>
    <button @click="func(str)">test function</button>
    <button @click="objFunc(testObj)">testObj print</button>
    <button @click="coffeeAndDonut(coffee, donut)">coffee donut print</button>
    <button @click="diner(food1, food2, food3, food4)">dinner</button>
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
