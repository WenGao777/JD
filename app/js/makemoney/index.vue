<template>
   <div>
       <Heador/>
       <div :class="$style.room">
       <Tslider/>
       <Sign/>
       <Floor/>
       <Trea/>
       <Bank/>
       <Safe/>
       <Strip/>
       <Stock/>
       <Feature/>
       </div>
       <Nav/>
   </div>
</template>

<script>
import Heador from '../public/header.vue'
import Tslider from './tslider.vue'
import Sign from './sign.vue'
import Floor from './floor.vue'
import Trea from './trea.vue'
import Bank from './bank.vue'
import Safe from './safe.vue'
import Strip from './wstip.vue'
import Stock from './stock.vue'
import Feature from './feature.vue'
import Nav from '../public/navbar.vue'
export default {
  data() {
    return {};
  },
  components: {
      Heador,
      Tslider,
      Nav,
      Sign,
      Floor,
      Bank,
      Trea,
      Safe,
      Strip,
      Stock,
      Feature,
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
