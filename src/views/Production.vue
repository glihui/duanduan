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
            @click="goDetails(item.id)">
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
          title: "商业摄影"
      },
      {
          title: "活动摄影"
      },
      {
          title: "其它"
      }
    ];

    @Provide() productionData: Array<object> = [
        {
            id: 5,
            img: require('@/assets/xiangshui1.jpg'),
            title: '舌尖上的美食',
            type: '美食'
        },
        {
            id: 2,
            img: require('@/assets/shiliu2.jpg'),
            title: '舌尖上的美食',
            type: '美食'
        },
        {
            id: 6,
            img: require('@/assets/xiangshui2.jpg'),
            title: '舌尖上的美食',
            type: '美食'
        },
        {
            id: 7,
            img: require('@/assets/xiangshui3.jpg'),
            title: '舌尖上的美食',
            type: '美食'
        },
        {
            id: 2,
            img: require('@/assets/shiliu2.jpg'),
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
            height: 300px;
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
  }
</style>
