<template>
   <div :class="$style.header">
       <span :class="$style.left">
           <!--此处写死注册和登录-->
           <router-link :to="{name:'Load'}">
           <em>注册</em>&nbsp;|&nbsp;<em>登录</em>
           </router-link>
       </span>
       <!--此处btn为自己声明的组件-->
       <btn :class="$style.btnDownload">
           <router-link :to="{name:'Download'}">
               APP下载
           </router-link>
           </btn>
   </div>
</template>

<script>
import btn from "../core/btn.vue";
export default {
  data() {
    return {};
  },
  components: {
    //声明组件
    btn
  }
};
</script>

<style lang="scss" module>
//module css变成局部作用，不影响全局
.header {
  font-size: 32px; /*px*/
  height: 100px; /*px*/
  max-height: 100px; /*px*/
  line-height: 100px; /*px*/
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #f9f9f9 url(//m.jr.jd.com/spe/qyy/main/images/jr-logo.png) center
    center no-repeat;
  background-size: auto 50%;
  z-index: 100;
  .left {
    font-size: 28px; /*px*/
    height: 30px; /*px*/
    line-height: 30px; /*px*/
    margin: 17px 0 0 18px; /*px*/
    a {
      text-decoration: none;
      color: #666;
    }
  }
  .btnDownload {
    a {
      text-decoration: none;
      color: #fff;
    }
    float: right;
    font-size: 24px; /*px*/
    height: 56px; /*px*/
    line-height: 56px; /*px*/
    min-width: 120px; /*px*/
    padding: 0;
    margin: 28px 24px 0 0; /*px*/
  }
}
</style>
