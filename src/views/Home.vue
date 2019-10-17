<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Decorator @send-num="acceptNum" msg="Welcome to Your Vue.js + TypeScript App"/>
    <IncludeThirdLib/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Decorator from '../components/Decorator.vue'; // @ is an alias to /src
import IncludeThirdLib from '../components/IncludeThirdLib.vue';

@Component({
  components: {
    Decorator,
    IncludeThirdLib,
  },
})
export default class Home extends Vue {
  private acceptNum( num: number ) {
    console.log( '子组件传来的num：', num);
  }
}
</script>
