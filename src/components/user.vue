<template>
  <div class="user">
    <h1>Users</h1>
    <div v-for="user in users">
      <div>
        <input type="checkbox" class="toggle" v-model="user.contacted" />
        <span :class="{contacted: user.contacted}">
          {{user.name}}: {{user.email}}
          <button v-on:click="deleteUser(user)">x</button>
        </span>
      </div>
      <br />
    </div>
    <form v-on:submit="addNew">
      <input type="text" v-model="addName" placeholder="Enter Name" />
      <input type="text" v-model="addEmail" placeholder="Enter Email" />
      <br />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>


<script>
export default {
  name: "user",
  data() {
    return {
      users: []
    };
  },
  methods: {
    addNew: function(e) {
      this.users.push({
        name: this.addName,
        email: this.addEmail,
        contacted: false
      });
      e.preventDefault();
    },
    deleteUser: function(user) {
      this.users.splice(this.users.indexOf(user), 1);
    }
  },
  created: function(){
    this.$http.get('https://jsonplaceholder.typicode.com/users')
    .then(function(resp){
      this.users = resp.data
    });
  },
  computed: {},
  props: {}
};
</script>


<style scoped>
.contacted {
  text-decoration: line-through;
  color: red;
}
</style>
