<template>
   <Panel title="白条服务" :class="$style.panel">
       <section :class="$style.content">
           <div :class="$style.left">
               <img src="//m.jr.jd.com/vip/borrowMoney/widget/bannerAndCar/i/whiteCard.png" alt="">
           </div>
           <div :class="$style.right">
               <img src="//m.jr.jd.com/vip/borrowMoney/widget/bannerAndCar/i/whiteCircle.png" alt="">
               <p :class="$style.txt1">小白信用</p>
               <p :class="$style.txt2">登录查看</p>
           </div>
       </section>
   </Panel>
</template>

<script type="text/ecmascript-6">
import Panel from '../core/panel.vue'
export default {
   data() {
       return {}
   },
  components: {
      Panel,
  }
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel{
    background: #fff;
    margin-bottom: 16px;
    >h4 {
      font-size: 33px;
      line-height: 38.5px;
      color: #000;
      font-weight: 500;
      padding: 52.5px 0 0 36px;
      position: relative;
      margin-bottom: 26.25px;
    }
    >h4:before {
      content: " ";
      width: 5.25px;
      height: 31.5px;
      background: url(//m.jr.jd.com/vip/borrowMoney/css/i/title.png) 0 0
        no-repeat;
      position: absolute;
      top: 65%;
      left: 26px;
      border-radius: 4px;
    }
    .content{
        @include flex(row);
        width: 100%;
        padding-bottom: 35px;
        box-sizing: border-box;
        .left{
            width: 63.5%;
            padding-left: 13px;
            box-sizing: border-box;
            >img{
                width: 100%;
            }
        }
        .right{
            width: 36%;
            position: relative;
            padding-right: 13px;
            box-sizing: border-box;
            text-align: center;
            line-height: 26.25px;
            font-size: 24px;
            >img{
                width: 100%;
            }
            .txt1{
                position: absolute;
                top: 36%;
                color: #ffeac9;
                width: 100%;
                margin-left: -13px;
            }
            .txt2{
                position: absolute;
                top: 66%;
                color: #ae8339;
                width: 100%;
                margin-left: -13px;
            }
        }
    }
}
</style>
