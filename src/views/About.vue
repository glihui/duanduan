<template>
  <div class="about">
    <div class="avatar">
        <img class="avatar-img"/>
    </div>
    <div class="user-name">
      段段
    </div>
    <div class="user-address"> 
      北京 朝阳
    </div>
    <div class="user-des">
      好好拍摄 天天向尚
    </div>
    <div class="call-me" @click="openCallMe">
      联系我
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
  </div>
</template>

<script lang="ts">
import { Component, Provide, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    
  },
})
export default class About extends Vue {
  @Provide() dialogVisible: Boolean = false; 
  openCallMe() {
    this.dialogVisible = true;
  }
}
</script>

<style lang="scss">
  .about {
    width: 100%;
    padding-top: 100px;
    text-align: center;
    .avatar{
      width: 100px;
      height: 100px;
      margin: 0 auto 20px;
      background: red;
      .avatar-img{
        width: 100px;
        height: 100px;
      }
    }
    .user-name{
      color: rgb(51, 51, 51);
      font-size: 16px;
      font-weight: bold;
    }
    .user-address{
      color: rgb(153, 153, 153);
      font-size: 12px;
      margin-top: 8px;
    }
    .user-des{
      width: 100%;
      font-size: 13px;
      color: rgb(51, 51, 51);
      white-space: pre-wrap;
      padding: 30px 20px;
      background: #fff;
      opacity: 0.5;
      margin: 80px 0 0;
    }
    .call-me{
      background-color: #272727;
      padding: 10px 26px;
      color: #fff;
      font-size: 14px;
      letter-spacing: 1px;
      display: inline-block;
      margin-top: 40px;
      opacity: 0.5;
      cursor: pointer;
    }
    .el-dialog-box{
      .weixin-avatar{
        width: 152px;
        height: 152px;
        margin: 0 auto;
        background: red;
      }
      .tit{
        color: #666;
        font-size: 12px;
        margin: 10px auto 0;
        line-height: 21px;
      }
    }
  }
</style>
