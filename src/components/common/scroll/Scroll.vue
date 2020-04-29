<template>
  <div class="wrapper" ref="wrapper">
    <div class="content"><slot></slot></div>
  </div>
</template>

<script>
  import BSCR from 'better-scroll'
  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null  //属性中有个scrollTo（x，y,time）横纵坐标，和时间
      }
    },
    props:{
      probeTypes:{
        type:Number,
        default:3
      },
      pullUpLoads:{
        type:Boolean,
        default:false
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
      this.scroll=new BSCR(this.$refs.wrapper,{
        probeType:this.probeTypes,
        pullUpLoad:this.pullUpLoads,
        click:true
      })
      this.scroll.on('scroll',(position)=>{
        //console.log(position);
        this.$emit("positions",position)
      })
      this.scroll.on('pullingUp',()=>{

        this.$emit("pullUpLoad")
      })
    },
    methods:{
      scrollTo(x,y,time){
        this.scroll.scrollTo(x,y,time)
      },
      finishPullups(){
        this.scroll.finishPullUp()
      },
      refreshs(){
        this.scroll.refresh()//刷新需要滚动的高度
      }
    }
  }
</script>

<style scoped>

</style>
