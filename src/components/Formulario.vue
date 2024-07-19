<template>
<div class="container">
<p class="form-title">Formulario Estudiante</p>

  <div class="form-group">
    <label for="nombre">Nombre</label>
    <input type="text" class="form-control" id="nombre" >
  </div>

  <div class="form-group">
    <label for="apellido">Apellido</label>
    <input type="text" class="form-control" id="apellido">
  </div>

  <div class="form-group">
    <label for="fecha">Fecha nacimiento</label>
    <input type="date" class="form-control" id="fecha" >
  </div>

  <div class="form-group">
    <label for="genero">Genero</label>
    <input type="text" class="form-control" id="genero" >
  </div>

    <div class="form-group">
        <label for="cedula">Cedula</label>
        <input type="text" class="form-control" id="cedula" >
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

.form-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
}

.form-control {
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background-color: #fff;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}
</style>