<template>
   <panel title="支付优惠" :class="$style.panel">
       <section :class="$style.content">
           <img src="//img12.360buyimg.com/jrpmobile/jfs/t20125/139/377044579/41214/51a08cb6/5b0b947bN916e62ee.jpg?width=1500&height=442" alt="">
           <div :class="$style.list">
               <img :class="$style.left" src="//img12.360buyimg.com/jrpmobile/jfs/t21220/114/370135108/16076/707215c1/5b0b957bNcb388c1b.png?width=335&height=420" alt="">
               <div :class="$style.right">
                   <img src="//img12.360buyimg.com/jrpmobile/jfs/t19198/45/2659881364/38954/a2c7ccc1/5b0402a7Nc06d77e4.png?width=335&height=210" alt="">
                   <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/5750/40/2169/8786/5b95eaf0E03adb9d7/5c373b1c487e5586.png?width=335&height=210" alt="">
               </div>
           </div>
       </section>
   </panel>
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
    @include panel;
    background: #fff;
    >h4 {
      font-size: 32px;
      line-height: 112px;
      height: 112px;
      color: #333;
      font-weight: 700;
      padding: 0 32px;
      text-align: left;
    }
    .content{
        @include flex;
        >img{
            width: 100%;
            background: #f5f5f5;
        }
        .list{
            @include flex(row);
            width: 100%;
            box-sizing: border-box;
            padding: 0 30px;
            .left{
                width: 50%;
                height: 363px;
                box-sizing: border-box;
                padding-right: 10px;
                background: #f5f5f5;
            }
            .right{
                width: 50%;
                box-sizing: border-box;
                padding-left: 10px;
                background: #f5f5f5;
                @include flex;
                img{
                    width: 100%;
                    height: 180px;
                    &:nth-child(1){
                        margin-bottom: 10px;
                    }
                }
            }
        }
    }
}
</style>
