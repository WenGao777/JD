<template>
   <panel title="特色推荐" :class="$style.panel">
       <ul :class="$style.content">
           <li :class="$style.item" v-for="item in items" :key="item.src">
               <router-link :to="{name:item.href}">
                 <div :class="$style.box">
                   <img :src="item.src" alt="">
                   <p :class="$style.title">{{item.title}}</p>
                   <p :class="$style.rice"><span :class="$style.pre">￥</span>{{item.rice}}<span :class="$style.up">起</span></p>
                   <div :class="$style.pross">
                       <div :class="$style.wrapper">
                           <!-- 注意。此处用vue支持的style动态绑定方法修改进度条 -->
                           <div :class="$style.inner" :style="{width:item.percent+'%'}"/>
                       </div>
                       <p :class="$style.per">{{item.percent}}%</p>
                   </div>
                   </div>
               </router-link>
           </li>
       </ul>
       <p :class="$style.footer">-   京东金融出品  -</p>
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
            "//img30.360buyimg.com/cf/jfs/t1/1707/39/4229/14188/5b9b9178E205156c1/c123072abe407e22.jpg!q70.dpg",
          title: "苹果手机双卡云双待适配器",
          rice: "79.00",
          percent: 433
        },
        {
          href: "Home",
          src:
            "//img30.360buyimg.com/cf/jfs/t26863/303/393606287/59764/1917433d/5b90ef5bNaa9ea5da.jpg!q70.dpg",
          title: "智能书套装 手稿秒变电子稿",
          rice: "12.00",
          percent: "373"
        },
        {
          href: "Home",
          src:
            "//img30.360buyimg.com/cf/jfs/t24460/138/2176304078/46239/5331654a/5b753c8dN56bfe21e.jpg!q70.dpg",
          title: "小哞5.0真无线蓝牙耳机",
          rice: "28.00",
          percent: "484"
        },
        {
          href: "Home",
          src:
            "//img30.360buyimg.com/cf/jfs/t1/2583/31/704/50302/5b9256b2E2f9bc0a8/88bf23fa079f7a6d.jpg!q70.dpg",
          title: "新大洲本田NS110R摩托车",
          rice: "2180.00",
          percent: "692"
        },
        {
          href: "Home",
          src:
            "//img30.360buyimg.com/cf/jfs/t1/5644/4/2324/18271/5b963077E97de0b8a/316daa10ba052eca.jpg!q70.dpg",
          title: "ZMI 旅行助手翻译路由手机",
          rice: "349.00",
          percent: "442"
        },
        {
          href: "Home",
          src:
            "//img30.360buyimg.com/cf/jfs/t26983/303/350103949/33000/a5f5aad5/5b8f5242N7ece9ea7.jpg!q70.dpg",
          title: "可宝轻薄美学指甲刀",
          rice: "49.00",
          percent: "999"
        },
        {
          href: "Home",
          src:
            "//img30.360buyimg.com/cf/jfs/t22987/291/2575650284/72366/35afacb9/5b8604beN82d57bbb.gif!q70.dpg",
          title: "腹肌锻炼-减肚子健身器",
          rice: "99.00",
          percent: "999"
        },
        {
          href: "Home",
          src:
            "//img30.360buyimg.com/cf/jfs/t1/497/19/2630/48409/5b965294E44aba491/bec0ee9559b7b037.jpg!q70.dpg",
          title: "军拓马拉松跑步智能手表限量版",
          rice: "198.00",
          percent: "883"
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
  margin-bottom: 200px;/*px*/
  & > h4 {
    font-size: 36px;
    font-weight: 700;
    height: 120px;
    line-height: 120px;
    box-sizing: border-box;
    max-width: 40%;
    text-align: left;
    padding: 0;
    margin-left: 44px;
  }
  .content {
    @include flex(row);
    background: #f3f5f7;
    .item {
      width: 50%;
      a {
        text-decoration: none;
      }
      .box {
        &:nth-child(2n-1) {
          margin-right: 5px;
        }
        &:nth-child(2n) {
          margin-left: 5px;
        }
        background: #fff;
        margin-bottom: 10px;
        img {
          display: block;
          width: 316px;
          padding: 0 44px;
          box-sizing: border-box;
          height: 180px;
        }
        .title {
          font-size: 30px;
          color: #333;
          height: 42px;
          line-height: 42px;
          margin: 22px 0 30px 44px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          letter-spacing: -2px;
        }
        .rice {
          font-size: 32px;
          font-weight: 550;
          color: #ff9a1c;
          height: 34px;
          line-height: 34px;
          margin-bottom: 14px;
          padding-left: 30px;
          .pre {
            font-size: 24px;
            font-weight: 400;
            color: #f92;
          }
          .up {
            font-size: 24px;
            color: #999;
            margin-left: 10px;
            font-weight: 400;
          }
        }
        .pross {
          @include flex(row);
          align-items: center;
          justify-content: space-around;
          padding: 0 30px;
          margin-bottom: 26px;
          .wrapper {
            width: 160px;
            height: 10px;
            background: #f3f5f7;
            .inner {
              height: 10px;
              max-width: 100%;
              background: linear-gradient(270deg, #f55 1%, #ff9c31);
            }
          }
          .per {
            font-size: 24px;
            height: 24px;
            line-height: 24px;
            margin-right: 10px;
            color: #999;
          }
        }
      }
    }
  }
  .footer {
    font-size: 24px;/*px*/
    height: 100px;/*px*/
    line-height: 100px;/*px*/
    display: block;
    text-align: center;
    color: #b1b4bb;
    padding: 0 16px;/*px*/
    background: #f3f5f7;
  }
}
</style>
