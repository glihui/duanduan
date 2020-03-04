<template>
    <div class="tab_box">
        <div class="author" @click="jumpToPage('Home')">
            <img src="@/assets/logo-icon.png"/>
        </div>
        <div class="author-sub">
           
        </div>
        <div class="tab-list">
            <div 
                class="tab-item"
                :class="{'tab-item-active':currentRoute === item.path}"
                v-for="(item, index) in tabList" 
                :key="index"
                @click="jumpToPage(item.path)">
                {{item.title}}
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import {
    Component, Provide, Prop, Vue
} from 'vue-property-decorator';

@Component
export default class HomeTab extends Vue {
    
    @Provide() tabList: Array<object> = [
      {
          title: '首页',
          path: 'Home'
      },
      {
          title: '作品',
          path: 'Production'
      },
      {
          title: '关于',
          path: 'About'
      }
    ];
    created() {
        console.log('---',this.$route)
    }
    jumpToPage(value: string) {
      if (this.$route.path != value) {
          this.$router.push({name:value});
      }
    }

    get currentRoute() {
        let currentName = this.$route.name;
        return currentName;
    }
}
</script>
<style lang="scss" scoped>
    .tab_box{
        padding: 100px 30px 0 0;
        .author{
            font-size: 20px;
            color: #965718;
            padding-top: 20px;
            img {
                width: 100px;
            }
        }
        .author-sub{
            font-size: 10px;
            color: #965718;
            padding-bottom: 30px;
        }
        .tab-list{
            width: 220px;
            .tab-item{
                height: 42px;
                width: 220px;
                text-align: left;
                line-height: 42px;
                color: #965718;
                font-size: 14px;
                padding-left: 25px;
                box-sizing: border-box;
                cursor: pointer;
            }
            .tab-item-active{
                background-color: #000;
                opacity: 0.5;
                color: #fff;
            }
            .tab-item:hover{
                background-color: #000;
                opacity: 0.5;
                color: #fff;
            }
        }
    }
</style>

