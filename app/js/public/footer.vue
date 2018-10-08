<template>
   <Panel title="公司信息" :class="$style.panel">
       <ul :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252" alt="">
           <li>版权所有©2004-2018京东京东版权所有</li>
           <li>投资有风险，购买需谨慎</li>
           <li>京东金融平台服务协议</li>
           <li>京东金融隐私政策</li>
       </ul>
   </Panel>
</template>

<script>
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
  margin-bottom: 100px; /*px*/
  > h4 {
    display: none;
  }
  .content {
    @include flex;
    > img {
      width: 100%;
    }
    li {
      width: 100%;
      font-size: 24px; /*px*/
      text-align: center;
      color: #999;
      background-color: #f5f5f5;
      height: 86px; /*px*/
      line-height: 86px; /*px*/
      vertical-align: inherit;
      &:nth-child(n + 2) {
        border-top: 1px solid #ddd;
      }
    }
  }
}
</style>
