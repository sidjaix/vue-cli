<template>
  <div class="title">
    <!-- Passing Content with Slots, and multiple Slots-->
    <slot name="title"></slot>
    <!-- if pass the slot content from the parent by named slot it will replace the slot content from the child -->
    <span style="color:#ccc"><slot name="subtitle">The Subtitle</slot></span>
    <hr>
    <!-- Default Slot -->
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
div {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}
/* content passed to child have style it here */
h2 {
  color: red;
}
.title {
  font-style: italic;
}
</style>


