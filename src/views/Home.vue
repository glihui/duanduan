<template>
  <div class="home">
    <div class="banner-box">
      <el-carousel 
        trigger="click" 
        height="505px" 
        :autoplay="false"
        @change="changeBanner">
        <el-carousel-item v-for="(item, index) in bannerList" :key="index">
          <div class="banner-img" @click="goDetails(item.id)">
            <img :src="item.img" :class="{'img-scale': bannerIndex===index}"/>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="production-box">
      <h2 class="title">好好拍摄，天天向尚</h2>
      <div class="tit">作品会陆续更新，敬请期待</div>
      <div class="production-list-one">
        <div class="left-box" @click="goDetails(8)">
          <img src="@/assets/shoubiao1.jpg"/>
        </div>
        <div class="right-box">
          <div class="right-box-img" @click="goDetails(1)">
            <img src="@/assets/shiliu1.jpg"/>
          </div>
          <div class="right-box-img" @click="goDetails(5)">
            <img src="@/assets/xiangshui1.jpg"/>
          </div>
          <div class="right-box-img" @click="goDetails(6)">
            <img src="@/assets/xiangshui2.jpg"/>
          </div>
          <div class="right-box-img" @click="goDetails(4)">
            <img src="@/assets/shiliu4.jpg"/>
          </div>
        </div>
      </div>
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
          img: require('@/assets/shiliu2.jpg'),
          id: 2
      },
      {
          img: require('@/assets/xiangshui1.jpg'),
          id: 5
      },
      {
          img: require('@/assets/xiangshui2.jpg'),
          id: 6
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

    goDetails(id: any) {
        this.$router.push({name: 'Details', query: {id: id}});
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
    .production-box{
      padding-bottom: 30px;
      .title{
        text-align: center;
        padding: 100px 0 20px 0;
        font-size: 44.8px;
        color: #965718;
      }
      .tit{
        text-align: center;
        color: #965718;
        padding-bottom: 100px;
        font-size: 16px;
      }
      .production-list-one{
        display: flex;
        justify-content: space-between;
        height: 465px;
        .left-box{
          width: 460px;
          overflow: hidden;
          cursor: pointer;
          img{
            width: 460px;
            height: 465px;
            transform: scale(1);
            transition:all 1s ease-out;
          }
          img:hover{
            transform: scale(1.5);
          }
        }
        .right-box{
          width: 465px;
          height: 220px;
          .right-box-img{
            float: left;
            width: 220px;
            height: 220px;
            overflow: hidden;
            cursor: pointer;
            img{
              width: 220px;
              height: 220px;
              transform: scale(1);
              transition:all 1s ease-out;
            }
            img:hover{
              transform: scale(1.5);
            }
          }
          .right-box-img:nth-child(odd) {
            margin-right: 25px;
          }
          .right-box-img:nth-child(1),.right-box-img:nth-child(2) {
            margin-bottom: 25px;
          }
        }
      }
    }
  }
</style>
