<template>
   <Panel title="列表项" :class="$style.panel">
        <ul :class="$style.content">
            <li :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132" alt="">
               <p>优惠券</p>
               <p>100-99券</p>
            </li>
            <li :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132" alt="">
               <p>领福利</p>
            </li>
            <li :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132" alt="">
               <p>抢钢镚</p>
            </li>
            <li :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135" alt="">
               <p>白条提额</p>
            </li>
            <li :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/520/34/950/3686/5b9239e3Eaaf5465c/8d8c35badacfc114.png?width=90&height=90" alt="">
               <p>工资理财</p>
            </li>
            <li :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/1216/39/659/4516/5b923b1cE5943d1c6/dabaf8b842f57eb9.png?width=90&height=90" alt="">
               <p>众筹</p>
            </li>
            <li :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/3924/28/657/3552/5b9240dbE60256c31/78b52d5ab675f800.png?width=90&height=90" alt="">
               <p>租房</p>
            </li>
            <li :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/479/25/929/9198/5b9243aaE826fc97b/37ef0a7cdfd24238.png?width=120&height=120" alt="">
               <p>电影票</p>
            </li>
        </ul>
   </Panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
    data() {
    return {};
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
    margin: 0;
    background: #fff;
    >h4{
        display: none;
    }
    .content{
        @include flex(row);
        box-sizing: border-box;
        padding-bottom: 40px;
        .item{
            width: 25%;
            text-align: center;
            display: inline-block;
            padding-top: 40px;
            img{
                width: 90px;
                height: 90px;
            }
            p{
                font-size: 26px;
                color:#666;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                margin-top: 15px;
                &:nth-child(3){
                    color: #ff0000;
                    font-size: 22px;
                }
            }
            &:nth-child(3){
                p{
                    color: #ff0000;
                }
            }
        }
    }
}
</style>
