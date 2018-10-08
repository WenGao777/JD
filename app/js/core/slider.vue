<template>
<!--允许自定义类名，绑定的方式 -->
    <section :class="cname">
        <!--options 官方指定的传参方式-->
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <swiper-slide v-for="item in items" :key="item.href">
                <router-link :to="{name:item.href}">
                    <img :src="item.src" alt="">
                </router-link>
            </swiper-slide>
            <!--轮播图下面的小点点 -->
            <div class="swiper-pagination" v-if="options.pagination" slot="pagination"/>
        </swiper>
    </section>
</template>
<script>
//vue-awesome-swiper 插件的引入，查阅文档
import{ swiper , swiperSlide }from "vue-awesome-swiper"
export default{
components:{
    swiper,
    swiperSlide,
},
props:{
    cname:{
        type:String,
        default:"",
    },
    options:{
        type:Object,
        default(){
            //default:function(){...}
            return{
                //默认自己滚动
                autoplay:true,
                //是否循环
                loop:true,
                //指示器， 下面的'...'
                pagination:{
                    el:".swiper-pagination",
                },
                //--------前面三个是官方指定的
                //下一个点击的事件
                notNextTick:false,
            }
        }
    },
    items:{
        type:Array,
        default(){
            return []
        }
    }
},
} 
</script>
<style lang="scss">
//直接引入官方的样式
@import"~swiper/dist/css/swiper.css";
</style>
