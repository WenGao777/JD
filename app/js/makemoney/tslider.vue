<template>
   <article>
       <Slider :items="items" :cname="$style.slider"/>
   </article>
</template>

<script>
import Slider from '../core/slider.vue'
export default {
   data() {
       return {
           items:[{
               href:"home",
               src:"//img12.360buyimg.com/jrpmobile/jfs/t1/5293/3/4344/48280/5b9bc697Ec673eb8d/6092277620ab3238.jpg?width=750&height=400",
           },
           {
               href:"home",
               src:"//img12.360buyimg.com/jrpmobile/jfs/t1/3158/25/4235/22792/5b9bc6acEe781e400/9e6f43c1be37179d.jpg?width=750&height=400",
           },{
               href:"home",
               src:"//img12.360buyimg.com/jrpmobile/jfs/t1/5799/18/4386/23770/5b9bc6b0E60c4f657/664a624042bc7e7b.jpg?width=750&height=400",
           }]
       }
   },
  components: {
      Slider,
  }
}
</script>

<style lang="scss" module>
.slider{
    margin-top: 120px;/*px*/
    img{
        width: 100%;
    }
}

</style>
