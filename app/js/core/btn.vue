<template>
    <div :class="[btnClass,cname]">
        <slot/>
    </div>
</template>
<script>
   export default{
       props:{//属性传递
           cname:{//自定义类名，当btn样式不能满足的时候，用cname的样式去覆盖
               type:String,
               default:"",
           },
       },
       data(){
           return{
               btnClass:"btn",//默认btn，给于默认样式
           }
        },
   } 
</script>

<style lang="scss">
@import "../../css/element.scss";
.btn{
    @include btn;
}
</style>
