<template>
  <div class="HomeRecommendView">
    <div v-for="titles in RecommendTitle" class="recommend-item">
      <a :href="titles.link">
        <img :src="titles.image"><br>
        {{titles.title}}
      </a>
    </div>


  </div>
</template>

<script>
  export default {
    name: "HomeRecommendView",
    props:{
      RecommendTitle:Array
    },
  }
</script>

<style scoped>
.HomeRecommendView{
  display: flex;
  width: 100%;
  font-size: 12px;
  text-align: center;
  padding: 15px 0 30px;
  border-bottom: 8px solid #f6f6f6;
}
.recommend-item{
  flex: 1;
}
.recommend-item img {
  width: 65px;
  height: 65px;
  margin-bottom: 10px;
}
</style>
