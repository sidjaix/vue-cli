<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <!-- <app-user></app-user> -->

        <button @click="selectedComponent='appQuote'">Quote</button>
        <button @click="selectedComponent='appAuthor'">Author</button>
        <button @click="selectedComponent='appNew'">New</button>
        <p>Selected Component: {{selectedComponent}}</p>

        <!-- keep Alive the Component -->
        <keep-alive>
          <!-- Dynamic Component -->
          <component :is="selectedComponent">
            <p>Default Content</p>
          </component>
        </keep-alive>
        <!-- <app-quote> -->
        <!-- Passing Content with Slots, and multiple slots-->
        <!-- <h2 slot="title">{{quoteTitle}}</h2>
        <p>A WonderFul Quote</p>-->
        <!-- </app-quote> -->
      </div>
    </div>
  </div>
</template>

<script>
// import User from "./components/user/User.vue"
// import BootstrapVue from "bootstrap-vue"
// export default {
//   components: {
//     appUser: User,
//   }
// };

import Quote from "../src/components/Quote.vue";
import Author from "../src/components/author/Author.vue";
import New from "../src/components/author/New.vue";
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
    appNew: New
  }
};
</script>

<style scoped>
/* it will not work */
h2 {
  color: red;
}
</style>
