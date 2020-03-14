<template>
  <div class="production">
    <div class="title">作品</div>
    <div class="production-tab">
        <div 
            v-for="(item, index) in productionList"
            :key="index"
            class="tab-item"
            :class="{'tab-item-active':tabIndex === index}"
            @click="selectTab(index, item.id)">
            {{item.title}}
        </div>
    </div>
    <div class="production-list" id="productionList">
        <div 
            class="production-item"
            v-for="(item, index) in productionData"
            :key="index"
            @click="goDetails(item.id)">
            <div class="production-img">
                <img class="production-img-box" :src="item.img"/>
            </div>
            <div class="production-title">
                {{item.title}}
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Prop, Vue } from 'vue-property-decorator';
import API from '@/api/api.js';


@Component
export default class Production extends Vue {
   @Provide() selectCategoryId:Number = 2;
   @Provide() productionList: Array<object> = [
      {
          title: "商业摄影",
          id: 2
      },
      {
          title: "活动摄影",
          id: 3
      },
      {
          title: "其它",
          id: 4
      }
    ];

    @Provide() productionData: Array<object> = []

    @Provide() tabIndex:Number = 0;

    created() {
        
    }

    mounted() {
      this.getProList();
    }

    getProList() {
        const loading = this.$loading({
          target: "#productionList",  
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        API.getCategoriesTopic(this.selectCategoryId).then((res:any) => {
            loading.close();
            if (res.code === 0) {
                this.productionData = res.data.data;
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

    selectTab(index: Number, id: Number) {
        this.tabIndex = index;
        this.selectCategoryId = id;
        this.getProList();
    }

    goDetails(id:any) {
        this.$router.push({name: 'Details', query: {id: id}});
    }

   
}
</script>

<style lang="scss">
  .production {
    width: 100%;
    padding-top: 100px;
    .title{
        color: #965718;
        font-size: 26px;
        padding-bottom: 30px;
    }
    .production-tab{
        display: flex;
        margin-bottom: 10px;
        .tab-item{
            padding: 0 20px;
            height: 36px;
            line-height: 36px;
            text-align: center;
            color: #965718;
            cursor: pointer;
        }
        .tab-item-active{
            color: #fff;
            background-color: #000;
            opacity: 0.5;
        }
    }
    .production-list{
        .production-item{
            float: left;
            margin: 0 20px 20px 0;
            width: 450px;
            // height: 300px;
            overflow: hidden;
            .production-img{
                width: 450px;
                height: 300px;
                overflow: hidden;
                cursor: pointer;
                .production-img-box{
                    width: 450px;
                    height: 300px;
                    position: relative;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%) scale(1);
                    transition:all 5s ease-out;
                }
                .production-img-box:hover{
                    transform: translate(-50%, -50%) scale(1.5);
                }
            }
            .production-title{
                color: #965718;
                font-size: 15px;
                line-height: 40px;
            }
            .production-type{
                height: 20px;
                line-height: 20px;
                color: #965718;
                font-size: 12px;
            }
        }
    }
    .el-icon-loading{
        font-size: 60px;
    }
    .el-loading-spinner .el-loading-text{
        font-size: 34px;
    }
  }
</style>
