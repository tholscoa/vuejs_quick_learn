<template>
  <div class="title">
    <h4>Using basic interpollation to display data:</h4>
    <p>{{mynameis + user.fname +" you are. " +" Your phone no is "+ user.phone}}</p>


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
      <input type="text" v-model="user.fname">

      <h4>Using events:</h4>
      <button v-on:click="justclicked">Click me!</button><br>
      <button v-on:click="clickedwithparams('THANK YOU')">Click me with passed params THANK YOU!</button><br>
      <input type="text" v-on:keyup="pressed" placeholder="just alert I press my key"><br>
      <input type="text" v-on:keyup="pressedwithvalue" placeholder="alert what I entered"><br>
      <input type="text" v-on:keyup.enter="pressedEnter" v-on:keyup.delete="pressedDel" placeholder="alert for functional keys"><br>

      <label>To compute two or more values(using first name and last name as example):</label><br>
      <label>{{fullname}}</label>

      <h1>{{msg}}</h1>


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
              fname: 'Tolu',
              mname: 'Isaac',
              phone: '08069308561',
            },
            showUser: false,
            items:[
              {title:'item 1'},
              {title:'item 2'}
            ]
          }
        },
        methods:{
          justclicked: function(){
            alert("You just clicked me!")
          },
          clickedwithparams: function(thanks){
            alert(thanks)
          },
          pressed:function(){
            alert("you just pressed a key")
          },
          pressedwithvalue: function(e){
            alert("You just pressed "+e.target.value)
          },
          pressedDel: function(){
            alert("You pressed Del")
          },
          pressedEnter: function(){
            alert("You pressed Enter")
          }
        },
        computed: {
          fullname: function(){
            return this.user.fname + " " + this.user.mname;
          }
        },
        props: {
          msg: {
            type: String,
            default: 'default test'
          }
        }
}
</script>


<style scoped>

</style>
