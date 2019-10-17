// 此处是为Vue实例上添加属性或者方法

import Vue from 'vue'
// vue/types/vue.d.ts将会引入此文件 
declare module 'vue/types/vue' {
  interface Vue {
    $axios: any;
    $loading: any;
  }
}

// 此处为声明全局变量 ConstConfig将会挂载到window上
interface ConstConfig {
  baseUrl: string,
}
declare global {
    var ConstConfig: ConstConfig;
}


// declare module 'echarts' {
//   const echarts: any;
//   export default echarts;
// }