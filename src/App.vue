<template>
  <div id="app">
    <div id="nav">
      <HomeTab/>
    </div>
    <div class="view-content" id="viewContent">
      <router-view/>
    </div>
    <Relation></Relation>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeTab from '@/components/HomeTab.vue';
import Relation from '@/components/Relation.vue';


@Component({
  components: {
    HomeTab,
    Relation
  },
})
export default class App extends Vue {}
</script>


<style lang="scss">
body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select{margin:0;padding:0}
body{font:12px"宋体","Arial Narrow",HELVETICA;-webkit-text-size-adjust:100%;}
a{text-decoration:none}
a:hover{text-decoration:none}
em{font-style:normal}
ul li{list-style:none}
img{border:0;vertical-align:middle}
table{border-collapse:collapse;border-spacing:0}
p{word-wrap:break-word}
html{
  background: url('./assets/main.jpg');
  background-size:cover;
}
html, body{
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  width: 1200px;
  height: 100%;
  padding: 0 55px;
  margin:0 auto;
  .view-content{
    flex: 1;
    overflow: scroll;
  }
  .view-content::-webkit-scrollbar{
    display: none;
  }
}
</style>

