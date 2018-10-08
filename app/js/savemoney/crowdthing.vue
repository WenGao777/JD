<template>
   <panel title="众筹好物" :class="$style.panel">
       <ul :class="$style.content">
           <li :class="$style.item" v-for="item in items" :key="item.src">
               <div :class="$style.box">
               <router-link :to="{name:item.href}">
                   <img :src="item.src" alt="">
                   <p :class="$style.title">{{item.title}}</p>
                   <p :class="$style.rice"><span :class="$style.pre">￥</span>{{item.rice}}<span :class="$style.up">起</span></p>
               </router-link>
               </div>
           </li>
       </ul>
   </panel>
</template>

<script type="text/ecmascript-6">
import Panel from "../core/panel.vue";
export default {
  data() {
    return {
      items: [
        {
          href: "Home",
          src:
            "//img30.360buyimg.com/cf/jfs/t22927/213/2064362221/56618/8889e8a/5b7399aeN96c7a9b3.jpg!q70.dpg",
          title: "花丝镶嵌真牛平安扣吊坠",
          rice: "199.00"
        },
        {
          href: "Home",
          src:
            "//img30.360buyimg.com/cf/jfs/t1/736/27/4383/45068/5b9b4c28Ef303e048/fbe5fd198a7f1394.jpg!q70.dpg",
          title: "必迈高弹缓震休闲慢跑鞋",
          rice: "399.00"
        },
        {
          href: "Home",
          src:
            "//img30.360buyimg.com/cf/jfs/t24736/89/1087787948/71294/5123d6ef/5b890621N2d7cb435.jpg!q70.dpg",
          title: "TeaX无限可能的器",
          rice: "198.00"
        },
        {
          href: "Home",
          src:
            "//img30.360buyimg.com/cf/jfs/t1/2587/8/4543/55152/5b9cbe07E0fa315d0/67c2644c9bd12aba.jpg!q70.dpg",
          title: "一擦秒变新机  手机镀膜",
          rice: "29.00"
        },
        {
          href: "Home",
          src:
            "//img30.360buyimg.com/cf/jfs/t1/908/29/578/28191/5b909a64E44cbdd06/878dd7892aa42fff.jpg!q70.dpg",
          title: "银饰传奇-宫钉足银精品茶具",
          rice: "499.00"
        },
        {
          href: "Home",
          src:
            "//img30.360buyimg.com/cf/jfs/t27253/175/331150193/60065/ec266e93/5b8e7932N82ce4e5a.jpg!q70.dpg",
          title: "浦poa'出品赖庆国锡器",
          rice: "498.00"
        },
        {
          href: "Home",
          src:
            "//img30.360buyimg.com/cf/jfs/t1/1511/11/3638/17857/5b9a1601E826eac73/52e538953e61c33f.jpg!q70.dpg",
          title: "dyplay主动降噪蓝牙耳机",
          rice: "299.00"
        },
        {
          href: "Home",
          src:
            "https://img30.360buyimg.com/cf/jfs/t1/5146/34/4058/86010/5b9b5140E2a6316b6/62aa648ec069147c.jpg!q70.dpg",
          title: "离线支付 多功能智能运动手表",
          rice: "288.00"
        }
      ]
    };
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
  margin-bottom: 100px;
  background: rgb(243, 245, 247);
  > h4 {
    font-size: 32px;
    line-height: 112px;
    height: 112px;
    color: #333;
    font-weight: 700;
    padding: 0 32px;
    text-align: left;
  }
  .content {
    @include flex(row);
    background: rgb(243, 245, 247);
    width: 100%;
    .item {
      width: 50%;
      box-sizing: border-box;
      margin-bottom: 40px;
      padding: 0 10px;
      .box {
        background: rgba(0, 0, 0, 0.02);
        box-sizing: border-box;
        padding-bottom: 40px;
        a {
          text-decoration: none;
          img {
            width: 180px;
            height: 180px;
            margin: 44px 55px 20px 55px;
            box-sizing: border-box;
            padding-bottom: 40px;
            height: 180px;
          }
          .title {
            font-size: 28px;
            font-weight: 700;
            color: #444;
            height: 40px;
            line-height: 40px;
            margin: 0 24px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .rice {
            font-size: 36px;
            font-weight: 700;
            color: #ff3232;
            height: 48px;
            line-height: 48px;
            margin-bottom: 16px;
            text-align: center;
            .pre {
              font-size: 28px;
              font-weight: 400;
            }
            .up {
              font-size: 20px;
              color: #999;
              font-weight: 400;
              position: relative;
              top: -2px;
              margin-left: 4px;
            }
          }
        }
      }
    }
  }
}
</style>
