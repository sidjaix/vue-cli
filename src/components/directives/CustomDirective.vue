<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <!-- here delayed is Directive modifier -->
        <!-- <p v-highlight:background.delayed="'yellow'">Global Directive Some Text !</p> -->

        <!-- using multiple Modifiers -->
        <!-- passing more complex values to directives -->
        <p
          v-local-highlight:background.delayed.blink="{mainColor:'red', secondColor:'yellow', delay:500}"
        >Local Directive Some Text !</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Registering Directive locally
  directives: {
    localHighlight: {
      bind(el, binding, vnode) {
        // Modifying a custom Directive with modifiers
        var delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }
        if (binding.modifiers["blink"]) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor
                ? (currentColor = mainColor)
                : (currentColor = secondColor);
              if (binding.arg == "background") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, binding.value.delay);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg == "background") {
              el.style.backgroundColor = binding.value.mainColor;
            } else {
              el.style.color = binding.value.mainColor;
            }
          }, delay);
        }
      }
    }
  }
};
</script>

<style>
</style>
