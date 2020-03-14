<template>
    <div class="fullscreen">
        <div class="fullscreen-box">
            <el-carousel 
                ref="carousel" 
                trigger="click" 
                indicator-position="none" 
                @change="changeNav" 
                height="100%" 
                direction="vertical"
                :initial-index="currentIndex"
                :autoplay="isAutoplay">
                <el-carousel-item v-for="(item, index) in $store.state.fullScreenData" :key="index">
                    <img :src="item.img"/>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="right-nav" :class="{'right-nav-active': showNav}">
            <div class="right-nav-left">
                <div class="right-arow" @click="isshowNav">
                    <img :class="{'arrow-icon-active':showNav}" class="arrow-icon" src="@/assets/arrow.png"/>
                </div>
            </div>
            <div class="right-nav-right">
                <div class="up-arow" @click="goScroll(1)">
                    <img class="arrow-icon" src="@/assets/arrow.png"/>
                </div>
                <div class="right-nav-img" id="rightNav">
                    <div class="nav-img-item" 
                         v-for="(item, index) in $store.state.fullScreenData" 
                         :key="index"
                         @click="setActiveItem(index)">
                        <img :src="item.img" :class="{'current' : currentIndex === index}"/>
                    </div>
                </div>
                <div class="down-arow" @click="goScroll(2)">
                    <img class="arrow-icon" src="@/assets/arrow.png"/>
                </div>
            </div>
        </div>
        <div class="top-nav">
            <div class="top-nav-box" @click="goPlay">
                <img v-if="!isAutoplay" src="@/assets/play.png"/>
                <img v-if="isAutoplay" src="@/assets/pause.png"/>
            </div>
            <div class="top-nav-box" @click="closeFullscreen">
                <img src="@/assets/close-icon.png"/>
            </div>
            <div class="top-nav-box" @click="playMusic">
                <img v-show="isPlayMusic" src="@/assets/open-music.png"/>
                <img v-show="!isPlayMusic" src="@/assets/close-music.png"/>
            </div>
        </div>
        <audio id="music" src="@/assets/bg_music.mp3" autoplay hidden>
            您的浏览器不支持 audio 标签。
        </audio>
    </div>
</template>

<script lang="ts">
import { Component, Provide, Prop, Vue } from 'vue-property-decorator';
import { exitFullscreen } from '@/util/common';


@Component
export default class Fullscreen extends Vue {
    @Prop() private currentId!: any;
    @Provide() showNav: Boolean = false;
    @Provide() isPlayMusic: Boolean = true;
    @Provide() currentIndex: Number = 0;
    @Provide() isAutoplay: Boolean = true;

    created() {
        for(let i=0; i<this.$store.state.fullScreenData.length; i++) {
            if (this.$store.state.fullScreenData[i].id == this.currentId) {
                console.log('sss',i)
                this.currentIndex = i;
            }
        }
    }
    
    isshowNav() {
        this.showNav = !this.showNav;
    }
    changeNav(index: Number) {
        this.currentIndex = index;
    }
    setActiveItem(index: Number) {
        let carousel:any = this.$refs.carousel;
        carousel.setActiveItem(index);
    }
    goScroll(flag: Number) {
        let ele:any = document.getElementById('rightNav');
        if (flag === 1) {
            ele.scrollTop = ele.scrollTop - ele.offsetHeight;
        } else {
            ele.scrollTop = ele.scrollTop + ele.offsetHeight;
        }
        
    }
    closeFullscreen() {
        exitFullscreen();
        this.$emit('closeFullscreen');
    }
    playMusic() {
        let audio:any = document.getElementById('music'); 
        if(audio!==null){             
            //检测播放是否已暂停.audio.paused 在播放器播放时返回false.
            if(audio.paused) {
                this.isPlayMusic = true;                 
                audio.play();//audio.play();// 这个就是播放  
            }else{
                this.isPlayMusic = false;
                audio.pause();// 这个就是暂停
            }
        } 
    }
    goPlay() {
        this.isAutoplay = !this.isAutoplay;
        let audio:any = document.getElementById('music'); 
        if (audio !== null && audio.paused) {
            this.isPlayMusic = true; 
            audio.play();
        }
    }
}
</script>

<style lang="scss" scoped>
    .fullscreen{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1;
        background: #000;
        .fullscreen-box{
            width: 900px;
            height: 600px;
            position: relative;
            left: 50%;
            top: 50%;
            margin-left: -450px;
            margin-top: -300px;
            overflow: hidden;
            img{
                // width: 100%;
                width: 900px;
                position: relative;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
        }
        .right-nav{
            width: 124px;
            height: 80%;
            position: absolute;
            top: 10%;
            right: -90px;
            display: flex;
            transition: all 0.4s ease-out;
            .arrow-icon{
                display: block;
                width: 13px;
                height: 13px;
                position: relative;
                left: 50%;
                top: 50%;
                margin-left: -6.5px;
                margin-top: -6.5px;
            }
            .right-nav-left{
                width: 30px;
                height: 94px;
                position: relative;
                left: 0;
                top: 50%;
                margin-top: -47px;
                background: #333333;
                border-radius: 5px 0px 0px 5px;
                cursor: pointer;
                .right-arow{
                    width: 100%;
                    height: 100%;
                }
                .arrow-icon-active{
                    transform: rotatey(180deg)
                }
            }
            .right-nav-right{
                width: 90px;
                background: #3a3a3a;
                display: flex;
                flex-direction: column;
                .up-arow, .down-arow{
                    width: 94px;
                    height: 30px;
                    cursor: pointer;
                }
                .up-arow{
                    .arrow-icon{
                        transform: rotatez(90deg)
                    } 
                }
                .down-arow{
                    .arrow-icon{
                        transform: rotatez(270deg)
                    }
                }
                .right-nav-img{
                    flex: 1;
                    overflow: scroll;
                    cursor: pointer;
                    .nav-img-item{
                        height: 72px;
                        width: 72px;
                        margin-left: 11px;
                        display: inline-block;
                        transition: transform 500ms;
                        overflow: hidden;
                        margin-bottom: 6px;
                        img{
                            height: 72px;
                            width: 72px;
                            border: 1px solid #666;
                            opacity: 0.6;
                            box-sizing: border-box;
                        }
                        .current{
                            border-color: #2db7f5;
                            border-width: 3px;
                            opacity: 1;
                        }
                    }  
                }
            }
        }
        .right-nav-active{
            right: 0;
        }
        .top-nav{
            position: absolute;
            left: 0;
            top: 30px;
            z-index: 3;
            width: 100%;
            height: 55px;
            display: flex;
            justify-content: center;
            cursor: pointer;
            .top-nav-box{
                width: 55px;
                height: 55px;
                margin-right: 10px;
                background: rgba(34, 34, 34, 0.6);
                border-radius: 2px;
                img{
                    display: block;
                    width: 30px;
                    height: 30px;
                    margin-top: 12.5px;
                    margin-left: 12.5px;
                }
            }
        }
    }
</style>

<style lang="scss">
    .fullscreen{
        .el-carousel{
            height: 100%;
        }
    }
</style>