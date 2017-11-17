<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">商品</div>
      <div class="tab-item">评论</div>
      <div class="tab-item">商家</div>
    </div>
    <div class="content">
      content
    </div>

  </div>
</template>

<script>
  import header from './components/header/header.vue';
  export default {
    components:{
      v-header: v-header
    }
  };

</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    .tab
      display:flex
      width: 100%
      height: 40px//设计稿上面是80，但dpr=2，所以设为40px
      line-height: 40px
      .tab-item
        flex:1



</style>
