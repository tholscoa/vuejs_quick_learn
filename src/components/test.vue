<template>
  <div class="title">
    <h4>Using basic interpollation to display data:</h4>
    <p>{{mynameis + user.name +" you are. " +" Your phone no is "+ user.phone}}</p>


  <!-- another way to parse data -->
    <h4>Using v-text to display data:</h4>
      <p v-text="test"></p>

      <h4>Using v-html to display data:</h4>
      <p v-html="test"></p>

      <h4>Using v-if to display data:</h4>
      <p v-if="showUser">True</p>
      <p v-else>False</p>

      <h4>Looping through items:</h4>
      <ul>
        <li v-for="item in items">{{item.title}}</li>
      </ul>


      <h4>Using v-model to change value:</h4>
      <input type="text" v-model="user.name">




  </div>

</template>


<script>
export default {
  name: 'title',
        data(){
          return {
            mynameis: 'My name is ',
            test: '<strong>Test Successsful</strong>',
            user: {
              name: 'Tolu',
              age: 23,
              phone: '08069308561',
            },
            showUser: false,
            items:[
              {title:'item 1'},
              {title:'item 2'}
            ]
          }
        },
}
</script>


<style scoped>

</style>
