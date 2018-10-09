<template>
   <div :class="$style.section">
       <div :class="$style.head">
         <router-link :to="{name:'Home'}">
           <span :class="$style.icon"/>
         </router-link>
           <span>京东登录</span>
       </div>
       <div :class="$style.content">
           <div :class="$style['login-tab']" id="login-tab">
               <div :class="[$style['usr-login'],userselected]" @click="usernameque()">
                   <span>账号密码登录</span>
                </div>
               <div :class="[$style['sms-login'],smsselected]" @click="smsque()">
                   <span>短信验证码登录</span>
                </div>
           </div>
           <div :class="$style.box">
               <div :class="$style.inputcontainer" v-show="userbox">
               <p >账号</p>
               <input v-model="txtusername" type="text" placeholder="用户名/邮箱/已验证手机" :class="$style.username" @click="display('name')" @blur="hid('name')" >
               <div :class="{[$style.iconname]:true,[$style.icon]:true}"  @click="clear('name')" v-show="writeni"></div> 
               </div>
               <div :class="$style.inputcontainer" v-show="userbox">
               <p>密码</p>
               <input v-model="txtpassword" :type="pass" placeholder="请输入密码" :class="$style.password" @click="display('pass')" @blur="hid('pass')" >
               <div :class="{[$style.iconpass]:true,[$style.icon]:true}"  @click="clear('pass')" v-show="writepi"></div> 
               <div :class="{[$style.checkbtn]:true,[$style.bkA]:bkA,[$style.bkB]:bkB}"  @click="bkimgchange()"></div>
               </div>
               <div :class="$style.inputcontainer" v-show="smsbox">
                 <router-link :to="{name:'Area',query:{purp:'Load'}}">
                 <label :class="$style.select">
                   <p>{{number}}</p>
                   <div :class="$style['area-icon']"></div>
                 </label>
                 </router-link>
                 <input v-model="txtphone" type="text" placeholder="请输入手机号" :class="$style.phone" @click="display('phone')" @blur="hid('phone')">
                 <div :class="{[$style.iconphone]:true,[$style.icon]:true}" @click="clear('phone')" v-show="writeps"></div> 
                 <button :class="$style.mesg">获取验证码</button>
               </div>
               <div :class="$style.inputcontainer" v-show="smsbox">
                 <input v-model="txtmsg" type="text" placeholder="请输入收到的验证码" :class="$style.msg" @click="display('msg')" @blur="hid('msg')" >
                 <div :class="{[$style.iconmsg]:true,[$style.icon]:true}" @click="clear('msg')" v-show="writess"></div> 
               </div>
           </div>
           <div :class="$style.bum">
           <div :class="$style.notice">{{notice}}</div>
           <router-link :to="{name:''}" :class="{[$style.btn]:true,[$style.J]:true}" :style="backcolor">登 录</router-link>
           <router-link :to="{name:''}" :class="{[$style.btn]:true,[$style.D]:true}">一键登录</router-link>
           </div>
           <div :class="$style['quick-nav']">
             <router-link :to="{name:'Forget'}">
               <i :class="{[$style.icon]:true,[$style.iconclock]:true}"></i>
               <span>忘记密码</span>
             </router-link>
             <router-link :to="{name:'Pregist'}">
               <i :class="{[$style.icon]:true,[$style.iconreg]:true}"></i>
               <span>手机快速注册</span>
             </router-link>
           </div>
       </div>
       <div :class="$style.floot">
         <div :class="$style.otherlogin">
           <h4>其他登录方式</h4>
           <router-link :to="{name:''}">
             <i :class="{[$style.icon]:true,[$style.iconqq]:true}"></i>
           </router-link>
           <router-link :to="{name:''}">
             <i :class="{[$style.icon]:true,[$style.iconwx]:true}"></i>
           </router-link>
         </div>
         <div :class="$style.jdzc">登录即代表您已同意
           <router-link :to="{name:''}">京东隐私政策</router-link>
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
  created: function() {
    if (this.$route.query.id != null) {
      //这里直接定死回来的样式
      this.userselected = false;
      this.smsselected = "login-selected";
      this.userbox = false;
      this.smsbox = true;
      //这里才是计算number值
      let id = this.$route.query.id;
      this.getData(id);
    }
  },
  data() {
    return {
      //切换用户登陆和短信登陆选中时的样式
      userselected: "login-selected",
      smsselected: false,
      //input栏后面的清除图标的显示切换
      writeni: false,
      writepi: false,
      writeps: false,
      writess: false,
      //随着眼睛样式的切换，切换密码栏input的type
      pass: "password",
      //密码栏的眼睛样式的切换
      bkA: true,
      bkB: false,
      //区域号码的数据
      number: 86,
      //用户登陆和短信登陆框的切换
      userbox: true,
      smsbox: false,
      //传入登陆错误结果的消息数据
      notice: " ",
      //登陆按钮样式相关的watch设置所需
      backcolor: {
        background: "#eee",
        color: "#848689"
      },
      txtusername: "",
      txtpassword: "",
      txtphone: "",
      txtmsg: ""
    };
  },
  components: {},
  watch: {
    //监听所有input内容框的 v-model 值，变化的时候执行check函数
    txtusername: "check",
    txtpassword: "check",
    txtphone: "check",
    txtmsg: "check"
  },
  methods: {
    //修改本地值为router传来的值
    getData(id) {
      this.number = id;
    },
    check: function(newval, oldval) {
      if (
        (this.txtusername == "" || this.txtpassword == "") &&
        (this.txtphone == "" || this.txtmsg == "")
      )
        this.backcolor = {
          background: "#eee",
          color: "#848689"
        };
      else
        this.backcolor = {
          background: "#f23030",
          color: "#fff"
        };
    },
    //点击用户登陆，显示账号登陆框，隐藏短信登陆框，并切换头部的样式
    usernameque: function() {
      this.smsselected = false;
      this.userselected = "login-selected";
      this.userbox = true;
      this.smsbox = false;
      this.txtphone = "";
      this.txtmsg = "";
    },
    //点击短信登陆，显示短信登陆框，隐藏账号登陆框，并切换头部的样式
    smsque: function() {
      this.userselected = false;
      this.smsselected = "login-selected";
      this.userbox = false;
      this.smsbox = true;
      this.txtusername = "";
      this.txtpassword = "";
    },
    //点击input框触发事件，显示尾部的 清除图标
    display: function(param) {
      if (param == "name") {
        this.writeni =true;
      } else if (param == "pass") {
        this.writepi = true;
      } else if (param == "phone") {
        this.writeps = true;
      } else if (param == "msg") {
        this.writess =true;
      }
    },
    //input框失去焦点时，隐藏尾部的 清除图标
    hid: function(param) {
      if (param == "name") {
        this.writeni = false;
      } else if (param == "pass") {
        this.writepi = false;
      } else if (param == "phone") {
        this.writeps = false;
      } else if (param == "msg") {
        this.writess = false;
      }
    },
    //点击眼睛图标，切换密码框的type，并更换图标的background
    bkimgchange: function() {
      if (this.bkA == true) {
        this.bkA = false;
        this.bkB = true;
        this.pass = "text";
      } else {
        this.bkB = false;
        this.bkA = true;
        this.pass = "password";
      }
    },
    //点击 清除图标 v-model="" 清空input的内容
    clear: function(id) {
      if (id == "name") {
        this.txtusername = "";
      } else if (id == "pass") {
        this.txtpassword = "";
      } else if (id == "phone") {
        this.txtphone = "";
      } else if (id == "msg") {
        this.txtmsg = "";
      }
    }
  }
};
</script>

