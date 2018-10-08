<template>
    <div>
        <Heador/>
        <div :class="$style.room">
        <div :class="$style.filler"/>
        <Top/>
        <Payoffer/>
        <Conlife/>
        <Crowdthing/>
        <div :class="$style.filler"/>
        </div>
        <Nav/>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Nav from '../public/navbar.vue'
import Top from './top.vue'
import Payoffer from './payoffer.vue'
import Crowdthing from './crowdthing.vue'
import Conlife from './conlife.vue'
export default {
  data() {
    return {};
  },
  components:{
    Heador,
    Nav,
    Top,
    Payoffer,
    Conlife,
    Crowdthing,
  }
}
</script>

<style lang="scss" module>
.room {
  max-width: 1536px;/*px*/
  width: 100%;
  margin: 0 auto;
  .filler {
    width: 100%;
    height: 120px;/*px*/
  }
}
</style>
