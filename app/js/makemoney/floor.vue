<template>
   <Panel title="列表-轮播图" :class="$style.panel">
       <section :class="$style.content">
           <ul :class="$style.one">
               <li :class="$style.item">
                   <img src="//img12.360buyimg.com/jrpmobile/jfs/t19825/175/2716312753/5076/dfe2d74f/5b7cc241N65ff1885.png?width=90&height=90" alt="">
                   <p>领红包</p>
               </li>
               <li :class="$style.item">
                   <img src="//img12.360buyimg.com/jrpmobile/jfs/t24682/140/813231673/5159/f8133cd6/5b7cc24fNb15a2746.png?width=90&height=90" alt="">                   
                   <p>领福利</p>
               </li>
               <li :class="$style.item">
                   <img src="//img12.360buyimg.com/jrpmobile/jfs/t25789/23/702574804/4169/de69ccb0/5b7cc25bN4bcd4087.png?width=90&height=90" alt="">
                   <p>领券</p>
                   <span>100-99</span>
               </li>
               <li :class="$style.item">
                   <img src="//img12.360buyimg.com/jrpmobile/jfs/t24289/19/2403404444/4856/13f8bcb9/5b7cc264Nb9e090f2.png?width=90&height=90" alt="">
                   <p>支付抽奖</p>
               </li>
               <li :class="$style.item">
                   <img src="//img12.360buyimg.com/jrpmobile/jfs/t22759/360/2331671780/3943/bed46aef/5b7cc26fN8d6ccb0d.png?width=90&height=90" alt="">
                   <p>全部</p>
               </li>
           </ul>
           <ul :class="$style.two">
               <li :class="$style.list">
                 <div :class="$style.lbox">
                   <p :class="$style.title">13.99<span>%</span></p>
                   <p :class="$style.cont">近一年涨跌幅</p>
                   <router-link :to="{name:'Home'}">
                       <p :class="$style.buy">立即购买</p>
                   </router-link>
                   </div>
               </li>
               <li :class="$style.i">
                 <div :class="$style.rbox">
                 <swiper :options="options" :not-next-tick="options.notNextTick">
                   <swiper-slide :class="$style.slider" v-for="item in items" :key="item.href">
                    <router-link :to="{name:item.href}">
                        <img :src="item.src" alt="">
                        <p>{{item.text}}</p>
                    </router-link>
                    <div class="swiper-pagination" v-if="options.pagination" slot="pagination"/>
                  </swiper-slide>
                </swiper>
                <div :class="$style.rec">
                  <p>为你推荐</p>
                  <img src="//m.jr.jd.com/spe/qyy/hzq/src/static/images/weinituijianxiayibu.png" alt="">
                </div>
                </div>
               </li>
           </ul>
       </section>
   </Panel>
</template>

<script>
import Panel from "../core/panel.vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      options: {
        direction: "vertical",
        loop: true,
        autoplay: true
      },
      items: [
        {
          href: "Home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t23854/78/2345368511/32416/5461a019/5b7cbd67Nfb18f49c.jpg?width=160&height=160",
          text: "5折首发 黑科技减肚子神器"
        },
        {
          href: "Home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t25207/99/1104294713/6571/69cf0ca4/5b8905b4Nfba31901.jpg?width=160&height=160",
          text: "签到送京豆"
        },
        {
          href: "Home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t24064/323/2369551871/31041/4ca7cef6/5b7cbd40N2fd795c5.jpg?width=160&height=160",
          text: "众筹价立减400 全场景面包沙发"
        }
      ]
    };
  },
  components: {
    Panel,
    swiper,
    swiperSlide
  }
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  @include panel;
  h4 {
    display: none;
  }
  .content {
    .one {
      @include flex(row);
      box-sizing: border-box;
      .item {
        width: 20%;
        text-align: center;
        display: inline-block;
        position: relative;
        img {
          width: 90px;
          height: 90px;
          margin: 38px 19px 0 19px;
        }
        p {
          font-size: 24px;
          color: #333;
          margin: 18px 0 48px 0;
        }
        span {
          position: absolute;
          background: red;
          color: #fff;
          font-size: 24px;
          height: 40px;
          line-height: 40px;
          width: 100px;
          border-radius: 30px;
          top: 15px;
          right: -35px;
        }
      }
    }
    .two {
      @include flex(row);
      width: 100%;
      .list {
        height: 200px;
        width: 36%;
        box-sizing: border-box;
        padding-left: 30px;
        .lbox {
          @include flex;
          background-color: rgb(252, 102, 16);
          color: #fff;
          border-radius: 5px;
          box-sizing: border-box;
          padding: 0 24px 0 30px;
          height: 200px;
          .title {
            font-size: 50px;
            height: 70px;
            margin-top: 24px;
            font-weight: 700;
            span{
              font-size: 24px;
              line-height: 0.7px;
              font-weight: 400;
            }
          }
          .cont {
            font-size: 24px;
            height: 24px;
            line-height: 24px;
            border-bottom: #fff 1px solid;
            margin-bottom: 12px;
            padding-bottom: 12px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
          .buy {
            font-size: 24px;
            height: 34px;
          }
          a {
            text-decoration: none;
            color: #fff;
          }
        }
      }
      .i {
        height: 200px;
        width: 64%;
        padding: 0 30px 0 20px;
        box-sizing: border-box;
        .rbox {
          border-radius: 8px;
          position: relative;
          background: rgb(56, 106, 199);
          height: 200px;
          width: 100%;
          .slider {
            width: 100%;
            img {
              width: 200px;
              height: 200px;
              box-sizing: border-box;
              padding: 20px;
            }
            p {
              font-size: 24px;
              line-height: 28px;
              height: 56px;
              width: 44%;
              margin-top: 24px;
              //两行才省内
              text-overflow: ellipsis;
              overflow: hidden;
              //注意一下三个搭配使用
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
            }
            a {
              text-decoration: none;
              color: #fff;
              @include flex(row);
            }
          }
          .rec {
            width: 204px;
            height: 114px;
            position: absolute;
            top: 90px;
            right: 0;
            img {
              width: 114px;
              height: 114px;
              float: right;
            }
            p {
              margin-top: 56px;
              padding-left: 30px;
              height: 34px;
              line-height: 34px;
              font-size: 24px;
              color: #fff;
              position: absolute;
              left: 0;
              top: 0;
              z-index: 1;
            }
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
@import "~swiper/dist/css/swiper.css";
.swiper-container-vertical {
  height: 200px;
  overflow: hidden;
}
</style>