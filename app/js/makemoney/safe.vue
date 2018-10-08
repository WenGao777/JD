<template>
<div :class="$style.div">
   <Panel title="保险保障" :class="$style.panel">
       <section :class="$style.content">
           <ul :class="$style.list">
               <li :class="$style.left">
                 <div :class="$style.lbox">
                   <p :class="$style.number">100万</p>
                   <p :class="$style.co">京东账户安全险</p>
                   <p :class="$style.btn">立即查看</p>
                   <p :class="$style.today">今日推荐</p>
                   </div>
               </li>
               <li :class="$style.right">
                 <div :class="$style.rbox">
                   <div :class="$style.item">
                       <img src="//img12.360buyimg.com/jrpmobile/jfs/t8881/304/1359242815/2540/5ef07179/59b90050N62f41061.png?width=56&height=56" alt="">
                       <p>车险</p>
                   </div>
                   <div :class="$style.item">
                       <img src="//img12.360buyimg.com/jrpmobile/jfs/t9040/57/2313007861/3024/82c36c44/59ca556eNb605e901.png?width=56&height=56" alt="">
                       <p>人寿</p>
                   </div>
                   <div :class="$style.item">
                       <img src="//img12.360buyimg.com/jrpmobile/jfs/t9283/283/1383600733/3117/82a51164/59b900cfNe88db318.png?width=56&height=56" alt="">
                       <p>意外</p>
                   </div>
                   <div :class="$style.item">
                       <img src="//img12.360buyimg.com/jrpmobile/jfs/t8929/33/1393593833/1749/1e115bd7/59b900e6N73c7b311.png?width=56&height=56" alt="">
                       <p>财产</p>
                   </div>
                   <div :class="$style.item">
                       <img src="//img12.360buyimg.com/jrpmobile/jfs/t8902/275/1411242449/2807/a2cc902a/59b90111N4e88098c.png?width=56&height=56" alt="">
                       <p>健康</p>
                   </div>
                   <div :class="$style.item">
                       <img src="//img12.360buyimg.com/jrpmobile/jfs/t8962/170/1384497943/2594/aa2a2ad9/59b9011bNf3b01bea.png?width=56&height=56" alt="">
                       <p>旅行</p>
                   </div>
                   </div>
               </li>
           </ul>
               <img src="//img12.360buyimg.com/jrpmobile/jfs/t23782/175/2345554410/39410/2ff0ffb9/5b7cb9c4N7815ba88.jpg?width=750&height=200" alt="">
           <p :class="$style.ow">热销保险</p>
           <Slider :options="options" :items="items" cname="safe-slider"/>
       </section>
   </Panel>
   </div>
</template>

<script type="text/ecmascript-6">
import Panel from "../core/panel.vue";
import Slider from "../core/slider.vue";
export default {
  data() {
    return {
      options: {
        slidesPerView: "auto",
        spaceBetween: 16
      },
      items: [
        {
          href: "Home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t24889/131/354158065/11634/e9055370/5b6cf2c5N75ddb07d.jpg?width=210&height=260"
        },
        {
          href: "Home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t1/839/25/3406/23549/5b988e4dEd3ed3224/c977b534ce38098a.jpg?width=210&height=260"
        },
        {
          href: "Home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t1/709/6/3533/22831/5b98c4ebEc72049c6/2a904676464131fd.jpg?width=210&height=260"
        },
        {
          href: "Home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t23833/191/1845625529/12655/cc8838ca/5b6cf311N15968f23.jpg?width=210&height=260"
        }
      ]
    };
  },
  components: {
    Panel,
    Slider
  }
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.div {
  background: #fff;
  .panel {
    @include panel;
    margin: 0px 30px 20px 30px;
    & > h4 {
      max-width: 40%;
      height: 120px;
      line-height: 120px;
      padding: 0;
      text-align: left;
      font-size: 36px;
      font-weight: 700;
    }
    .content {
      @include flex;
      position: relative;
      .list {
        box-sizing: border-box;
        height: 260px;
        @include flex(row);
        .left {
          width: 36%;
          box-sizing: border-box;
          padding: 0 16px 16px 0;
          text-align: center;
          line-height: 260px;
          .lbox {
            width: 100%;
            height: 260px;
            position: relative;
            box-shadow: 3px -3px rgba(101, 118, 155, 0.15);
            .number {
              font-size: 50px;
              color: #1bd5c7;
              height: 62px;
              line-height: 62px;
              padding: 62px 0 4px 0;
            }
            .co {
              font-size: 24px;
              color: black;
              height: 34px;
              line-height: 34px;
              margin-bottom: 24px;
              padding: 0 12px;
            }
            .btn {
              background-color: #1bd5c7;
              border-radius: 30px;
              color: #fff;
              font-size: 24px;
              height: 50px;
              line-height: 50px;
              margin: 0 24px;
              padding: 0 12px;
            }
            .today {
              background-color: rgb(0, 0, 0);
              color: #fff;
              font-size: 24px;
              height: 32px;
              line-height: 32px;
              width: 120px;
              box-sizing: border-box;
              margin: 0;
              padding: 0 12px;
              position: absolute;
              top: 0;
              left: 0;
            }
          }
        }
        .right {
          width: 64%;
          box-sizing: border-box;
          padding-right: 30px;
          line-height: 260px;
          .rbox {
            width: 100%;
            height: 260px;
            @include flex(row);
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
      .ow {
        font-size: 28px;
        height: 100px;
        line-height: 100px;
        color: #333;
        text-align: left;
      }
    }
  }
}
</style>

<style lang="scss">
.safe-slider {
  .swiper-container {
    .swiper-slide {
      width: 210px;
      img {
        width: 210px;
      }
    }
  }
}
</style>