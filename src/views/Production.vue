<template>
  <div class="production">
    <div class="title">作品</div>
    <div class="production-tab">
        <div 
            v-for="(item, index) in productionList"
            :key="index"
            class="tab-item"
            :class="{'tab-item-active':tabIndex === index}"
            @click="selectTab(index)">
            {{item.title}}
        </div>
    </div>
    <div class="production-list">
        <div 
            class="production-item"
            v-for="(item, index) in productionData"
            :key="index"
            @click="goDetails">
            <div class="production-img">
                <img class="production-img-box" :src="item.img"/>
            </div>
            <div class="production-title">
                {{item.title}}
            </div>
            <div class="production-type">
                {{item.type}}
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Production extends Vue {
   @Provide() productionList: Array<object> = [
      {
          title: "全部"
      },
      {
          title: "写真"
      },
      {
          title: "儿童"
      },
      {
          title: "美食"
      },
      {
          title: "婚礼"
      },
      {
          title: "商业"
      }
    ];

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

    @Provide() tabIndex:Number = 0;

    mounted() {
      
    }

    selectTab(index: Number) {
        this.tabIndex = index;
    }

    goDetails() {
        this.$router.push({name: 'Details'});
    }

   
}
</script>

<style lang="scss">
  .production {
    width: 100%;
    padding-top: 100px;
    .title{
        color: #444;
        font-size: 26px;
        padding-bottom: 30px;
    }
    .production-tab{
        display: flex;
        margin-bottom: 10px;
        .tab-item{
            width: 58px;
            height: 36px;
            line-height: 36px;
            text-align: center;
            color: #616161;
            cursor: pointer;
        }
        .tab-item-active{
            color: #fff;
            background-color: #232222;

        }
    }
    .production-list{
        .production-item{
            float: left;
            margin: 0 40px 40px 0;
            width: 430px;
            height: 360px;
            overflow: hidden;
            .production-img{
                width: 430px;
                height: 300px;
                overflow: hidden;
                cursor: pointer;
                .production-img-box{
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
                color: #333;
                font-size: 15px;
                line-height: 40px;
            }
            .production-type{
                height: 20px;
                line-height: 20px;
                color: #BABABA;
                font-size: 12px;
            }
        }
    }
  }
</style>
