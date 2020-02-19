<template>
  <div class="details">
    <div class="title">
        <div class="title-left">近期的一些美食片子</div>
        <div class="title-right">
            全屏
        </div>
    </div>
    <div class="time">
        October 16,2019
    </div>
    <div class="des">
        近期的一些美食摄影作品
    </div>
    <div class="details-img">
        <img src="@/assets/banner1.png"/>
    </div>
    
  </div>
</template>

<script lang="ts">
import { Component, Provide, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Details extends Vue {
   

    @Provide() productionData: Array<object> = [
        {
            img: require('@/assets/banner1.png'),
            title: '舌尖上的美食',
            type: '美食'
        },
        {
            img: require('@/assets/banner2.png'),
            title: '舌尖上的美食',
            type: '美食'
        },
        {
            img: require('@/assets/banner1.png'),
            title: '舌尖上的美食',
            type: '美食'
        },
        {
            img: require('@/assets/banner2.png'),
            title: '舌尖上的美食',
            type: '美食'
        }
    ]


    mounted() {
      
    }

    

   
}
</script>

<style lang="scss">
  .details {
    width: 100%;
    padding-top: 100px;
    .title{
        display: flex;
        justify-content: space-between;
        .title-left{
            color: #111;
            font-size: 20px;
        }
        .title-right{
            background: #82C8AE;
            color: white;
            height: 35px;
            border-radius: 50px;
            font-size: 12px;
            line-height: 35px;
            cursor: pointer;
            padding: 0 10px;
            min-width: 70px;
            text-align: center;
            transition: all 0.3s;
        }
    }
    .time{
        color: #aaa;
        font-size: 12px;
    }
    .des{
        color: #666;
        font-size:14px;
        line-height: 60px;
    }
    .details-img{
        width: 950px;
        overflow: hidden;
    }
  }
</style>
