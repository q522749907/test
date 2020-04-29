<template>
  <div class="goods">

      <good-list-item v-for="good in goodsList" :goodItem="good"></good-list-item>

  </div>
</template>

<script>
  import  GoodListItem from './GoodListItem'
  export default {
    name: "GoodList",
    components:{
      GoodListItem
    },
    props: {
      goodsList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods:{

    }
  }
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
