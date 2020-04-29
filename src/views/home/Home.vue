<template>
  <div class="home">
    <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
    <Scroll class="content" ref="scroll" :probeType="3" @positions="positions" :pullUpLoads="true" @pullUpLoad="pullUpLoad">
      <HomeSwiper :swiperbanners="banners"></HomeSwiper>
      <HomeRecommendView :RecommendTitle="recommend"></HomeRecommendView>
      <HomeRecommendBg></HomeRecommendBg>
      <tab-control :titles="['流行','新款','精选']"
                   @tabClick="tabClick"
                   class="tab-control" v-show="isTabFixed"></tab-control>
      <goods-list :goodsList="showGoods"></goods-list>
    </Scroll>
    <BackTop @click.native="backClick" v-show="isshow"></BackTop>
  </div>

</template>

<script>
  //import {debouce} from "common/utils"
  //import {itemListenerMixin, backTopMixin} from "common/mixin"
  import goodsList from 'components/content/goods/GoodList'
  import Scroll from 'components/common/scroll/Scroll'
  //import NavBar from 'components/common/navbar/Navbar'
  import {getHomeData,getHomeGoods} from 'network/home'
  import TabControl from 'components/content/tabControl/TabControl'
  import NavBar from '../../components/common/navbar/Navbar'
  import HomeSwiper from './childComps/HomeSwiper'
  import  HomeRecommendView from './childComps/HomeRecommendView'
  import HomeRecommendBg from './childComps/HomeRecommendBg'
  import BackTop from '../../components/content/backTop/BackTop'
  export default {
    name: "Home",
    data(){
      return{
        banners:[],
        dKeyword:[],
        keywords:[],
        recommend:[],
        imgurls:[],
        currentType: 'pop',
        tabOffsetTop: 0,
        isTabFixed: true,
        saveY: 0,
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},

        },
        isshow:false
      }
    },
   /* mixins: [itemListenerMixin, backTopMixin],*/
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      HomeRecommendBg,
      TabControl,
      goodsList,
      Scroll,
      BackTop

    },
    methods:{
      /*事件监听*/
      tabClick(index) {
        switch(index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        /*this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;*/
      },
      backClick(){
        this.$refs.scroll.scrollTo(0,0,1000)//接受scroll组件中的scroll并将其坐标赋值为(0,0,1000)1000为毫秒，回到顶部需要1秒钟
      },
      positions(position){
        //console.log(position.y);
        //console.log((position.y > -3000));
        this.isshow=position.y<-3000
      },
      pullUpLoad(){
        console.log(this.currentType);
        this.getHomeGoodsmethods(this.currentType)
        this.$refs.scroll.refreshs()
      },


      /*网络请求*/
      getHomeDatamethods(){
        getHomeData().then(res=>{
          this.banners=res.data.data.banner.list
          //console.log(res.data.data);
          this.recommend=res.data.data.recommend.list
          /*this.imgurls=res.data.data.banner.list.image*/
        }).catch(err=>{
          console.log(err);
        })
      },
      getHomeGoodsmethods(type){
        //console.log(this.goods[type]);
        const page=this.goods[type].page+1
        //console.log(page);
        /*getHomeGoods('sell',1).then(res=>{
          console.log(res);
        })*/
        getHomeGoods(type,page).then(res=>{
          //console.log(res);
          this.goods[type].list.push(...res.data.data.list)//这里res是个局部变量，用完会被回收，这里我们要想办法讲res保存到goos里

          this.goods[type].page+=1
          this.$refs.scroll.finishPullups()
        }).catch(err=>{
          console.log(err);})

      }
    },
    created() {
      this.getHomeDatamethods()
      this.getHomeGoodsmethods('pop')
      this.getHomeGoodsmethods('new')
      this.getHomeGoodsmethods('sell')
    },
    computed:{
      showGoods(){
         return this.goods[this.currentType].list
      }
    }

  }
</script>

<style scoped>
  .home {
    height: 100vh;
     /*!/padding-top: 44px;*/
    /*position: fixed;*/
    /*!/position: relative;*/
  }
/* .home {
   height: 100vh;
   !* padding-top: 44px; *!
   position: relative;
 }*/
 .home-nav{
  background-color: var(--color-tint);
  color: white;
   position: fixed;
   left: 0;
   right: 0;
   top: 0;
   z-index: 9;
}

.tab-control {
  /*position: sticky;
  background-color: #fff;
  z-index: 9;*/
  /*top: 44px;*/
}
  .content{
    height:calc(100% - 93px);
    background-color: white;
    overflow:hidden;
    margin-top:44px ;
    /*overflow: hidden;*/

    /* 超出部分自动隐藏，不需另外设置 */
    /* overflow-y: scroll; */
  }
  /*.content {
    !* height: 300px; *!
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }*/
</style>
