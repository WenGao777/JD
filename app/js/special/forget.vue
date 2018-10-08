<template>
   <div :class="$style.section">
       <div :class="$style.head">
           <span :class="$style.icon" @click="$router.go(-1)"/>
           <span>忘记密码</span>
       </div>
       <div :class="$style.content">
         <div :class="$style.txt">
            <label for="usrname">账号</label>
            <input id="usrname" type="text" placeholder="用户名/邮箱/手机号" v-model="txtusrname" :class="$style.usrname" @click="display()" @blur="hid()">
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
  data() {
    return {
      clean: "none"
    };
  },
  methods: {
    display() {
      this.clean = "block";
    },
    hid() {
      this.clean = "none";
    },
    clear() {
      this.txtusrname = "";
    }
  },
  components: {}
};
</script>

<style lang="scss" module>
body {
  background-color: #fff;
  .section {
    width: 100%;
    max-width: 1536px; /*px*/
    margin: 0 auto;
    .head {
      height: 88px; /*px*/
      line-height: 88px; /*px*/
      font-size: 34px; /*px*/
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
    .content {
      padding: 0 50px;
      margin-top: 40px;/*px*/
      box-sizing: border-box;
      .txt {
        position: relative;
        width: 100%;
        height: 100px; /*px*/
        line-height: 100px; /*px*/
        padding: 0 10px;
        border-bottom: 2px solid #d7d7d7;
        box-sizing: border-box;
        background-color: #fff;
        > label {
          font-size: 32px; /*px*/
          top: 5px; /*px*/
          color: #222;
          position: absolute;
          width: 120px; /*px*/
          display: inline-block;
          text-align: left;
        }
        .usrname {
          width: 100%;
          padding: 0 60px 0 120px;
          box-sizing: border-box;
          display: inline-block;
          font-size: 32px; /*px*/
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
        margin-top: 100px; /*px*/
        height: 100px; /*px*/
        border: 2px solid #409eff; /*px*/
        border-radius: 50px; /*px*/
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
}
</style>
