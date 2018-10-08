<template>
   <Panel title="精品活动" :class="$style.panel">
       <section :class="$style.content">
           <img src="//img12.360buyimg.com/jrpmobile/jfs/t23137/151/2551779670/18585/904d7443/5b86cabeN3263779b.png?width=376&height=264" alt="">
           <img src="//img12.360buyimg.com/jrpmobile/jfs/t22264/337/1504407440/65624/b7d95603/5b2afbeaN7987d0b2.png?width=376&height=264" alt="">
           <img src="//img12.360buyimg.com/jrpmobile/jfs/t16675/365/91110617/54621/c0042c09/5a5c87faNd161d42e.png?width=730&height=264" alt="">
       </section>
   </Panel>
</template>

<script type="text/ecmascript-6">
import Panel from "../core/panel.vue";
export default {
  data() {
    return {};
  },
  components: {
    Panel
  }
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  @include panel;
  margin-bottom: 200px;
  background: #fff;
  >h4 {
      font-size: 32px;
      line-height: 112px;
      height: 112px;
      color: #000;
      font-weight: 700;
      padding: 0 32px;
      text-align: left;
    }
  .content {
    @include flex(row);
    width: 100%;
    img {
      &:nth-child(1) {
        width: 50%;
        height: 225px;
      }
      &:nth-child(2) {
        width: 50%;
        height: 225px;
      }
      &:nth-child(3) {
        width: 100%;
        height: 230px;
      }
    }
  }
}
</style>
