<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Spain</h2>
    <h3>Parameter id defined in vue router: {{ $route.params.id }}</h3>
    <ul>
      <li v-for="country in countries"><router-link :to="country.url">{{ country.name }}</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Spain',
  data () {
    return {
      msg: 'Welcome to Spain',
      countries: [
        {name: 'Home', url: '/'},
        {name: 'England', url: '/england'},
        {name: 'Italy', url: '/italy'}
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
