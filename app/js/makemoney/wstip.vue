<template>
<div :class="$style.div">
   <Panel title="白条" :class="$style.panel">
       <section :class="$style.content">
           <ul :class="$style.list">
               <li :class="$style.left">
                 <div :class="$style.lbox">
                   <p :class="$style.co">小白信用分</p>
                   <p :class="$style.btn">登录查看</p>
                   </div>
               </li>
               <li :class="$style.right">
                 <div :class="$style.rbox">
                   <div :class="$style.item">
                       <img src="//img12.360buyimg.com/jrpmobile/jfs/t8803/130/802395570/1891/103bedf1/59af980eN987fd5c2.png?width=56&height=56" alt="">
                       <p>白条</p>
                   </div>
                   <div :class="$style.item">
                       <img src="//img12.360buyimg.com/jrpmobile/jfs/t9373/154/878445473/2758/410dc92d/59b901f5Nc93edaac.png?width=56&height=56" alt="">
                       <p>还款</p>
                   </div>
                   <div :class="$style.item">
                       <img src="//img12.360buyimg.com/jrpmobile/jfs/t9391/169/1385525558/2762/2d29f1d5/59b90214N4f745107.png?width=56&height=56" alt="">
                       <p>1元抢券</p>
                   </div>
                   <div :class="$style.item">
                       <img src="//img12.360buyimg.com/jrpmobile/jfs/t7246/167/3036813324/1578/d4ae001e/59b90228Nd61b6465.png?width=56&height=56" alt="">
                       <p>小白卡</p>
                   </div>
                   <div :class="$style.item">
                       <img src="//img12.360buyimg.com/jrpmobile/jfs/t8422/203/1374629409/2823/430e740d/59b90230N09140aba.png?width=56&height=56" alt="">
                       <p>金条</p>
                   </div>
                   <div :class="$style.item">
                       <img src="//img12.360buyimg.com/jrpmobile/jfs/t7618/313/3082994165/3330/e1692006/59b90247Nac3c9ebe.png?width=56&height=56" alt="">
                       <p>校园</p>
                   </div>
                 </div>
               </li>
           </ul>
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t20746/93/1719082958/12040/306a2296/5b31b40dNeefe4c3c.png?width=750&height=200" alt="">
       </section>
       <router-link :to="{name:'Home'}">
           年轻不留白 >
       </router-link>
   </Panel>
   </div>
</template>

<script type="text/ecmascript-6">
import Panel from "../core/panel.vue";
export default {
  data() {
    return {};
  },
  components: {
    Panel
  }
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.div {
  background: #fff;
  padding-bottom: 40px;
  .panel {
    @include panel;
    margin: 0px 30px 20px 30px;
    position: relative;
    & > h4 {
      max-width: 40%;
      height: 120px;
      line-height: 120px;
      padding: 0;
      text-align: left;
      font-size: 36px;
      font-weight: 700;
    }
    & > a {
      text-decoration: none;
      color: #999;
      font-size: 24px;
      height: 120px;
      line-height: 120px;
      text-align: center;
      position: absolute;
      top: 0;
      right: 0;
    }
    .content {
      @include flex;
      .list {
        box-sizing: border-box;
        height: 260px;
        margin-bottom: 40px;
        @include flex(row);
        .left {
          width: 36%;
          .lbox {
            height: 260px;
            line-height: 260px;
            text-align: center;
            position: relative;
            box-sizing: border-box;
            margin: 0 16px 16px 0;
            box-shadow: 3px -3px rgba(101, 118, 155, 0.15);
            .co {
              font-size: 24px;
              color: #c4a36c;
              height: 34px;
              line-height: 34px;
              position: absolute;
              top: 80px;
              left: 15%;
              padding-left: 10px;
            }
            .btn {
              background-color: rgb(212, 181, 117);
              border-radius: 30px;
              color: #fff;
              font-size: 24px;
              height: 50px;
              width: 140px;
              line-height: 50px;
              position: absolute;
              left: 15%;
              top: 180px;
            }
          }
        }
        .right {
          width: 64%;
          .rbox {
            @include flex(row);
            height: 260px;
            box-shadow: -3px -3px rgba(101, 118, 155, 0.15);
            .item {
              width: 33%;
              height: 130px;
              line-height: 130px;
              text-align: center;
              box-sizing: border-box;
              @include flex;
              img {
                width: 56px;
                height: 56px;
                box-sizing: border-box;
                margin: 20px auto 2px;
              }
              p {
                font-size: 24px;
                height: 26px;
                line-height: 26px;
              }
            }
          }
        }
      }
      & > img {
        width: 100%;
      }
    }
  }
}
</style>
