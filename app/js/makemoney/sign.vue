<template>
   <div :class="$style.sign">
       <div :class="$style.box">
           <Btn :class="$style.vip">会员等级</Btn>
           <Btn :class="$style.sign">签到</Btn>
           <span>立即登录 马上赚钱！</span>
       </div>
   </div>
</template>

<script type="text/ecmascript-6">
import Btn from "../core/btn.vue";
export default {
  data() {
    return {};
  },
  components: {
    Btn
  }
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.sign {
  width: 100%;
  height: 130px;
  line-height: 130px;
  box-sizing: border-box;
  margin-top: -15px;
  position: relative;
  .box {
    position: relative;
    height: 130px;
    line-height: 130px;
    margin: 0 32px;
    z-index: 1;
    background: #fff;
    border-radius: 4px;
    box-shadow: 1px 1px 10px rgba(101, 118, 155, 0.15);
    span {
      font-size: 28px;
      color: #c6a76f;
      height: 66px;
      line-height: 66px;
      position: absolute;
      top: 30px;
      left: 130px;
    }
    .vip {
      border-radius: 4px;
      box-shadow: 3px 3px rgba(202, 176, 119, 0.51);
      color: #fff;
      font-size: 24px;
      height: 66px;
      line-height: 66px;
      margin-left: 20px;
      min-width: 92px;
      border: 0;
      padding: 0;
      position: absolute;
      top: 30px;
      left: 0;
    }
    .sign {
      min-width: 140px;
      height: 66px;
      line-height: 66px;
      font-size: 24px;
      color: #fff;
      border-radius: 30px;
      border: 0;
      padding: 0;
      margin: 0;
      box-shadow: 3px 3px rgba(196, 169, 115, 0.41);
      width: 140px;
      position: absolute;
      right: 30px;
      top: 30px;
    }
  }
}
</style>
