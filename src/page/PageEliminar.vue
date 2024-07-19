<template>
  <div class="container">
<p class="form-title">Formulario Estudiante</p>

  <div class="form-group">
    <label for="cedula">Cedula</label>
    <input type="text" class="form-control" id="cedula" >
  </div>

          <div class="botones">
        <button >eliminar</button>
        </div>
  
  </div>


</template>

<script>
export default {

}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 600px;
  padding: 20px;
  border: 2px solid #eaeaea;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.botones{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
}

button{
    padding: 10px;
    width: 100%;
    background-color: #f9f9f9;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    cursor: pointer;
}

</style>