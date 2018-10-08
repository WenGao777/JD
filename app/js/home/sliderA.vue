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
               src:"//img12.360buyimg.com/jrpmobile/jfs/t1/3501/34/3769/25298/5b9a51e5E3084fb01/267d3e89e405aed0.png?width=750&height=320",
           },
           {
               href:"home",
               src:"//img12.360buyimg.com/jrpmobile/jfs/t1/2206/31/3816/38452/5b9a520eE51dd9b05/397999f1645559fe.jpg?width=750&height=320",
           },{
               href:"home",
               src:"//img12.360buyimg.com/jrpmobile/jfs/t1/3757/19/3769/33523/5b9a5232E217bf73a/e538d966f55938dd.jpg?width=750&height=320",
           },{
               href:"home",
               src:"//img12.360buyimg.com/jrpmobile/jfs/t1/4987/32/3754/41512/5b9a5252E3b50c75b/4464908f79ad15ac.jpg?width=750&height=320",
           }],
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
