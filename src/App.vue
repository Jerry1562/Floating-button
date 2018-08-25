<template>
  <div id="app" v-on:mousemove="move" v-on:mouseup="up">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <floating-menu/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FloatingMenu from './components/menu.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
    FloatingMenu
  },
  methods:{
    move(e){
      e.preventDefault();
      if(this.$store.state.isDown){
      this.$store.commit('update',{
        x:e.clientX,
        y:e.clientY
      });
      }
    },
    up(){
      this.$store.commit('isDown',{
        isDown:false
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
