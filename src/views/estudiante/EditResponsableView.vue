<template>
  <div class="container">
    <div class="row mt-3 justify-center">
      <div class="col-md-6 offset-md-3">
        <div class="card">
          <div class="card-header bg-secondary text-white text-center">
            EDITAR RESPONSABLE
          </div>
          <div class="card-body">
            <form @submit="guardar">

              <div class="input-group mb-3">
                <input type="text" v-model="nombre" id="nombre_responsable" class="form-control" maxlength="100"
                  placeholder="Nombres Responsable">
              </div>

              <div class="input-group mb-3">
                <input type="text" v-model="apellidoP" id="apellidoP" class="form-control" maxlength="100"
                  placeholder="Apellidos Responsable" required>
              </div>


              <div class="input-group mb-3">
                <input type="text" v-model="ci" id="cedula_responsable" class="form-control" maxlength="100"
                  placeholder="Cédula Identidad" required>
              </div>

              <div class="input-group mb-3">
                <input type="text" v-model="celular" id="celular_responsable" class="form-control" maxlength="100"
                  placeholder="Celular">
              </div>

              <div class="input-group mb-3">
                <input type="text" v-model="ocupacion" id="ocupacion" class="form-control" maxlength="100"
                  placeholder="Ocupación">
              </div>

              <div class="input-group mb-3">
                <input type="text" v-model="idioma" id="idioma" class="form-control" maxlength="100"
                  placeholder="Idioma que Habla">
              </div>

              <div class="input-group mb-3">
                <input type="text" v-model="relacion_responsable" id="relacion_responsable" class="form-control"
                  maxlength="100" placeholder="Relación Responsable">
              </div>

              <div class="d-grid col-6-mx-auto">
                <button class="btn btn-success">
                  <i class="fa-solid fa-floppy-disk"></i> Guardar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { show_alerta, sendRequest } from "../../funciones";
import { useRoute } from "vue-router";

import axios from 'axios';
//definicion de variable global para el consumo de servicios API-REST
let BASE_URL = import.meta.env.VITE_BASE_URL;
export default {
  name: 'EditResponsableView',
  data() {
    return {
      url: BASE_URL + 'estudiantes/responsableEstudiante/',
      nombre: '', apellidoP: '', ci: '', celular: '', ocupacion: '', idioma: '', relacion_responsable: '', ci_estudiante: ''
    }
  },
  mounted() {
    const route = useRoute();
    this.id = route.params.id;

    this.url = this.url + '/' + this.id + '/';
    //aqui deberia ir el getResponsable
    //this.getEstudiante();         
    this.principal = '/estudiantes';
  },
  methods: {
    //aqui deberia ir el getResonsable
    // getIdiomas() {
    //   axios.get(BASE_URL + '/parametros/idiomasOriginarios/')
    //     .then(
    //       response => (
    //         this.idiomas = response.data
    //       )
    //     ).catch(error => {
    //       console.log(error)
    //       show_alerta(error, 'error')
    //     });
    // },

    //metodo para guardar la edicion del Responsable
    async guardar() {
      event.preventDefault();
      if (this.nombres.trim() === '') {
        show_alerta('El nombre no puede ser vacio', 'warning', 'nombre');
      } else {
        const parametros = {
          nombre: this.nombre,
          apellidoP: this.apellidoP,
          apellidoM: this.apellidoM,
          ci: this.ci,
          celular: this.celular,
          ocupacion: this.ocupacion,
          idioma: this.idioma,
          relacion_responsable: this.relacion_responsable,
          ci_estudiante: this.ci_estudiante
        };

        await sendRequest('PUT', parametros, this.url, 'Responsable Actualizado Exitosamente!', this.principal);
        this.$router.push('/perfil-estudiante/' + this.id)
      }
    }
  }
}
</script>
<style scoped>
body {
  font-size: .875rem;
  line-height: 1.25rem;
}
</style>
