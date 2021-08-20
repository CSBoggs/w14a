<template>
  <div>
    <JokeViewer/>
  </div>
</template>

<script>
import JokeViewer from './components/JokeViewer.vue'
  export default {
    name: "App",
    components: {
      JokeViewer
    },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