<style lang="scss" module>
.section {
  width: 100%;
  max-width: 1536px; /*px*/
  margin: 0 auto;
  background: #fff;
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
    width: 100%;
    .login-tab {
      width: 100%;
      font-size: 28px; /*px*/
      height: 88px; /*px*/
      line-height: 88px; /*px*/
      box-sizing: border-box;
      border-bottom: 1px solid #d7d7d7;
      .usr-login {
        width: 50%;
        float: left;
        text-align: center;
      }
      .sms-login {
        width: 50%;
        float: right;
        text-align: center;
      }
    }
    .box {
      padding: 0 40px;
      width: 100%;
      box-sizing: border-box;
      .inputcontainer {
        position: relative;
        width: 100%;
        height: 96px; /*px*/
        line-height: 96px; /*px*/
        padding: 0 10px;
        background-color: #fff;
        border-bottom: 2px solid #d7d7d7;
        box-sizing: border-box;
        > p {
          font-size: 28px; /*px*/
          top: 5px; /*px*/
          color: #333;
          position: absolute;
          width: 120px; /*px*/
          display: inline-block;
          text-align: left;
        }
        .username {
          width: 100%;
          padding: 0 60px 0 120px;
          box-sizing: border-box;
          display: inline-block;
          font-size: 28px; /*px*/
          border: 0;
          overflow: hidden;
        }
        .password {
          width: 100%;
          padding: 0 140px 0 120px;
          box-sizing: border-box;
          display: inline-block;
          font-size: 28px; /*px*/
          border: 0;
          overflow: hidden;
        }
        .phone {
          width: 100%;
          padding: 2px 260px 2px 120px;
          box-sizing: border-box;
          display: inline-block;
          font-size: 28px; /*px*/
          border: 0;
          overflow: hidden;
        }
        .msg {
          width: 100%;
          padding: 2px 64px 2px 0;
          box-sizing: border-box;
          display: inline-block;
          font-size: 28px; /*px*/
          border: 0;
          overflow: hidden;
        }
        .mesg {
          width: 236px; /*px*/
          border-left: 2px solid #d7d7d7;
          border-top: 0;
          border-right: 0;
          border-bottom: 0;
          padding: 0;
          height: 46px; /*px*/
          line-height: 46px; /*px*/
          position: absolute;
          top: 25px; /*px*/
          right: 0;
          background-color: #fff;
          box-shadow: none;
          color: #848689;
          font-size: 28px; /*px*/
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
        }
        .iconname {
          right: 20px; /*px*/
        }
        .iconpass {
          right: 90px; /*px*/
        }
        .iconphone {
          right: 236px; /*px*/
        }
        .iconmsg {
          right: 20px; /*px*/
        }
        .checkbtn {
          position: absolute;
          right: 10px; /*px*/
          top: 30px; /*px*/
          width: 60px; /*px*/
          height: 36px; /*px*/
          box-sizing: border-box;
        }
        .bkA {
          background-image: url(../../img/yan.png);
          background-size: 100% auto;
          background-clip: padding-box;
        }
        .bkB {
          background-image: url(../../img/yan2.png);
          background-size: 100% auto;
          background-clip: padding-box;
        }
        a {
          text-decoration: none;
        }
        .select {
          width: 124px; /*px*/
          left: 10px; /*px*/
          position: absolute;
          p {
            font-size: 26px; /*px*/
            color: #333;
            display: inline-block;
            width: 70px;
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
            right: 6px; /*px*/
          }
        }
      }
    }
    .bum {
      padding: 0 40px;
      width: 100%;
      box-sizing: border-box;
      > a {
        text-decoration: none;
      }
      .notice {
        font-size: 24px; /*px*/
        line-height: 60px; /*px*/
        color: #f23030;
        min-height: 60px; /*px*/
        text-align: left;
      }
      .btn {
        width: 100%;
        height: 90px; /*px*/
        line-height: 92px; /*px*/
        border-radius: 4px; /*px*/
        display: block;
        text-align: center;
        font-size: 28px; /*px*/
      }
      .J {
        border: 0;
      }
      .D {
        color: #f23030 !important;
        border: #f23030 2px solid !important;
        background: #fff;
        margin-top: 20px; /*px*/
      }
    }
    .quick-nav {
      text-align: center;
      margin-top: 40px; /*px*/
      padding: 0 40px; /*px*/
      box-sizing: border-box;
      position: relative;
      background: #fff;
      height: 44px; /*px*/
      a {
        text-decoration: none;
        color: #333;
        line-height: 44px; /*px*/
        text-indent: 50px; /*px*/
        display: inline-block;
        font-size: 24px; /*px*/
        &:nth-child(1) {
          float: left;
        }
        &:nth-child(2) {
          float: right;
        }
      }
      .icon {
        overflow: hidden;
        width: 44px; /*px*/
        height: 44px; /*px*/
        background: url(//plogin.m.jd.com/jd-mlogin/1.0.4/images/a3a248f4a949c14c2cb4fb9ac656f1f5.png)
          no-repeat;
        background-size: 100% auto;
        position: absolute;
      }
      .iconclock {
        background-position: 0 -46px; /*px*/
        display: block;
      }
      .iconreg {
        background-position: 0 -84px; /*px*/
        display: block;
      }
    }
  }
  .floot {
    margin-top: 210px; /*px*/
    padding: 0 40px 40px 40px; /*px*/
    .otherlogin {
      height: 170px; /*px*/
      position: relative;
      padding: 60px 20px 0 20px; /*px*/
      box-sizing: border-box;
      border-top: 2px solid #d7d7d7;
      > h4 {
        position: absolute;
        top: -30px; /*px*/
        left: 50%;
        background-color: #fff;
        padding: 10px 30px; /*px*/
        font-size: 28px; /*px*/
        color: #bfbfbf;
        transform: translateX(-50%);
      }
      .icon {
        overflow: hidden;
        width: 44px; /*px*/
        height: 44px; /*px*/
        background: url(//plogin.m.jd.com/jd-mlogin/1.0.4/images/a3a248f4a949c14c2cb4fb9ac656f1f5.png)
          no-repeat;
        background-size: 100% auto;
        position: absolute;
      }
      .iconqq {
        background-position: 0 -258px; /*px*/
        left: 26%;
      }
      .iconwx {
        background-position: 0 -310px; /*px*/
        right: 26%;
      }
    }
    .jdzc {
      color: #333;
      font-size: 28px; /*px*/
      line-height: 42px; /*px*/
      text-align: center;
      margin: 50px 0;
      > a {
        width: auto;
        text-decoration: underline;
        color: #333;
      }
    }
  }
}
</style>

<style lang="scss">
#login-tab {
  .login-selected {
    > span {
      border-bottom: 4px solid #f23030;
      padding: 22px 20px; /*px*/
    }
  }
}
::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #d7d7d7;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #d7d7d7;
  opacity: 1;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #d7d7d7;
  opacity: 1;
}
:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #d7d7d7;
}
::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #d7d7d7;
}
</style>