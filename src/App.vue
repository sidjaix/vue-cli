<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-user></app-user>
      </div>
    </div>
  </div>
</template>

<script>
import User from "./components/user/User.vue"
import BootstrapVue from "bootstrap-vue"
export default {
  components: {
    appUser: User,
  }
};
</script>

<style>
</style>
