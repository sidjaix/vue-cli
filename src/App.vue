<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent='appQuote'">Quote</button>
        <button @click="selectedComponent='appAuthor'">Author</button>
        <button @click="selectedComponent='appNew'">New</button>
        <button @click="selectedComponent='appUser'">user</button>
        <button @click="selectedComponent='basicForm'">Basic Form</button>
        <p>{{selectedComponent}}</p>

        <!-- keep Alive the Component -->
        <keep-alive>
          <!-- Dynamic Component -->
          <component :is="selectedComponent"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import User from "./components/user/User.vue";
import Quote from "../src/components/Quote.vue";
import Author from "../src/components/author/Author.vue";
import New from "../src/components/author/New.vue";
//Basic input form binding
import BasicForm from "../src/components/forms/BasicForm.vue";


export default {
  data: function() {
    return {
      quoteTitle: "The Quote",
      selectedComponent: "appQuote"
    };
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New,
    appUser: User,
    basicForm: BasicForm
  }
};
</script>

<style scoped>
/* it will not work */
h2 {
  color: red;
}
</style>
