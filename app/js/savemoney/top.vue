<template>
   <panel title="首页-活动" :class="$style.panel">
       <section :class="$style.content">
           <Slider :options="options" :items="items" class="save-top-slider"/>
           <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/5391/8/5174/136354/5b9f19eaEe9595f8e/71cfa5b4f7bcaf94.jpg?width=750&height=280" alt="">
           <div :class="$style.list">
               <img src="//img12.360buyimg.com/jrpmobile/jfs/t22930/284/1784613456/150994/5523cb69/5b697d61Nf7756ac1.png?width=750&height=480" alt="">
               <img src="//img12.360buyimg.com/jrpmobile/jfs/t16630/362/2707031119/15173/aa5acde3/5b03d5c7Nccffa23f.jpg?width=750&height=480" alt="">
           </div>
       </section>
   </panel>
</template>

<script type="text/ecmascript-6">
import Panel from "../core/panel.vue";
import Slider from "../core/slider.vue";
export default {
  data() {
    return {
      options: {
        autoplay: true,
        loop: true,
        speed: 1000,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        },
        notNextTick: false
      },
      items: [
        {
          href: "Home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t1/2297/26/5431/19315/5b9fa8e4E94b15e22/e47dcdede91c6ff3.png?width=750&height=360"
        },
        {
          href: "Home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t1/5928/31/5636/125271/5ba07bc7E6a11bbb4/7ad5ace6ae74020a.jpg?width=750&height=360"
        },
        {
          href: "Home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t1/2074/40/5511/52444/5b9fa8eeEf6c0dd09/677161a144f513ec.jpg?width=750&height=360"
        },
        {
          href: "Home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t1/395/27/5776/25202/5b9fa8f1Ef3b17afb/3e8649e7b8398c25.png?width=750&height=360"
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
.panel {
  @include panel;
  > h4 {
    display: none;
  }
  .content {
    @include flex;
    img {
      &:nth-child(2) {
        width: 100%;
      }
    }
    .list {
      @include flex(row);
      width: 100%;
      > img {
        width: 50%;
        height: 205px;
      }
    }
  }
}
</style>

<style lang="scss">
.save-top-slider {
  .swiper-pagination {
    //关于自定义分页器的样式设置
    text-align: right !important;
    padding-right: 34px;
    padding-bottom: 20px;
    font-size: 26px;
    color: #ccc;
    box-sizing: border-box;
    .swiper-pagination-current {
      color: #fff !important;
    }
  }
}
</style>