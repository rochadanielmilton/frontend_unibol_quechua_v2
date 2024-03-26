<template>
  <div class="container">
    <div class="row mt-3 justify-center">
      <div class="col-md-6 offset-md-3">
        <div class="card">
          <div class="card-header bg-secondary text-white text-center">
            EDITAR ORGANIZACIÓN
          </div>
          <div class="card-body">
            <form @submit="guardar">


              <div class="input-group mb-3">
                <input type="text" v-model="organizacion_matriz" id="organizacion_matriz" class="form-control"
                  maxlength="100" placeholder="Organización Matriz">
              </div>

              <div class="input-group mb-3">
                <input type="text" v-model="organizacion_departamental" id="organizacion_departamental"
                  class="form-control" maxlength="100" placeholder="Organización Departamental" required>
              </div>


              <div class="input-group mb-3">
                <input type="text" v-model="organizacion_regional" id="organizacion_regional" class="form-control"
                  maxlength="100" placeholder="Organización Regional" required>
              </div>

              <div class="input-group mb-3">
                <input type="text" v-model="comunidad_sindicato" id="comunidad_sindicato" class="form-control"
                  maxlength="100" placeholder="Comunidad Sindicato">
              </div>

              <div class="input-group mb-3">
                <input type="text" v-model="datos_complementarios" id="datos_complementarios" class="form-control"
                  maxlength="100" placeholder="Datos Complementarios">
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
  name: 'EditOrganizacionView',
  data() {
    return {
      url: BASE_URL + 'estudiantes/organizacion/',
      organizacion_matriz: '', organizacion_departamental: '', organizacion_regional: '', comunidad_sindicato: '', datos_complementarios: ''

    }
  },
  mounted() {
    const route = useRoute();
    this.id = route.params.id;

    this.url = this.url + '/' + this.id + '/';

    this.getOrganizacion();

    this.principal = '/estudiantes';
  },
  methods: {
    //aqui deberia entrar el getOrganizacion
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

    //guardar la informacion del editar Organizacion
    async guardar() {
      event.preventDefault();
      if (this.organizacion_matriz.trim() === '') {
        show_alerta('El nombre no puede ser vacio', 'warning', 'nombre');
      } else {
        const parametros = {
          organizacion_matriz: this.organizacion_matriz,
          organizacion_departamental: this.organizacion_departamental,
          organizacion_regional: this.organizacion_regional,
          comunidad_sindicato: this.comunidad_sindicato,
          otros: this.datos_complementarios,
          ci_estudiante: this.id,
        };

        await sendRequest('PUT', parametros, this.url, 'Organización Actualizada Exitosamente!', this.principal);
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
