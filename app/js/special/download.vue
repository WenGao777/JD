<template>
   <div :class="$style.section">
       <div :class="$style.top">
           <img src="//m.jr.jd.com/spe/downloadApp/css/i/logo.png" alt="">
           <p>会赚钱 懂生活的人都在这里</p>
           <p>立即下载</p>
           <p>打开京东金融 ></p>
           <div :class="$style.center">
               <img src="//m.jr.jd.com/spe/downloadApp/css/i/by.png" alt="">
           </div>
       </div>
       <div :class="$style.bottom">
           <p>钱的事 京东金融很行</p>
           <p>源于京东 更源于信任</p>
           <img src="//img30.360buyimg.com/jr_image/jfs/t19984/55/863040802/115952/7b1125fa/5b0d4b6dN621644ea.png" alt="">
       </div>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="scss" module>
.section {
  width: 100%;
  max-width: 1536px; /*px*/
  margin: 0 auto;
  background-image: linear-gradient(-179deg, #f02 0, #ff722e 100%);
  .top {
    background: url(//m.jr.jd.com/spe/downloadApp/css/i/bg.png) no-repeat 50%;
    background-size: cover;
    position: relative;
    padding-bottom: 114px;
    padding-top: 100px;
    box-sizing: border-box;
    img {
      width: 180px;
      height: 200px;
      margin: 0 auto;
      display: block;
    }
    p {
      text-align: center;
      &:nth-child(2) {
        font-size: 25px;
        color: rgba(255, 255, 255, 0.6);
        margin-top: 17px;
        height: 36px;
        line-height: 36px;
      }
      &:nth-child(3) {
        font-size: 29px;
        color: #ff552b;
        width: 426px;
        height: 85px;
        line-height: 85px;
        background: #fff;
        margin: 130px auto 0;
        display: block;
        border-radius: 6px;
        box-shadow: #ff552b 2px 2px;
        box-sizing: border-box;
      }
      &:nth-child(4) {
        font-size: 24px;
        height: 31px;
        line-height: 31px;
        color: #fff;
        margin-top: 46px;
        display: block;
      }
    }
    .center {
      position: absolute;
      left: 0;
      right: 0;
      bottom: -1px;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
  .bottom {
    background: #fff;
    padding-top: 75px;
    box-sizing: border-box;
    p {
      text-align: center;
      &:nth-child(1) {
        font-size: 30px;
        height: 42px;
        line-height: 42px;
        color: #283039;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        display: block;
        margin: 0 auto 7px;
        font-weight: 500;
      }
      &:nth-child(2) {
        font-size: 24px;
        height: 31px;
        line-height: 31px;
        color: #8391a7;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: 0 auto;
      }
    }
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
