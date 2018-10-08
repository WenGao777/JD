<template>
<div :class="$style.div">
   <Panel title="银行精选" :class="$style.panel">
       <section :class="$style.content">
           <div :class="$style.arrow">更多银行服务 ></div>
           <Slider :options="options" :items="items" cname="bank-slider" />
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
        spaceBetween: 16,
      },
      items: [
        {
          href: "Home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t25234/62/727004676/6597/b4db9eca/5b7a216dN6de56fde.png?width=210&height=260"
        },
        {
          href: "Home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t24826/239/218158021/6967/44cd20c2/5b69684cNfd713a4c.png?width=210&height=260"
        },
        {
          href: "Home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t24994/361/229423160/6672/40b69e82/5b696882N2ee57936.png?width=210&height=260"
        },
        {
          href: "Home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t24550/302/1816063622/6876/146f6308/5b6a4dadNcdd576c3.png?width=210&height=260"
        },
        {
          href: "Home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t24565/352/1791107580/8835/76358522/5b6a4dd2Nb30c5d84.jpg?width=210&height=260"
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

<style lang="scss">
.bank-slider {
  .swiper-container {
    .swiper-slide {
      width: 210px;
      height: 260px;
      border-radius: 4px;
      box-sizing: border-box;
      img {
        width: 210px;
      }
    }
  }
}
</style>

<style lang="scss" module>
@import "../../css/element.scss";
.div {
  background-color: #fff;
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
      padding-bottom: 20px;
      position: relative;
      & > div {
        position: absolute;
        font-size: 24px;
        color: #999;
        right: 32px;
        top: -70px;
      }
    }
  }
}
</style>
