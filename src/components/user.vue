<template>
  <div class="user">
    <h1>Users</h1>
    <div v-for="user in users">
      <div>

        {{user.name}}: {{user.email}}

        <button v-on:click="deleteUser(user)">X</button>
      </div>
      <br>
    </div>
    <form v-on:submit="addNew">
      <input type="text" v-model="addName" placeholder="Enter Name">
      <input type="text" v-model="addEmail" placeholder="Enter Email"><br>
      <input type="submit" value="Submit">

    </form>

  </div>
</template>


<script>
export default {
  name: "user",
  data() {
    return {
      users: [
        {
          name: 'Tolu',
          email: 'tholscoa61@yahoo.com'
        },
        {
          name: 'isaac',
          email: 'akinnuoye@yahoo.com'
        }
      ]
    };
  },
  methods: {
    addNew: function(e){
      this.users.push({
        name: this.addName,
        email: this.addEmail
      });
      e.preventDefault();
    },
    deleteUser: function(user){
      this.users.splice(this.users.indexOf(user), 1)
}
  },
  computed: {},
  props: {}
};
</script>


<style scoped>
</style>
