<template>
  <div class="container">

    <router-link :to="{name:'pageConsultarActualizar', params:{id:'000000000'}, query:{edad:15,ciudad:'quito'}}">ESTU ACTUALIZAR</router-link>
    <router-link to="/pageEliminar">ESTU ELIMINAR</router-link>
    <router-link to="/pageGuardar">ESTU CREAR</router-link>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped >
.container {
 
  margin-top: 100px;
  padding: 0px 200px
  
  }
a {
  margin: 10px;
  color: rgb(160, 40, 144);

}
a:hover {
  color: rgb(28, 100, 151);
}



</style>