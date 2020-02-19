<template>
  <div id="app">
    <div id="nav">
      <HomeTab/>
    </div>
    <div class="view-content">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeTab from '@/components/HomeTab.vue';


@Component({
  components: {
    HomeTab
  },
})
export default class App extends Vue {}
</script>


<style lang="scss">
body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select{margin:0;padding:0}
body{font:12px"宋体","Arial Narrow",HELVETICA;background:#fff;-webkit-text-size-adjust:100%;}
a{text-decoration:none}
a:hover{text-decoration:none}
em{font-style:normal}
ul li{list-style:none}
img{border:0;vertical-align:middle}
table{border-collapse:collapse;border-spacing:0}
p{word-wrap:break-word}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  width: 1200px;
  padding: 0 55px;
  margin:0 auto;
  background-color: #fff;
  .view-content{
    flex: 1;
  }
}
</style>

