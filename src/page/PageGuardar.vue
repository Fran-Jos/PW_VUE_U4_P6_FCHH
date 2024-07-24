<template>
  <div class="container">
    <p class="form-title">Formulario Estudiante</p>

    <div class="form-group">
      <label for="nombre">Nombre</label>
      <input v-model="nombre" type="text" class="form-control" id="nombre" />
    </div>

    <div class="form-group">
      <label for="apellido">Apellido</label>
      <input
        v-model="apellido"
        type="text"
        class="form-control"
        id="apellido"
      />
    </div>

    <div class="form-group">
      <label for="fecha">Fecha nacimiento</label>
      <input v-model="fecha" type="date" class="form-control" id="fecha" />
    </div>

    <div class="form-group">
      <label for="genero">Genero</label>
      <input v-model="genero" type="text" class="form-control" id="genero" />
    </div>

    <div class="form-group">
      <label for="cedula">Cedula</label>
      <input v-model="cedula" type="text" class="form-control" id="cedula" />
    </div>

    <div class="botones">
      <button @click="guardar" >Guardar</button>
    </div>
</div>

</template>

<script>
import formulario from "../components/Formulario.vue";
import { guardarFachada } from "../clients/ClienteEstudiante.js";

export default {
  components: {
    formulario,
  },

  data() {
    return {
      nombre: null,
      apellido: null,
      fecha: null,
      genero: null,
      cedula: null,
    };
  },

  methods: {
async guardar() {
    console.log(this.nombre);
    console.log(this.apellido);
    console.log(this.fecha);
    console.log(this.genero);
    console.log(this.cedula);

    let fecha = new Date(this.fecha);
    let fechafinal = fecha.toISOString().split("T")[0] + "T00:00:00";


   const estudiante = {
      nombre: this.nombre,
      apellido: this.apellido,
      fecha: fechafinal,
      genero: this.genero,
      cedula: this.cedula,
    };

    const data = await guardarFachada(estudiante);
    console.log(data);

  },
  }


};
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
.botones {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
}

button {
  padding: 10px;
  width: 100%;
  background-color: #f9f9f9;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  cursor: pointer;
}
</style>