<template>
   <Panel title="房 车" :class="$style.panel">
       <section :class="$style.content">
           <div :class="$style.card">
               <img src="//m.jr.jd.com/vip/borrowMoney/widget/jdGold/i/goldCard.png" alt="">
               <p :class="$style.tt">最高可借</p>
               <p :class="$style.mm"><span>￥</span>300,000</p>
               <p :class="$style.log">立即登录</p>
           </div>
           <Slider :options="options" :items="items" :cname="$style.slider"/>
           <p :class="$style.title">有车有钱</p>
           <div :class="$style.pp">
               <img src="//img12.360buyimg.com/jrpmobile/jfs/t26287/10/82496566/21137/c6e0d587/5b83ce0cNa7a89997.png?width=375&height=233" alt="">
               <img src="//img12.360buyimg.com/jrpmobile/jfs/t14215/140/1757206721/24186/81b4e53c/5a56c877Nee6cfc4d.jpg?width=375&height=233" alt="">
           </div>
           <swiper :options="loptions" :not-next-tick="loptions.notNextTick" class="lslider">
            <swiper-slide v-for="litem in litems" :key="litem.href">
                <router-link :to="{name:litem.href}">
                    <img :src="litem.src" alt="">
                    <p>{{litem.title}}</p>
                </router-link>
            </swiper-slide>
            <!--轮播图下面的小点点 -->
            <div class="swiper-pagination" v-if="loptions.pagination" slot="pagination"/>
        </swiper>
       </section>
   </Panel>
</template>

<script type="text/ecmascript-6">
import Panel from "../core/panel.vue";
import Slider from "../core/slider.vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "",
  data() {
    return {
      loptions: {
        loop: false,
        autoplay: false,
        //同时显示的个数
        slidesPerView: 5,
        //分组，5个一个分页器
        slidesPerGroup : 5,
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination"
        },
        notNextTick: false
      },
      litems: [
        {
          href: "Home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t22912/282/79473391/6583/7174d493/5b247539N4854a034.png?width=90&height=90",
          title: "机票"
        },
        {
          href: "Home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t21325/4/2066194110/3552/8e11af7b/5b45b595Na2f43d34.png?width=90&height=90",
          title: "租房"
        },
        {
          href: "Home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t13051/63/2559290659/4702/e4068917/5a4f2693N937f1905.png?width=88&height=88",
          title: "房抵贷"
        },
        {
          href: "Home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t14896/125/1435676873/3668/a8b392f7/5a4f26edN6cdfda66.png?width=88&height=88",
          title: "分期用"
        },
        {
          href: "Home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t20182/61/1301593180/9560/df0c6362/5b247663Nc83d2060.jpg?width=90&height=90",
          title: "分期商城"
        },
        {
          href: "Home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t16183/231/1309653281/4671/3ace8435/5a4f27d0N9e3df1d5.png?width=90&height=90",
          title: "教育"
        },
        {
          href: "Home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t15955/206/1280935063/4274/6204375a/5a4f2801N015920c5.png?width=90&height=90",
          title: "车险"
        },
        {
          href: "Home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t15451/2/1424737894/3801/e7844c76/5a4f2823Ne430c735.png?width=88&height=88",
          title: "家装"
        },
        {
          href: "Home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90",
          title: "医美"
        },
        {
          href: "Home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90",
          title: "驾校"
        }
      ],
      options: {
        speed: 2000,
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        },
        notNextTick: false
      },
      items: [
        {
          href: "Home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t1/3130/22/4315/12659/5b9bd49dE94f0353d/be835179dd64d9ea.png?width=690&height=154"
        },
        {
          href: "Home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t1/3130/22/4315/12659/5b9bd49dE94f0353d/be835179dd64d9ea.png?width=690&height=154"
        },
        {
          href: "Home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t1/3130/22/4315/12659/5b9bd49dE94f0353d/be835179dd64d9ea.png?width=690&height=154"
        }
      ]
    };
  },
  components: {
    Panel,
    Slider,
    swiper,
    swiperSlide
  }
};
</script>

<style lang="scss">
.lslider {
  width: 100%;
  padding: 0 26px;
  box-sizing: border-box;
  .swiper-slide {
    text-align: center;
    height: 150px;
    &:nth-child(5) {
      margin-right: 26px;
    }
    a {
      text-decoration: none;
      color: #000;
      font-size: 24px;
      img {
        width: 77px;
        height: 77px;
        margin-bottom: 17.5px;
      }
    }
  }
}
</style>

<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  margin-top: 100px;
  margin-bottom: 35px;
  & > h4 {
    display: none;
  }
  .content {
    @include flex;
    background: url(//m.jr.jd.com/vip/borrowMoney/css/i/bj.png) 0 0 no-repeat;
    background-color: #fff;
    background-size: 100% auto;
    .card {
      width: 100%;
      box-sizing: border-box;
      padding: 47px 26px 0 26px;
      position: relative;
      color: #fff;
      img {
        width: 100%;
      }
      .tt {
        font-size: 28px;
        position: absolute;
        top: 25%;
        left: 12%;
      }
      .mm {
        font-size: 75px;
        font-family: DINAlternate-Bold;
        position: absolute;
        top: 35%;
        left: 12%;
        text-shadow: 0 4.3px 4.3px rgba(63, 39, 0, 0.2);
        letter-spacing: -1px;
        span {
          font-size: 52px;
        }
      }
      .log {
        background: url(//m.jr.jd.com/vip/borrowMoney/widget/jdGold/i/btnBj.png)
          0 0 no-repeat;
        background-size: 100% 100%;
        width: 180px;
        height: 57px;
        line-height: 52.5px;
        position: absolute;
        top: 60%;
        left: 12%;
        font-size: 24.5px;
        font-weight: 500;
        text-align: center;
      }
    }
    .slider {
      padding: 0 26px;
      box-sizing: border-box;
      img {
        width: 100%;
      }
    }
    .title {
      font-size: 33px;
      line-height: 38.5px;
      color: #000;
      font-weight: 500;
      padding: 52.5px 0 0 36px;
      position: relative;
      margin-bottom: 26.25px;
    }
    .title:before {
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
    .pp {
      @include flex(row);
      img {
        width: 50%;
        height: 200px;
      }
    }
  }
}
</style>
