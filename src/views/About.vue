<template>
  <div class="about">
    about
    <span>test</span>
  </div>
</template>
<script>
import {fetchCount} from "@/api/about"
export default {
  name:'about',
  // mounted(){
  //   fetchCount({}).then((res) => {
  //     console.log(res);
  //   })
  // }
}
</script>
<style lang="scss" scoped>
  .about{
    color: #ccc;
    span{
      color:red;
    }
  }
</style>
