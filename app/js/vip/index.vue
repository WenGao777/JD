<template>
    <div>
        <Heador/>
        <div :class="$style.room">
          <div :class="$style.filler"/>
          <Per/>
          <Menu/>
          <div :class="$style.filler"/>
          </div>
        <Nav/>
    </div>
</template>

<script>
import Heador from "../public/header.vue";
import Nav from "../public/navbar.vue";
import Per from "./per.vue";
import Menu from "./menu.vue";
export default {
  data() {
    return {};
  },
  components: {
    Heador,
    Nav,
    Per,
    Menu
  }
};
</script>

<style lang="scss" module>
.room {
  width: 100%;
  max-width: 1536px; /*px*/
  margin: 0 auto;
  .filler {
    width: 100%;
    height: 100px; /*px*/
  }
}
</style>
