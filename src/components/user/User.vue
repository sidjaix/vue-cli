<template>
  <div class="coponent">
    <h1>The User Component</h1>
    <p>I am an User ({{name}})!</p>
    <button @click="changeName">Change Name</button>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-details :myName="name" @ChangedName="name=$event" :userAge="age"></app-user-details>
      </div>

      <div class="col-xs-12 col-sm-6">
        <app-user-edit :userAge="age" @changedAge="age=$event"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetails from "./UserDetails.vue";
import UserEdit from "./UserEdit.vue";
export default {
  data: function() {
    return { name: "GGK", age: 26 };
  },
  methods: {
    changeName() {
      this.name = "Sid";
    }
  },
  components: {
    appUserDetails: UserDetails,
    appUserEdit: UserEdit
  }
};
</script>

<style>
div {
  background-color: lightblue;
}
</style>


