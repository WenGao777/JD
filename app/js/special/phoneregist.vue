<template>
   <div :class="$style.section">
       <div :class="$style.head">
           <router-link :to="{name:'Load'}">
           <span :class="$style.icon"/>
           </router-link>
           <span>京东注册</span>
       </div>
       <div :class="$style.content">
         <div :class="$style.txt">
             <router-link :to="{name:'Area',query:{purp:'Pregist'}}">
            <label for="pnumber">
                <p>{{number}}</p>
                <div :class="$style['area-icon']"></div>
            </label>
            </router-link>
            <input id="pnumber" type="text" placeholder="请输入手机号码" v-model="txtpnumber" :class="$style.pnumber" @click="display()" @blur="hid()">
            <div :class="$style.icon" :style="{display:clean}" @click="clear()"></div> 
         </div>
         <div :class="$style.yz">
           <img src="//h5.360buyimg.com/jcap/img/init.gif" alt="">
           <span>点击完成验证</span>
         </div>
       </div>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    number: {
      type: String,
      default: "+86"
    }
  },
  data() {
    return {
      clean: "none"
    };
  },
  created: function() {
    if (this.$route.query.id != null) {
      let id = this.$route.query.id;
      this.getData(id);
    }
  },
  methods: {
    getData(id) {
      this.number = id;
    },
    display() {
      this.clean = "block";
    },
    hid() {
      this.clean = "none";
    },
    clear() {
      this.txtpnumber = "";
    }
  },
  components: {}
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
    a {
        text-decoration: none;
      }
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
  .content {
    padding: 0 50px;
    margin-top: 20px; /*px*/
    box-sizing: border-box;
    .txt {
      position: relative;
      width: 100%;
      height: 96px; /*px*/
      line-height: 80px; /*px*/
      padding: 0 10px;
      box-sizing: border-box;
      margin-top: 80px; /*px*/
      background-color: #fff;
      a {
        text-decoration: none;
      }
      label {
        width: 120px; /*px*/
        left: 15px; /*px*/
        position: absolute;
        p {
          font-size: 26px; /*px*/
          color: #333;
          display: inline-block;
          width: 70px;/*px*/
        }
        .area-icon {
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 10px solid #ababab;
          display: inline-block;
          box-sizing: border-box;
          position: absolute;
          top: 50%;
          right: 10px;/*px*/
        }
      }
      .pnumber {
        width: 100%;
        padding: 0 60px 0 120px;
        box-sizing: border-box;
        display: inline-block;
        font-size: 28px; /*px*/
        border: 0;
        overflow: hidden;
      }
      .icon {
        overflow: hidden;
        width: 44px; /*px*/
        height: 44px; /*px*/
        background: url(//plogin.m.jd.com/jd-mlogin/1.0.4/images/a3a248f4a949c14c2cb4fb9ac656f1f5.png)
          no-repeat;
        background-size: 100% auto;
        position: absolute;
        top: 26px; /*px*/
        right: 20px; /*px*/
      }
    }
    .yz {
      position: relative;
      margin-top: 40px; /*px*/
      height: 100px; /*px*/
      border: 2px solid #409eff; /*px*/
      background-color: #fff;
      > img {
        width: 44px; /*px*/
        height: 44px; /*px*/
        position: absolute;
        top: 28px; /*px*/
        left: 20px; /*px*/
      }
      > span {
        color: #409eff;
        margin: 0 80px; /*px*/
        line-height: 100px; /*px*/
        font-size: 28px; /*px*/
      }
    }
  }
}
</style>
