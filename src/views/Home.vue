<template>
  <div class="home">
    <div class="banner-box">
      <el-carousel 
        trigger="click" 
        height="505px" 
        :autoplay="false"
        @change="changeBanner">
        <el-carousel-item v-for="(item, index) in bannerList" :key="index">
          <div class="banner-img" @click="goJump(item)">
            <img :src="item.img_url" :class="{'img-scale': bannerIndex===index}"/>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="production-box">
      <h2 class="title">{{$store.state.settingData.title}}</h2>
      <div class="tit">{{$store.state.settingData.subTitle}}</div>
      <div class="production-list">
        <div class="right-box-img"
         v-for="item in proList"
         :key="item.id"
         @click="goDetails(item.id)">
          <img :src="item.img"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Prop, Vue } from 'vue-property-decorator';
import API from '@/api/api.js';


@Component
export default class Home extends Vue {
  
   @Provide() bannerIndex: Number = -1; 
   @Provide() bannerList: Array<object> = [];
   @Provide() proList: Array<object> = [];

    created() {
      this.getBannerList();
      this.getHomePro();
    }

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

    goJump(item:any) {
      window.open(item.link);
    }

    getBannerList() {
        API.getBanners().then((res:any) => {
            if (res.code === 0) {
                this.bannerList = res.data.data;
            } else {
                this.$message({
                    message: res.message,
                    type: 'error'
                });
            }    
        }).catch((error:any) => {
            console.log(error.message);
            this.$message.error(error.message);
        });
    }

    getHomePro() {
      API.getCategoriesTopic(1).then((res:any) => {
            if (res.code === 0) {
                this.proList = res.data.data;
               
            } else {
                this.$message({
                    message: res.message,
                    type: 'error'
                });
            }    
        }).catch((error:any) => {
            console.log(error.message);
            this.$message.error(error.message);
        });
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
      .production-list{
        height: 465px;
        .right-box-img{
          float: left;
          width: 300px;
          height: 300px;
          overflow: hidden;
          margin-right: 25px;
          margin-bottom: 25px;
          cursor: pointer;
          img{
            width: 300px;
            height: 300px;
            transform: scale(1);
            transition:all 1s ease-out;
          }
          img:hover{
            transform: scale(1.5);
          }
        }
        .right-box-img:nth-child(3n) {
          margin-right: 0px;
        }
      }
    }
  }
</style>
