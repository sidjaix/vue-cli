import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue();

//Global Directive
Vue.directive('highlight', {
  bind(el, binding, vnode) {
    //use of directive
    //el.style.backgroundColor='yellow';

    // Passing value to custom Directive, Set the value from outside
    //el.style.backgroundColor = binding.value;

    // Passing argument to custom Directive
    // if(binding.arg=='background'){
    //   el.style.backgroundColor = binding.value;
    // }else{
    //   el.style.color = binding.value;
    // }

    // Modifying a custom Directive with modifiers
    var delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});

// Global Filter and how to chain multiple filter
 Vue.filter('to-lowercase', function(value){
  return value.toLowerCase();
 })

new Vue({
  el: '#app',
  render: h => h(App)
});
