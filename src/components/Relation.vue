<template>
    <div>
        <div class="relation">
            <div class="relation-item" @click="openPhone">
                <img src="@/assets/phone.png"/>
            </div>
            <div class="relation-item">
                <img src="@/assets/weibo.png"/>
            </div>
            <div class="relation-item" @click="openCallMe">
                <img src="@/assets/weixin.png"/>
            </div>
        </div>
        <el-dialog
            title=""
            :show-close="false"
            :visible.sync="dialogVisible"
            width="30%">
            <div class="el-dialog-box">
                <img class="weixin-avatar" src="@/assets/wechat.jpeg"/>
                <div class="tit">
                    请打开微信<br/>
                    扫一扫 添加我为微信好友
                </div>
            </div>
        </el-dialog>
        <div class="phone-box" :class="{'phone-box-active':isShowPhone}">
            <div class="phone-title">
                联系方式
                <img class="close-phone" src="@/assets/close.png" @click="openPhone"/>
            </div>
            <div class="phone-content">
                Wechat/QQ：397281816
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import {
    Component, Provide, Prop, Vue
} from 'vue-property-decorator';

@Component
export default class Relation extends Vue {
    @Provide() dialogVisible: Boolean = false; 
    @Provide() isShowPhone: Boolean = false; 
    openCallMe() {
        this.dialogVisible = true;
    }
    openPhone() {
        this.isShowPhone = !this.isShowPhone;
    } 
}
</script>
<style lang="scss" scoped>
    .relation{
        position: fixed;
        right: 10px;
        bottom: 40px;
        .relation-item{
            width: 30px;
            height: 30px;
            text-align: center;
            cursor: pointer;
            img{
                width: 16px;
                height: 16px;
                margin-top: 7px;
            }
        }
        .relation-item:nth-child(1){
            background: #444;
        }
        .relation-item:nth-child(2){
            background: #717171;
        }
        .relation-item:nth-child(3){
            background: #82c8af;
        }
        .relation-item:hover{
            background: #82c8af;
        }
    }
    .el-dialog-box{
      text-align: center;  
      .weixin-avatar{
        width: 152px;
        height: 152px;
        margin: 0 auto;
      }
      .tit{
        color: #666;
        font-size: 12px;
        margin: 10px auto 0;
        line-height: 21px;
      }
    }
    .phone-box{
        position: fixed;
        right: -202px;
        bottom: 130px;
        width: 192px;
        height: 100px;
        transition:all 0.5s ease-out;
        .phone-title{
            height: 56px;
            line-height: 56px;
            background: #1D1D1D;
            font-size: 16px;
            color: #fff;
            padding-left: 20px;
            box-sizing: border-box;
            .close-phone{
                display: block;
                width: 12px;
                height: 12px;
                position: absolute;
                right: 20px;
                top: 22px;
                cursor: pointer;
            }
        } 
        .phone-content{
            padding-left: 20px;
            box-sizing: border-box;
            height: 44px;
            line-height: 44px;
            background: #f5f5f5;
            font-size: 12px;    
        }
    }
    .phone-box-active{
        right: 10px;
    }
</style>

