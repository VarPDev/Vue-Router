<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>England</h2>
    <ul>
      <li v-for="country in countries"><router-link :to="country.url">{{ country.name }}</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'England',
  data () {
    return {
      msg: 'Welcome to England',
      countries: [
        {name: 'Home', url: '/'},
        {name: 'London', url: '/england/london'},
        {name: 'Brighton', url: '/england/brighton'}
      ]
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
