<template>
   <Panel title="- 众筹新品 -" :class="$style.panel">
       <section :class="$style.content">
           <div :class="$style.arrow">更多尖货 ></div>
           <Slider :options="options" :items="items" cname="product-slider"/>
       </section>
   </Panel>
</template>

<script>
import Panel from '../core/panel.vue'
import Slider from '../core/slider.vue'
export default {
   data() {
       return {
           items:[{
               href:"home",
               src:"//img12.360buyimg.com/jrpmobile/jfs/t24034/237/2596944199/36633/ee35259c/5b89084dN104f748b.jpg?width=335&height=421",
           },{
               href:"home",
               src:"//img12.360buyimg.com/jrpmobile/jfs/t27823/115/186566632/43730/5981d84c/5b89085eN86237342.jpg?width=335&height=421",
           },{
               href:"home",
               src:"//img12.360buyimg.com/jrpmobile/jfs/t27763/129/181005507/38624/7fd58e9c/5b89086cN16631b6e.jpg?width=335&height=421",
           }],
           options:{
               slidesPerView: 'auto',
               spaceBetween: 30,
           }
       }
   },
  components: {
      Slider,
      Panel,
  }
}
</script>

<style lang="scss">
.product-slider{
    .swiper-container{
        padding: 0 24px;
        .swiper-slide{
            width: 42%;
            a{
                img{
                    width: 250px;
                    height: 314px;
                    border: 1px solid #fafafa;
                }
            }
        }
    }
}
</style>
<style lang="scss" module>
@import "../../css/element.scss";
.panel{
    @include panel;
    margin-bottom:20px;
    .content{
        padding-bottom:20px;
        position: relative;
        &>div{
            position: absolute;
            font-size: 28px;
            color: #999;
            right: 32px;
            top:-70px;
        }
    }
}
</style>

