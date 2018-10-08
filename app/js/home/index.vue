<template>
    <div>
        <Heador/>
        <div :class="$style.room">
          <Slider/>
          <Lis/>
          <Crowd/>
          <Money/>
          <Adv/>
          <Footer/>     
          </div>   
          <Nav/>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Slider from './sliderA.vue'
import Lis from './Lis.vue'
import Crowd from './crowdNew.vue'
import Money from './money.vue'
import Adv from './Adva.vue'
import Footer from '../public/footer.vue'
import Nav from '../public/navbar.vue'
export default {
  data() {
    return {};
  },
  components:{
    Heador,
    Slider,
    Lis,
    Crowd,
    Money,
    Adv,
    Footer,
    Nav,
  }
}
</script>

<style lang="scss" module>
.room {
  width: 100%;
  max-width: 1536px;/*px*/
  margin: 0 auto;
}
</style>
