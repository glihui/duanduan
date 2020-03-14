<template>
  <div class="details">
    <div class="title">
        <div class="title-left">{{currentPro.title}}</div>
        <div class="title-right" @click="goFullscreen">
            全屏
        </div>
    </div>
    <div class="time">
        {{currentPro.created_at}}
    </div>
    <div class="des">
        {{currentPro.body}}
    </div>
    <div class="details-img">
        <img :src="currentPro.img"/>
    </div>
    <full-screen-box :currentId="currentPro.id" v-if="showFullScreen" @closeFullscreen="showFullScreen = false"></full-screen-box>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Prop, Vue } from 'vue-property-decorator';
import { fullScreen } from '@/util/common';
import fullScreenBox from '@/components/FullScreen.vue';
import API from '@/api/api.js';


@Component({
    components: {
        fullScreenBox
    } 
})
export default class Details extends Vue {
   @Provide() showFullScreen:Boolean = false;
   @Provide() currentPro:any = {};

   created() {
       console.log(this.$route.query.id)
       this.getDetails(this.$route.query.id);
   }  

   getDetails(id:any) {
       API.getTopicDetail(id).then((res:any) => {
            if (res.code === 0) {
                this.currentPro = res.data;
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

   goFullscreen() {
       fullScreen();
       this.showFullScreen = true;

        this.getProList();

   }

   getProList() {
        API.getCategoriesTopic(this.currentPro.category_id).then((res:any) => {
            if (res.code === 0) {
                this.$store.commit('setFullScreenData',res.data.data)
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
