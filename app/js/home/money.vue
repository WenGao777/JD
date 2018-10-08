<template>
   <Panel title="- 理财精选 -" :class="$style.panel">
       <section :class="$style.content">
           <dl :class="$style.item" v-for="item in items" :key="item.title">
               <dt>{{item.title}}<span>{{ item.sub }}</span></dt>
               <dd>{{item.rate}}</dd>
               <dd>{{item.text}}</dd>
           </dl>
       </section>
   </Panel>
</template>

<script type="text/ecmascript-6">
import Panel from '../core/panel.vue'
export default {
   name: '',
   data() {
       return{
           items:[{
           title:"长乐盈",
           sub:"180天可质押",
           rate:"5.80％",
           text:"近1年历史年化投资回报率"
       },{
           title:"京智0号",
           sub:"大数据赋能",
           rate:"6.00％",
           text:"近1月历史年化投资回报率"
       },{
           title:"建信养老飞益鑫",
           sub:"",
           rate:"4.57％",
           text:"近7日年化收益"
       },{
           title:"基金小白",
           sub:"超短期",
           rate:"4.50％",
           text:"7日年化收益率"
       }]
       }
   },
  components: {
      Panel,
  }
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel{
    @include panel;
    .content{
        @include flex(row);
        justify-content: space-around;
        box-sizing: border-box;
        &:after{
            content: " ";
            display: block;
            width: 100%;
            height: 0;
            box-sizing: border-box;
            border-bottom: 1px solid #ddd;
            position: relative;
            top: -218px;
        }
        .item{
            position: relative;
            box-sizing: border-box;
            width: 50%;
            &:after{
                //竖着的线，这样的话会有两天，配合后面，仅显示中间那条
                content: " ";
                width: 1px;
                height: 136px;
                display: block;
                position: absolute;
                top: 50%;
                right: 0;
                margin-top: -68px;
                border-right:1px solid #eee;
            }
            &:nth-child(2n){
                //最后重叠那条线不显示
                &:after{
                    display: none;
                }
            }
            &:nth-child(3){
                //第三个不显示
                span{
                    display: none;
                }
            }
            padding: 36px 0px 36px 32px;
            dt{
                font-family: PingFangSC-Medium;
                font-size: 30px;
                line-height: 30px;
                color: #333;
                span{
                    font-size: 22px;
                    font-family: PingFangSC-Medium;
                    color: #ff5155;
                    border: 1px solid #ff5155;
                    padding: 0 8px;
                    vertical-align:inherit;
                    text-align: center;
                    margin-left: 2px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
            }
            dd{
                &:nth-child(2){
                        font-size: 44px;
                        font-weight: 400;
                        height: 58px;
                        line-height: 58px;
                        color: #FF5155;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        margin-top: 20px;
                }
                &:nth-child(3){
                    font-size: 24px;
                    height: 34px;
                    line-height: 34px;
                    color: #999;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
            }
        }
    }
}
</style>
