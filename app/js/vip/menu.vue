<template>
   <div :class="$style.panel">
       <div v-for="item in items" :key="item.title" :class="$style.item">
           <router-link :to="{name:item.href}">
               <img :src="item.icon" alt="">
               <div :class="$style.title">{{item.title}}</div>
               <div :class="$style.right">{{item.right}}</div>              
           </router-link>
       </div>
   </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      items: [
        {
          href: "Home",
          icon:
            "//img12.360buyimg.com/jrpmobile/jfs/t8971/199/1863233880/2035/56d04776/59cb5fbdNa7c682c3.png?width=70&height=70",
          title: "我的资产",
          right: "查看全部资产"
        },
        {
          href: "Home",
          icon:
            "//img12.360buyimg.com/jrpmobile/jfs/t8836/18/2342020923/2120/a9b7a8ff/59cb6124N31cb2889.png?width=70&height=70",
          title: "我的优惠券",
          right: "查看全部"
        },
        {
          href: "Home",
          icon:
            "//img12.360buyimg.com/jrpmobile/jfs/t10264/48/2521964269/2177/cb479501/59f945edNc1197b64.png?width=90&height=90",
          title: "我的金币",
          right: "赚金币兑好物"
        },
        {
          href: "Home",
          icon:
            "//img12.360buyimg.com/jrpmobile/jfs/t12115/250/469950434/3906/ad97c994/5a0bdf3aN22efb724.png?width=90&height=90",
          title: "我的金条",
          right: "查看额度"
        },
        {
          href: "Home",
          icon:
            "//img12.360buyimg.com/jrpmobile/jfs/t9244/132/2364556535/1134/334cd5d9/59cb612dN5b974dc5.png?width=70&height=70",
          title: "我的借钱",
          right: "查看全部产品"
        },
        {
          href: "Home",
          icon:
            "//img12.360buyimg.com/jrpmobile/jfs/t9121/110/2300703915/1348/91af205c/59cb613bN1e749e58.png?width=70&height=70",
          title: "我的白条",
          right: "去提额"
        },
        {
          href: "Home",
          icon:
            "//img12.360buyimg.com/jrpmobile/jfs/t9649/171/293125950/1453/4cf0cc2/59cb6162N9c71da0f.png?width=70&height=70",
          title: "我的众筹",
          right: "查订单/物流"
        },
        {
          href: "Home",
          icon:
            "//img12.360buyimg.com/jrpmobile/jfs/t8014/149/2344686222/2102/341ff316/59cb616bN3e1bd87d.png?width=70&height=70",
          title: "我的保障",
          right: "全方位保障"
        },
        {
          href: "Home",
          icon:
            "//img12.360buyimg.com/jrpmobile/jfs/t10423/230/287832134/1427/af7e4c86/59cb61b2N53280a30.png?width=70&height=70",
          title: "实名认证",
          right: " "
        },
        {
          href: "Home",
          icon:
            "//img12.360buyimg.com/jrpmobile/jfs/t9832/294/292213011/2420/30888b3d/59cb61c9Nc2bbc057.png?width=70&height=70",
          title: "帮助中心",
          right: " "
        }
      ]
    };
  },
  components: {}
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  width: 100%;
  background-color: #f5f5f5;
  position: relative;
  @include flex;
  a {
    text-decoration: none;
  }
  .item {
      background: #fff;
    height: 112px; /*px*/
    line-height: 112px; /*px*/
    position: relative;
    text-align: left;
    img {
      width: 48px; /*px*/
      margin: 32px 32px 0 32px; /*px*/
      box-sizing: border-box;
      float: left;
    }
    .title {
      font-size: 32px; /*px*/
      color: #333;
      height: 112px; /*px*/
      line-height: 112px; /*px*/
      float: left;
    }
    .right {
      font-size: 28px; /*px*/
      color: #999;
      position: absolute;
      right: 0;
      margin-right: 32px; /*px*/
      padding-right: 30px; /*px*/
      background-size: 18px 30px; /*px*/
      background: url(//m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png) center
        right no-repeat;
    }
    &:nth-child(-n+8) {
      :after {
        content: " ";
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: #eee;
        left: 0;
        margin-left: 112px; /*px*/
      }
    }
    &:nth-child(n+8){
        margin-bottom: 20px;/*px*/
    }
    &:nth-child(1){
        margin-top: 20px;/*px*/
    }
  }
}
</style>

