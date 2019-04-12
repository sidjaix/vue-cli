<template>
  <div class="component">
    <h3>You may view the user details here.</h3>
    <p>Many Details</p>
    <p>User Name: {{ reverseName() }}</p>
    <p>User Age: {{ userAge }}</p>
    <button @click="resetName">Reset Name</button>
  </div>
</template>

<script>
import { eventBus } from "../../main";
export default {
  //Communication Parent to child problem
  props: {
    //Naming Props
    myName: {
      // props Validation
      type: String,
      required: false,
      default: "Siddharth"
    },
    userAge: Number
  },
  data: function() {
    return {
      status: "Critical"
    };
  },
  methods: {
    reverseName() {
      //use of Props in the child Component
      return this.myName
        .split("")
        .reverse()
        .join("");
    },
    // Communication Child to Parent
    resetName() {
      this.myName = "GGK";
      this.$emit("ChangedName", this.myName);
    }
  },
  created() {
    eventBus.$on("changedAge", age => {
      this.userAge = age;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>


