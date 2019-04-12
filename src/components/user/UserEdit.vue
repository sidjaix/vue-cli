<template>
  <div class="component">
    <h3>You can edit the user details here.</h3>
    <p>Edit me!</p>
    <p>User Age: {{userAge}}</p>
    <button @click="editAge">Edit Age</button>
  </div>
</template>

<script>
import { eventBus } from "../../main";
export default {
  props: ["userAge"],
  methods: {
    editAge() {
      this.userAge = 30;
      //Communication From child Parent and Parent to Sibling
      //this.$emit('changedAge', this.userAge)

      //Communication From child to Sibling
      eventBus.$emit("changedAge", this.userAge);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>


