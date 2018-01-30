<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Brighton</h2>
    <h3 v-on:click="goBack()">Go Back</h3>
  </div>
</template>

<script>
export default {
  name: 'Brighton',
  data () {
    return {
      msg: 'Welcome to Brighton'
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
