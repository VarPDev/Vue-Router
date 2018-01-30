<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Italia</h2>
    <h3 v-on:click="goBack()">Go Back</h3>
    <ul>
      <li v-for="country in countries"><router-link :to="country.url">{{ country.name }}</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Italy',
  data () {
    return {
      msg: 'Welcome to Italy',
      countries: [
        {name: 'Home', url: '/'},
        {name: 'England', url: '/england'},
        {name: 'Spain', url: '/spain'}
      ]
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
h3 {
  cursor: pointer;
  font-weight: 400;
  color: red;
}
</style>
