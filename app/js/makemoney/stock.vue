<template>
<div :class="$style.div">
   <Panel title="股票" :class="$style.panel">
       <section :class="$style.content">
           <div :class="$style.lbox">
           <ul :class="$style.left">
               <img :class="$style.bk" src="//img12.360buyimg.com/jrpmobile/jfs/t26923/258/154024707/4564/402f3e22/5b8748afNef25cf99.jpg?width=335&height=200" alt="">
               <img :class="$style.hu" src="//img30.360buyimg.com/jr_image/jfs/t5848/216/253631918/136369/1894b4a7/591e5567Ncfb35e99.jpg" alt="">
               <li :class="$style.ti">{{rate}}<span :class="$style.bb">%</span></li>
               <li :class="$style.co">累计收益排行榜</li>
               <li :class="$style.na"><span :class="$style.aa">牛人</span>zangyn</li>
               <img :class="$style.ru" src="//m.jr.jd.com/spe/qyy/hzq/src/static/images/go_btn.png" alt="">
           </ul>
           </div>
           <div :class="$style.rbox">
           <ul :class="$style.right">
               <img :class="$style.bkk" src="//img12.360buyimg.com/jrpmobile/jfs/t24751/54/1036835300/6171/bca5b98a/5b8748cbNa372d6a3.jpg?width=335&height=200" alt="">
               <li :class="$style.tt">天天赢钢镚</li>
               <li :class="$style.cc">挑战500元大奖</li>
               <li :class="$style.rr">立即前往</li>
               <img :class="$style.ruu" src="//m.jr.jd.com/spe/qyy/hzq/src/static/images/go_btn.png" alt="">
           </ul>
           </div>
       </section>
   </Panel>
   <img src="//img12.360buyimg.com/jrpmobile/jfs/t25603/15/1053175366/15557/ab0e663d/5b874874N4c490fc5.png?width=750&height=200" alt="">
</div>
</template>

<script type="text/ecmascript-6">
import Panel from "../core/panel.vue";
export default {
  data() {
    return {
      rate: 670.89
    };
  },
  components: {
    Panel
  }
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.div {
  background-color: #fff;
  padding-bottom: 40px;
  margin-bottom: 20px;
  .panel {
    @include panel;
    padding: 0 30px 16px 30px;
    box-sizing: border-box;
    & > h4 {
      font-size: 36px;
      font-weight: 700;
      height: 120px;
      line-height: 120px;
      box-sizing: border-box;
      max-width: 40%;
      text-align: left;
      padding: 0;
    }
    .content {
      @include flex(row);
      color: #fff;
      .lbox {
        width: 50%;
        height: 200px;
        .left {
          position: relative;
          height: 200px;
          margin-right: 16px;
          .hu {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            position: absolute;
            left: 20px;
            top: 30px;
          }
          .ti {
            height: 52px;
            line-height: 52px;
            font-size: 36px;
            font-weight: 550;
            position: absolute;
            top: 26px;
            left: 130px;
            .bb {
              font-size: 24px;
            }
          }
          .co {
            font-size: 24px;
            position: absolute;
            top: 78px;
            left: 130px;
          }
          .na {
            font-size: 24px;
            position: absolute;
            top: 140px;
            right: 82px;
            .aa {
              background-image: linear-gradient(-90deg, #fd5737, #ec3038);
            }
          }
          .ru {
            width: 50px;
            height: 50px;
            position: absolute;
            right: 20px;
            bottom: 20px;
          }
          .bk {
            width: 100%;
            height: 200px;
            border-radius: 4px;
          }
        }
      }
      .rbox {
        width: 50%;
        height: 200px;
        .right {
          position: relative;
          height: 200px;
          .bkk {
            width: 100%;
            height: 200px;
            border-radius: 4px;
          }
          .tt {
            font-size: 36px;
            position: absolute;
            left: 38px;
            top: 26px;
          }
          .cc {
            font-size: 24px;
            position: absolute;
            left: 38px;
            top: 78px;
          }
          .rr {
            font-size: 24px;
            position: absolute;
            bottom: 30px;
            right: 84px;
          }
          .ruu {
            width: 50px;
            height: 50px;
            position: absolute;
            right: 20px;
            bottom: 20px;
          }
        }
      }
    }
  }
  & > img {
    width: 100%;
  }
}
</style>
