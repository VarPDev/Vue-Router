<template>
    <h4>{{myMessage}}</h4>
</template>

<script>
export default {
  props: ['myMessage'],
  name: 'Child',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  cursor: pointer;
  font-weight: 400;
  color: blue;
}
</style>