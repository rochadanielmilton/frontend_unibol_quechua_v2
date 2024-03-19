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
              <!-- </div> -->
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
//import {ref} from 'vue';
import axios from 'axios';
//let BASE_URL=process.env.VUE_APP_BASE_URL;
let BASE_URL = import.meta.env.VITE_BASE_URL;
export default {
  name: 'EditEstudianteView',
  // setup(){
  //   const file = ref(null)
  //   const cargar = async() => {
  //          // debugger;
  //           console.log("selected file",file.value.files)
  //           //Upload to server
  //       }
  //       return {
  //         cargar,
  //         file
  //      }
  // },
  data() {
    return {
      ci_estudiante: 0, extencion: '', nombres: '', apellidoP: '', apellidoM: '', direccion: '', celular: 0, anio_ingreso: '', anio_cursado: '', genero: '', fecha_nacimiento: '', depa_nacimiento: '', prov_nacimiento: '', munic_nacimiento: '', tipo_ingreso: '',
      fotografia: '', estado_civil: '', idioma_nativo: '', idioma_regular: '', email: '', nacionalidad: '', numero_archivo: '',
      homologacion: '', estado_homologacion: '', convalidacion: '', estado_convalidacion: '', egresado: '', estado_egresado: '', titulado: '', descripcion_titulado: '',
      numero_registro: 0, obs1: '', obs2: '', obs3: '', estado: '', descripcion_estado: '', baja: '', codigo_carrera: 0, nombre_carrera: '',
      ci_especial: '', photography: '', fileFoto: null,
      idiomas: null, carreras: null, principal: '', provincias: null, departamentos: null, noencontrado: true,
      anios_carreras: '',
      //url: BASE_URL + 'estudiantes/educacionPrimaria/',
      url: BASE_URL + 'estudiantes/educacionPrimaria/',
      organizacion_matriz: '', organizacion_departamental: '', organizacion_regional: '', comunidad_sindicato: '', datos_complementarios: '',
      nombre: '', apellidoP: '', ci: '', celular: '', ocupacion: '', idioma: '', relacion_responsable: '', ci_estudiante: '',
      unidad_educativa: '', anio_egreso: '', tipo_colegio: '', pais_academico: '', departamento: '', provincia: '', estado_educacion: '', ci_estudiante: ''
    }
  },
  mounted() {
    const route = useRoute();
    this.id = route.params.id;

    this.url = this.url + '/' + this.id + '/';
    //this.getEstudiante();     
    this.getIdiomas();
    this.getCarreras();
    this.getProvincias();
    this.getAnioCarrera();
    this.getDepartamentos();
    //  this.provincias.forEach(element => {
    //   if(element===this.prov_nacimiento)
    //   {
    //     noencontrado=false;        
    //   }
    //  }); 


    this.principal = '/estudiantes';
  },
  methods: {
    cargarFoto(event) {
      console.log('por aca' + event.target.files[0].name);

      this.photography = event.target.files[0].name;
      this.fileFoto = event.target.files[0];
    },
    onChange(event) {
      axios.get(BASE_URL + '/parametros/obtenerProvincias/' + event.target.value + '/')
        .then(
          response => (
            this.provincias = response.data
          )
        );
    },
    getEstudiante() {
      axios.get(this.url).then(
        response => (
          console.log(response),
          //revisar lo de fernando de objects
          this.nombres = response.data['nombres'],
          this.ci_estudiante = response.data['ci_estudiante'],
          this.extencion = response.data['extencion'],

          this.apellidoP = response.data['apellidoP'],
          this.apellidoM = response.data['apellidoM'],
          this.direccion = response.data['direccion'],
          this.celular = response.data['celular'],

          this.anio_ingreso = response.data['anio_ingreso'],
          this.anio_cursado = response.data['anio_cursado'],

          this.genero = response.data['genero'] ? response.data['genero'] : '',
          this.fecha_nacimiento = response.data['fecha_nacimiento'],
          this.depa_nacimiento = response.data['depa_nacimiento'],
          this.prov_nacimiento = response.data['prov_nacimiento'],

          this.munic_nacimiento = response.data['munic_nacimiento'],

          this.tipo_ingreso = response.data['tipo_ingreso'],

          this.fotografia = response.data['fotografia'],

          this.estado_civil = response.data['estado_civil'] ? response.data['estado_civil'] : '',
          this.idioma_nativo = response.data['idioma_nativo'] ? response.data['idioma_nativo'] : '',
          this.idioma_regular = response.data['idioma_regular'],
          this.email = response.data['email'],

          this.nacionalidad = response.data['nacionalidad'] ? response.data['nacionalidad'] : '',
          this.numero_archivo = response.data['numero_archivo'],

          this.homologacion = response.data['homologacion'],
          this.estado_homologacion = response.data['estado_homologacion'],
          this.convalidacion = response.data['convalidacion'],
          this.estado_convalidacion = response.data['estado_convalidacion'],
          this.egresado = response.data['egresado'],
          this.estado_egresado = response.data['estado_egresado'],
          this.titulado = response.data['titulado'],
          this.descripcion_titulado = response.data['descripcion_titulado'],

          this.numero_registro = response.data['numero_registro'],
          this.obs1 = response.data['obs1'],
          this.obs2 = response.data['obs2'],
          this.obs3 = response.data['obs3'],


          this.estado = response.data['estado'],
          this.descripcion_estado = response.data['descripcion_estado'],
          this.baja = response.data['baja'],
          this.codigo_carrera = response.data['codigo_carrera'],
          this.nombre_carrera = response.data['nombre_carrera'],
          this.ci_especial = response.data['ci_especial']

        )
      ).catch(error => {
        console.log(error)
        show_alerta(error, 'error')
      });

      console.log('esto es:' + typeof (this.estado_civil));
    },
    verificarProvincia() {

    },
    getIdiomas() {
      axios.get(BASE_URL + '/parametros/idiomasOriginarios/')
        .then(
          response => (
            this.idiomas = response.data
          )
        ).catch(error => {
          console.log(error)
          show_alerta(error, 'error')
        });
    },
    getCarreras() {
      axios.get(BASE_URL + '/parametros/carreras/')
        .then(
          response => (
            this.carreras = response.data
          )
        ).catch(error => {
          console.log(error)
          show_alerta(error, 'error')
        });
    },
    async getProvincias() {
      await axios.get(BASE_URL + '/parametros/provincias/')
        .then(
          response => (
            this.provincias = response.data
          )
        );
    },
    async getAnioCarrera() {
      await axios.get(BASE_URL + '/parametros/aniosCarreras/')
        .then(
          response => (
            this.anios_carreras = response.data
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

      // if(this.ci_especial!=='')
      // {
      //   const sin_complemento =this.ci_especial.split('-')[0];
      //   this.ci_estudiante=sin_complemento;
      //   console.log('sin_complemento:'+sin_complemento);    
      // }
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


        //const parametros={nombre_provincia:this.nombre.trim()};
        console.log(parametros);
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
