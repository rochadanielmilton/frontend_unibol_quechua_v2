<template>
  <div class="container">
    <div class="row mt-3 justify-center">
      <div class="col-md-6 offset-md-3">
        <div class="card">
          <div class="card-header bg-secondary text-white text-center">
            EDITAR EDUCACIÓN
          </div>
          <div class="card-body">
            <form @submit="guardar">

              <div class="input-group mb-3">
                <input type="text" v-model="unidad_educativa" id="unidad_educativa" class="form-control" maxlength="100"
                  placeholder="Unidad Educativa">
              </div>

              <div class="input-group mb-3">
                <input type="text" v-model="anio_egreso" id="anio_egreso" class="form-control" maxlength="100"
                  placeholder="Año de Egreso" required>
              </div>


              <div class="input-group mb-3">
                <input type="text" v-model="tipo_colegio" id="tipo_colegio" class="form-control" maxlength="100"
                  placeholder="Tipo Colegio" required>
              </div>

              <div class="input-group mb-3">
                <input type="text" v-model="pais_academico" id="pais_academico" class="form-control" maxlength="100"
                  placeholder="País Académico">
              </div>

              <div class="input-group mb-3">
                <select class="form-select text-center" @change="onChange($event)" id="codigo_carrera" required
                  v-model="depa_nacimiento">
                  <option value="" selected disabled>
                    ---Departamento Nacimiento---
                  </option>
                  <option v-for="departamento in departamentos" v-bind:value="departamento.nombre_departamento"
                    :key="departamento.id">
                    {{ `${departamento.nombre_departamento}` }}
                  </option>
                </select>

              </div>
              <!-- AÑADIDOS -->
              <div class="input-group mb-3">
                <select class="form-select text-center" id="nombre_provincia" required v-model="prov_nacimiento">
                  <option value="" selected disabled>
                    ---Provincia Nacimiento---
                  </option>
                  <option v-for="provincia in provincias" v-bind:value="provincia.nombre_provincia" :key="provincia.id">
                    {{ `${provincia.nombre_provincia}` }}
                  </option>
                </select>

              </div>

              <div class="input-group mb-3">
                <input type="text" v-model="departamento" id="departamento" class="form-control" maxlength="100"
                  placeholder="Departamento">
              </div>

              <div class="input-group mb-3">
                <input type="text" v-model="provincia" id="provincia" class="form-control" maxlength="100"
                  placeholder="Provincia">
              </div>

              <div class="input-group mb-3">
                <input type="text" v-model="estado_educacion" id="estado_educacion" class="form-control" maxlength="100"
                  placeholder="Estado">
              </div>

              <div class="input-group mb-3">
                <input type="hidden" v-model="ci_estudiante" id="ci_estudiante" class="form-control" maxlength="100"
                  placeholder="Carnet Estudiantil">
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
  name: 'EditEducacionView',
  data() {
    return {
      url: BASE_URL + 'estudiantes/educacionPrimaria/',
      unidad_educativa: '', anio_egreso: '', tipo_colegio: '', pais_academico: '', departamento: '', provincia: '', estado_educacion: '', ci_estudiante: ''
    }
  },
  mounted() {
    const route = useRoute();
    this.id = route.params.id;

    this.url = this.url + '/' + this.id + '/';

    this.getProvincias();
    this.getDepartamentos();

    this.principal = '/estudiantes';
  },
  methods: {
    //metodo para obtener las provincias de un departamento seleccionado
    onChange(event) {
      axios.get(BASE_URL + '/parametros/obtenerProvincias/' + event.target.value + '/')
        .then(
          response => (
            this.provincias = response.data
          )
        );
    },
    async getProvincias() {
      await axios.get(BASE_URL + '/parametros/provincias/')
        .then(
          response => (
            this.provincias = response.data
          )
        );
    },
    async getDepartamentos() {
      await axios.get(BASE_URL + '/parametros/departamentos/')
        .then(
          response => (
            this.departamentos = response.data
          )
        );
    },
    async guardar() {
      event.preventDefault();
      if (this.nombres.trim() === '') {
        show_alerta('El nombre no puede ser vacio', 'warning', 'nombre');
      } else {
        const parametros = {
          unidad_educativa: this.unidad_educativa,
          anio_egreso: this.anio_egreso,
          tipo_colegio: this.tipo_colegio,
          pais_academico: this.pais_academico,
          departamento: this.departamento,
          provincia: this.provincia,
          estado: this.estado,
          ci_estudiante: this.ci_estudiante,
        };
        await sendRequest('POST', parametros, this.url, 'Educación Actualizada Exitosamente!', this.principal);
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
