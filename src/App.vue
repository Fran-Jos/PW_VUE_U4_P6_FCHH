<template>
  <div class="container">
    <p3/>
  </div>
</template>

<script>
import p1 from './page/PageConsultarActualizar.vue'
import p2 from './page/PageEliminar.vue'
import p3 from './page/PageGuardar.vue'

export default {
  name: 'App',
  components: {
    p1,
    p2,
    p3
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
