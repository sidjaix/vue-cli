<template>
  <div
    class="hello"
    v-bind:style="styleobj"
    v-on:mouseover="changebgcolor"
    v-on:mouseout="originalcolor"
  >
    <h1>{{ msg }}</h1>

    <!-- <a v-on:click="handleClick">Click me!</a> -->
    <!-- <a v-on:click="handleClick()">Click me!</a> -->
    <!-- <a v-on:click="handleClick($event)">Click me!</a> -->
    <!-- <a v-on:click="handleClick('customtext',$event)">Click me!</a> -->
    <a @click="handleClick('customtext','sfd',$event)">Click me!</a>

    <button v-on:click.once="buttonclickedonce" v-bind:style="styleobj">Click Once</button>
    Output:{{clicknum}}
    <br>
    <br>
    <button v-on:click="buttonclicked" v-bind:style="styleobj">Click Me</button>

    Output:{{clicknum1}}
    <a
      href="http://www.google.com"
      v-on:click="clickmePrevent"
      target="_blank"
      v-bind:style="styleobj"
    >Click Me</a>

    <input type="text" v-on:keyup.enter="showinputvalue">
    <h3>{{EnteredText}}</h3>

    <button v-on:customevent="customEventListner">Surprise Me!</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      clicknum: 0,
      clicknum1: 0,
      EnteredText: "",
      styleobj: {
        width: "100%",
        height: "200px",
        backgroundColor: "red"
      }
    };
  },

  methods: {
    changebgcolor: function() {
      this.styleobj.backgroundColor = "green";
    },
    originalcolor: function() {
      this.styleobj.backgroundColor = "red";
    },
    customevent: function() {
      this.$emit("customevent");
    },
    handleClick: function(text, t, event) {
      console.log(text);
      console.log(t);
      console.log(event);
    },
    buttonclickedonce: function() {
      this.clicknum++;
    },
    buttonclicked: function() {
      this.clicknum1++;
    },
    clickmePrevent: function(event) {
      //event.preventDefault();//v-on:click.prevent
      alert("Anchor tag is clicked");
    },
    showinputvalue: function(event) {
      this.EnteredText = event.target.value;
    },
    customEventListner: function() {
      this.msg = "you got customEventListner";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>