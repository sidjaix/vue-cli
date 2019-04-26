<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent='appQuote'">Quote</button>
        <button @click="selectedComponent='appAuthor'">Author</button>
        <button @click="selectedComponent='appNew'">New</button>
        <button @click="selectedComponent='appUser'">user</button>
        <button @click="selectedComponent='basicForm'">Basic Form</button>
        <button @click="selectedComponent='customDirective'">Custom Directive</button>
        <button @click="selectedComponent='filterSample'">Filter</button>
        <button @click="selectedComponent='event'">Event</button>
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
// Custom Directive
import CustomDirective from "./components/directives/CustomDirective.vue";
// Filter
import Filter from "./components/filter_and_mixins/Filter.vue";

import Event from "./components/eventManagement/Event.vue";

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
    basicForm: BasicForm,
    customDirective: CustomDirective,
    filterSample: Filter,
    event: Event
  }
};
</script>

<style scoped>
/* it will not work */
h2 {
  color: red;
}
</style>
