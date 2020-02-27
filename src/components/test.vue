<template>
  <div class="title">
    <h1>Using basic interpollation to display data:</h1>
    <p>{{welcome + user.name}} you are {{user.age}}years old, your phone no is {{user.phone}}</p>


  <!-- another way to parse data -->
    <br><h1>Using v-text to display data:</h1>
      <p v-text="test"></p>

      <br><h1>Using v-html to display data:</h1>
      <p v-html="test"></p>

      <br><h1>Using v-if to display data:</h1>
      <p v-if="showUser">True</p>
      <p v-else>False</p>

      <br><h1>Looping through items:</h1>
      <ul>
        <li v-for="item in items">{{item.title}}</li>
      </ul>


  </div>

</template>


<script>
export default {
  name: 'title',
        data(){
          return {
            welcome: 'Welcome ',
            test: '<strong>Test Successsful</strong>',
            user: {
              name: 'Tolu',
              age: 23,
              phone: '08069308561',
            },
            showUser: false,
            items:[
              {title:'item 1'},
              {title:'item 2'},
              {title:'item 3'},
              {title:'item 4'},
            ]
          }
        },
}
</script>


<style scoped>

</style>
