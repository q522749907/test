<template>
  <div class="Category" ref="category">
    <ul class="content">
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
      <li>分页目录</li>
    </ul>
  </div>
</template>

<script>
  import BSCR from 'better-scroll'
  export default {
    name: "Category",
    data() {
      return {
        scroll: null
      }
    },
    created() {

    },
    //组件挂载完之后使用
    mounted() {
      //默认情况下better-scroll不实时监听滚动位置
      //probe 侦测
      //0.1都是不侦测实时的位置
      //2:手指滚动过程侦测，手指离开后就不侦测
      //3：只要滚动就侦测
      this.scroll=new BSCR('.Category',{
        probeType:1,
        pullUpLoad:true
      })
      this.scroll.on('scroll',(position)=>{
        //console.log(position);
      })
      this.scroll.on('pullingUp',()=>{
        console.log('上拉加载更多');
        setTimeout(function () {
          console.log('上拉加载更多');
        },1000)
      })
    }

  }
</script>

<style scoped>
  .Category {
    height: 300px;
    background-color: pink;
    overflow:hidden;
    /*overflow: hidden;*/

    /* 超出部分自动隐藏，不需另外设置 */
    /* overflow-y: scroll; */


  }
</style>
