<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <!-- <test msg="I just change the msg prop from my App.vue"></test> -->
    <!-- ++++++++++++++
    This is from User Component
    ++++++++++++++ -->
    <user></user>
    <!-- ++++++++++++++
    The above from User Component
    ++++++++++++++ -->

    <br>
    <br>
    <br>
    <!-- ++++++++++++++
    This is from Test Component
    ++++++++++++++
    <test></test>
    ++++++++++++++
    The above from Test Component
    ++++++++++++++ -->
  </div>
</template>

<script>
import Test from './components/test'
import User from './components/user'


export default {
  name: 'App',
  components:{
    Test,
    User,
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
