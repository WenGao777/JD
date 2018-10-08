<template>
   <panel title="便利生活" :class="$style.panel">
       <section :class="$style.content">
           <ul :class="$style.list">
               <li>
                   <img src="//img12.360buyimg.com/jrpmobile/jfs/t25816/184/794675703/10638/8e305eda/5b7cc5b7N4458d792.png?width=120&height=120" alt="">
                   <p>机票</p>
               </li>
               <li>
                   <img src="//img12.360buyimg.com/jrpmobile/jfs/t24253/353/2387475275/10948/2d66e0a6/5b7cc5c4Nda444541.png?width=120&height=120" alt="">
                   <p>每日特惠</p>
               </li>
               <li>
                   <img src="//img12.360buyimg.com/jrpmobile/jfs/t23545/326/2350178779/9112/3907a048/5b7cc5cfNcb2fe064.png?width=120&height=120" alt="">
                   <p>领钢镚</p>
               </li>
               <li>
                   <img src="//img12.360buyimg.com/jrpmobile/jfs/t25147/99/816980618/9956/15ea788f/5b7cc5d8Na9b78fc3.png?width=120&height=120" alt="">
                   <p>租车</p>
               </li>
               <li>
                   <img src="//img12.360buyimg.com/jrpmobile/jfs/t25888/209/797947217/9198/97421460/5b7cc5e0Na26da6bb.png?width=120&height=120" alt="">
                   <p>电影票</p>
               </li>
           </ul>
           <img src="//img12.360buyimg.com/jrpmobile/jfs/t24091/103/334342904/113413/13be9e7e/5b2c6e44N6ec010f7.jpg?width=1500&height=956" alt="">
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
            height: 408px;
        }
        .list{
            width: 100%;
            @include flex(row);
            margin-bottom: 50px;
            li{
                width: 20%;
                height: 148px;
                font-size: 26px;
                text-align: center;
                color: #666;
                img{
                    width: 90px;
                    height: 90px;
                    display: block;
                    margin: 19px 19px 0 19px;
                }
                p{
                    margin-top: 12px;
                    line-height: 39px;
                    display: block;
                }
            }
        }
    }
}
</style>
