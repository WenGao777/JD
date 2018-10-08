<template>
    <div>
        <img :class="$style.phone" src="//m.jr.jd.com/vip/borrowMoney/widget/jdGold/i/signIcon.png" alt="">
        <Heador/>
        <div :class="$style.room">
        <Car/>
        <White/>
        <Active/>
        </div>
        <Nav/>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Car from './car.vue'
import White from './white.vue'
import Active from './active.vue'
import Nav from '../public/navbar.vue'
export default {
  data() {
    return {};
  },
  components:{
    Heador,
    Nav,
    Car,
    White,
    Active,
  }
}
</script>

<style lang="scss" module>
.phone{
    width: 102px;
    height: 136.5px;
    position: fixed;
    right: -17.5px;
    top:60%;
    z-index: 10;
}
.room {
  width: 100%;
  max-width: 1536px;/*px*/
  margin: 0 auto;
}
</style>
