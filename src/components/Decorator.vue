<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>num：{{ num }}</p>
    <p>num^2：{{ num | formatNum }}</p>
    <button ref='button' @click="numPlus()">num ++</button>
    <p>当前时间：{{ getNowDate }}</p>
    <button @click="alert()">methods中的方法</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Emit, Ref, Vue } from 'vue-property-decorator';

// @Component来自vue-class-component（vue官方）里面可写入以前vue中的东西
// 其他装饰器来自 vue-property-decorator （非官方），如果不使用装饰器，可写入@Component中，如： watch，prop
@Component({
  // 无装饰器的可以写到这里，有装饰器的也可以写到这里
    filters: {
        formatNum( value: number ) {
            return value * value;
        },
    },
    methods: {
      alert() {
        alert('我是@Component中加入的方法');
      },
    },
    watch: {},
})
export default class Decorator extends Vue {
  // 相当于data
  private num: number = 0;
   // 获取 ref="button"
  @Ref() private button!: HTMLButtonElement;
  // 接收父组件传值
  @Prop() private msg!: string;
  // 监控num变化
  @Watch('num')
  numChange(val: number, oldVal: number) {
    console.log(val, 'val');
    console.log(oldVal, 'oldVal');
  }
  numPlus() {
    this.num ++;
    this.sendNum();
  }
  // 向父组件传值
  @Emit()
  sendNum() {
    return this.num;
  }
  mounted() {
    console.log(this.button);
  }
  // 计算属性
  get getNowDate() {
    return new Date();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
