<template>
  <div class="home">
    <div class="banner-box">
      <el-carousel 
      trigger="click" 
      height="505px" 
      :autoplay="false"
      @change="changeBanner"
      >
        <el-carousel-item v-for="(item, index) in bannerList" :key="index">
            <div class="banner-img">
              <img :src="item.img" :class="{'img-scale': bannerIndex===index}"/>
            </div>
          </el-carousel-item>
        </el-carousel>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
   @Provide() bannerIndex: Number = -1; 
   @Provide() bannerList: Array<object> = [
      {
          img: require('@/assets/banner1.png'),
      },
      {
          img: require('@/assets/banner2.png'),
      }
    ];

    mounted() {
      setTimeout(() => {
        this.bannerIndex = 0;
      }, 50)
    }

    changeBanner(index: Number) {
      console.log(index);
      this.bannerIndex = index;
    }
}
</script>

<style lang="scss">
  .home {
    width: 100%;
    padding-top: 100px;
    .banner-box{
      .banner-img{
        width: 100%;
        height: 505px;
        img{
          position: relative;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) scale(2);
          transition:all 8s ease-out;
        }
        .img-scale{
          transform: translate(-50%, -50%) scale(1);
        }
      }
    }
  }
</style>
