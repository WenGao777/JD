<template>
   <div :class="$style.section">
       <div :class="$style.head">
           <span :class="$style.icon" @click="$router.go(-1)"/>
           <span>选择国家或者地区</span>
       </div>
       <div v-for="item in items" :key="item.title">
           <p :class="$style.menu">{{item.title}}</p>
           <div :class="$style.area" v-for="param in item.params" :key="param.en">
           <router-link :to="{name:purp,query:{id:param.code}}">
               <div :class="$style.item">
                 <span>{{param.cn}}</span>
                 <span>{{param.code}}</span>
               </div>
           </router-link>
           </div>
        </div>
   </div>
</template>

<script type="text/ecmascript-6">
import areadata from "../../json/country-code.json";
export default {
  props: {
    purp: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      id: "",
      items: ""
    };
  },
  created() {
    if (this.$route.query.purp != null) {
      this.getData(this.$route.query.purp);
    }
  },
  methods: {
    test() {
      console.log(this.purp);
    },
    getData(purp) {
      this.purp = purp;
    }
  },
  components: {},
  mounted() {
    this.items = areadata;
  }
};
</script>

<style lang="scss" module>
.section {
  width: 100%;
  max-width: 1536px; /*px*/
  margin: 0 auto;
  .head {
    height: 88px; /*px*/
    line-height: 88px; /*px*/
    background: #f9f9f9;
    font-size: 34px; /*px*/
    border-bottom: 2px solid #bbb;
    z-index: 2;
    position: relative;
    text-align: center;
    .icon {
      width: 44px; /*px*/
      height: 44px; /*px*/
      overflow: hidden;
      position: absolute;
      top: 24px; /*px*/
      left: 24px; /*px*/
      background: url(//plogin.m.jd.com/jd-mlogin/1.0.4/images/a3a248f4a949c14c2cb4fb9ac656f1f5.png)
        no-repeat;
      background-size: 100% auto;
      background-position: 0 -126px; /*px*/
    }
  }
  .menu{
      padding: 0 46px 0 30px; /*px*/
      line-height: 86px;/*px*/
      color: #999;
      background-color: #f5f5f5;
      text-align: left;
      font-size: 26px;/*px*/
  }
  .area {
    background-color: #fff;
    > a {
      text-decoration: none;
    }
    .item {
      margin: 0 46px 0 30px; /*px*/
      border-bottom: 2px solid #dbdbdb;
      span {
        &:nth-child(1) {
          color: #333;
          font-size: 26px; /*px*/
          text-align: left;
          line-height: 86px; /*px*/
        }
        &:nth-child(2) {
          color: #999;
          font-size: 26px; /*px*/
          text-align: left;
          line-height: 86px; /*px*/
          float: right;
          padding-right: 24px;
        }
      }
    }
  }
}
</style>
