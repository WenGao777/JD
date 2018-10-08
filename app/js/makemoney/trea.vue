<template>
  <div :class="$style.div">
   <Panel title="小金库" :class="$style.panel">
       <section :class="$style.content">
           <div :class="$style.rate">
               {{rate}}
               <span>%</span>
           </div>
           <p :class="$style.sr">七日年化收益</p>
           <p>支付/缴费/优质理财/大额理财</p>
           <div :class="$style.btn">开启送礼包</div>
       </section>
       <router-link :to="{name:'Home'}">
            更多理财产品 >
        </router-link>
        <div :class="$style.title">稳健灵活 小白精选</div>
        <swiper :options="options" :not-next-tick="options.notNextTick" class="treaSlider">
            <swiper-slide v-for="item in items" :key="item.href">
                <router-link :to="{name:item.href}">
                    <p :class="$style.tit">{{item.title}}</p>
                    <p :class="$style.na">{{item.name}}</p>
                    <p :class="$style.ra">
                        {{item.rate}}
                        <span>%</span>
                    </p>
                    <p :class="$style.co">{{item.content}}</p>
                </router-link>
            </swiper-slide>
            <!--轮播图下面的小点点 -->
            <div class="swiper-pagination" v-if="options.pagination" slot="pagination"/>
        </swiper>
   </Panel>
  </div>
</template>

<script type="text/ecmascript-6">
import Panel from "../core/panel.vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      rate: 3.344,
      options: {
        slidesPerView: "auto",
        spaceBetween: 16,
      },
      items: [
        {
          href: "Home",
          title: "月月盈",
          name: "金融专享",
          rate: "4.70",
          content: "近七日年化收益率"
        },
        {
          href: "Home",
          title: "周期盈",
          name: "理财优选",
          rate: "4.60",
          content: "近七日年化收益率"
        },
        {
          href: "Home",
          title: "五年盈",
          name: "长期稳健",
          rate: "5.80",
          content: "历史年化投资回报率"
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
.div {
  background-color: #fff;
  .panel {
    margin: 0 30px 20px 30px;
    position: relative;
    & > h4 {
      font-size: 36px;
      font-weight: 700;
      height: 120px;
      line-height: 120px;
      box-sizing: border-box;
      max-width: 40%;
    }
    .content {
      @include flex;
      font-size: 24px;/*px*/
      height: 200px;
      width: 100%;
      box-sizing: border-box;
      color: #fff;
      border-radius: 4px;
      background: url(//m.jr.jd.com/spe/qyy/hzq/445b538c873a5bffc189ad117298eec4.png)
        50% no-repeat;
      padding-left: 28px;
      overflow: hidden;
      position: relative;
      background-size: cover;
      margin: 0;
      border-radius: 4px;
      .rate {
        font-size: 60px;/*px*/
        font-weight: 700;
        height: 72px;
        line-height: 72px;
        width: 280px;
        margin-top: 24px;
        position: relative;
        border-bottom: #fff 1px solid;
        span {
          font-size: 24px;/*px*/
          font-weight: 400;
          line-height: 1.12496px;
        }
      }
      .sr {
        margin: 16px 0 10px 0;
      }
      .btn {
        width: 40%;
        height: 200px;/*px*/
        line-height: 200px;/*px*/
        font-size: 24px;/*px*/
        text-align: center;
        background: url(//m.jr.jd.com/spe/qyy/hzq/ac3595803ef2dfd8530f13be01cbdead.png)
          50% no-repeat;
        position: absolute;
        background-size: cover;
        right: 0;
        top: 15%;
      }
    }
    & > a {
      height: 120px;
      line-height: 120px;
      font-size: 24px;
      color: #999;
      position: absolute;
      right: 0;
      top: 0;
      text-decoration: none;
    }
    .title {
      font-size: 28px;
      height: 100px;
      line-height: 100px;
    }
    .tit {
      color: #333;
      font-size: 32px;
      margin: 38px 0 10px 0;
      height: 46px;
      line-height: 46px;
    }
    .na {
      background-image: linear-gradient(#5e8fff, #2f6fff);
      font-size: 24px;
      color: #fff;
      border-radius: 22px;
      height: 32px;
      line-height: 32px;
      width: 100px;
      text-align: center;
    }
    .ra {
      color: #ff281e;
      font-size: 45px;
      font-weight: 550;
      height: 60px;
      line-height: 60px;
      font-family: DIN-Bold;
      span {
        font-size: 32px;
        line-height: 60px;
      }
    }
    .co {
      color: #999;
      font-size: 24px;
      height: 28px;
      line-height: 28px;
      margin-top: 8px;
    }
  }
}
</style>

<style lang="scss">
.treaSlider {
  .swiper-slide {
    width: 210px;
    height: 260px;
    box-sizing: border-box;
    padding: 0 30px;
    border-radius: 4px;
    background: #fff;
    color: black;
    box-shadow: 3px 4px rgba(101, 118, 155, 0.15);
    & > a {
      text-decoration: none;
      text-align: left;
    }
  }
}
</style>