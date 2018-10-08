<template>
   <div :class="$style.panel">
       <router-link :to="{name:'Home'}">
           <img :src="person.photo" alt="">
           <div :class="$style.info">{{person.name}}</div>
           <div :class="$style.right">会员福利 ></div>
       </router-link>
   </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      person: {
        photo:
          "//img12.360buyimg.com/jrpmobile/jfs/t2644/238/1420176553/1442/96e2885/573d96deN06201af5.png",
        name: ""
      }
    };
  },
  components: {}
};
</script>

<style lang="scss" module>
.panel {
  width: 100%;
  height: 140px; /*px*/
  line-height: 140px; /*px*/
  position: relative;
  background-color: #fff;
  img {
    width: 100px;/*px*/
    margin: 20px 32px 0 32px; /*px*/
    box-sizing: border-box;
    border-radius: 50%;
    float: left;
  }
  .info {
    width: 47%;
    float: left;
  }
  .right {
    font-size: 32px; /*px*/
    height: 60px; /*px*/
    line-height: 60px; /*px*/
    margin-top: -30px; /*px*/
    color: #999;
    position: absolute;
    right: 32px; /*px*/
    top: 50%;
  }
}
</style>