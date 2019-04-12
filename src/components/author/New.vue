<template>
  <div class="title">
    <h3>New Quote</h3>
    <button @click="counter++">increase!</button>
    <p>{{counter}}</p>
  </div>
</template>
<script>
// Understanding Dynamic Component Behaviour
export default {
  data: function() {
    return { counter: 0 };
  },
  // Every time it create the new component instance
  destroyed() {
    console.log("Destroyed");
  },

  // New Life cycle hooks
  // hit when componet change(Activated / Deactivated)
  // To keep alive the component we loose the destroyed life cycle hooks
  deactivated() {
    console.log("Deactivated");
  },
  activated() {
    console.log("Activated");
  }
};
</script>

<style >
</style>


