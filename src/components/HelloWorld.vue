<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Nazioni</h2>
    <ul>
      <li v-for="country in countries"><router-link :to="country.url">{{ country.name }}</router-link></li>
    </ul>
    <div>
      <input type="text" v-model="text">
    </div>
    <b>two-way data binding:</b> <span v-text="text"></span>
    <button v-on:click="clearMessage">Pulisci testo</button>
    <child v-bind:my-message="parentMsg"></child>
  </div>
</template>

<script>
import Child from './HelloWorld/Child.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      countries: [
        {name: 'Italy', url: '/italy'},
        {name: 'England', url: '/england'},
        {name: 'Spain', url: '/spain/by_hello_world'}
      ],
      text: '',
      parentMsg: 'two-way data binding from parent to child component'
    }
  },
  components: {Child: Child},
  methods: {
    clearMessage: function () {
      if (this.text !== '') {
        this.text = ''
      } else {
        alert('nessun testo da cancellare')
      }
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
