<template>
  <div class="details">
    <div class="title">
        <div class="title-left">{{currentPro.title}}</div>
        <div class="title-right" @click="goFullscreen">
            全屏
        </div>
    </div>
    <div class="time">
        {{currentPro.time}}
    </div>
    <div class="des">
        {{currentPro.des}}
    </div>
    <div class="details-img">
        <img :src="currentPro.img"/>
    </div>
    <full-screen-box v-if="showFullScreen" @closeFullscreen="showFullScreen = false"></full-screen-box>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Prop, Vue } from 'vue-property-decorator';
import { fullScreen } from '@/util/common';
import fullScreenBox from '@/components/FullScreen.vue';
import { productions } from '@/util/mock';

@Component({
    components: {
        fullScreenBox
    } 
})
export default class Details extends Vue {
   @Provide() showFullScreen:Boolean = false;
   @Provide() currentPro:Object = {};

   created() {
       console.log(this.$route.query.id)
       productions.map((item: any) => {
           if(this.$route.query.id == item.id) {
               this.currentPro = item;
           }
       })
   }  

   goFullscreen() {
       fullScreen();
       this.showFullScreen = true;
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
            color: #965718;
            font-size: 20px;
        }
        .title-right{
            background: #965718;
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
        color: #965718;
        font-size: 12px;
        padding-bottom: 10px;
    }
    .des{
        color: #965718;
        font-size:14px;
        line-height: 60px;
    }
    .details-img{
        width: 950px;
        overflow: hidden;
        margin-bottom: 20px;
        img{
            width: 950px;
        }
    }
  }
</style>
