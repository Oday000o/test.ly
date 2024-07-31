<template>
  <Profile/>
</template>

<script>
import Profile from './components/Profile.vue'
export default {
  name: 'App',
  components : {
    Profile
  }
  
}
</script>

<style>
html{
  overflow-x: hidden;
}
#app {
  overflow-x: hidden; 
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  align-content: center;
  background:linear-gradient(to right ,#93b6ce,#e2eef8,#f7fcff,#f7fcff)
}

</style>
