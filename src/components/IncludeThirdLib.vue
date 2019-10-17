<template>
  <p>引入第三方库 </p>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class IncludeThirdLib extends Vue {
  mounted() {
    console.log('axios：', this.$axios);
    // console.log(constConfig);
    const loading = this.$loading({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)',
    });
    setTimeout(() => {
      loading.close();
    }, 2000);
  }
}
</script>