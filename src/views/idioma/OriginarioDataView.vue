<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-10 offset-lg-1">
        <div class="mb-3 fw-bold ">

          <div class="mb-3 fs-5 text-center">
           LISTA DE IDIOMAS:
          </div>          

        </div>
      </div>
    </div>
    <div class="row">
      <div class="mb-3">
        <!-- <div class="d-flex justify-content-around ">         -->
        <div class="mb-3 d-grid gap-2 d-md-block">

          <button class="btn btn-success  float-end ">
             <router-link to="/idioma-originario/create"
              class="nav-link active"><i class="fa-solid fa-user-plus"></i>NUEVO
              IDIOMA</router-link>
          </button>
          <button class="btn btn-warning rounded   me-1" @click="editarSeleccionado()">
            Editar
            <i class="fa-solid fa-user-plus"></i>
          </button>
          <button class="btn btn-danger  rounded   me-1" @click="eliminarSeleccionado()">
            Eliminar
            <i class="fa-solid fa-trash"></i>
          </button>

        </div>
      </div>
    </div>
    <div class="row">      
        <div class="table-responsive">
          <!-- <table class="table table-bordered table-hover"> -->
          <DataTable ref="table" id="datatable" :data="idiomas" :columns="columns" v-if="idiomas"
            class="table table-bordered table-striped display small" :options="{
              select: true, responsive: true, autoWidth: true, dom: 'Bfrtip',
              buttons: [{
                extend: 'selected',
                text: 'Edit',
                name: 'edit'
              }], pageLength: 5,
              //responsivePriority: 1,                                                   
              columnDefs: [{
                width: '30%', target: [0],
                width: '70%', target: [1],
              },
                // { responsivePriority: 1, targets: 1 },
                // { responsivePriority: 2, targets: 2 },
                // { responsivePriority: 3, targets: 3 },
                // { responsivePriority: 4, targets: 4 },
              ],
              language: {
                search: 'Buscar', zeroRecords: 'No hay registros que mostrar',
                info: 'Mostrando desde _START_ a _END_ de _TOTAL_ registros',
                infoFiltered: '(Filtrados de _MAX_ registros)',
                paginate: { first: 'Primero', previous: 'Anterior', next: 'Siguiente', last: 'Ultimo' }
              },
            }" :key="columns.length">
            <thead>
              <tr>
                <th>#</th>
                <th>NOMBRE IDIOMA</th>
                <!-- <th>ACCIONES</th> -->
              </tr>
            </thead>
            <tbody class="table-group-divider" id="contenido">
              <!-- <tr v-for="idioma, i in idiomas" :key="idioma.id">
                       <td>{{ (i+1) }}</td>
                       <td >{{ idioma.nombre_idioma }}</td>
                       <td >{{ prov.created }}</td>
                       <td >{{ prov.modified }}</td>
                       <td>
                           <router-link :to="{path:'/idioma-originario/edit/'+idioma.id}" class="btn btn-warning">
                               <i class="fa-solid fa-edit"></i>
                           </router-link> &nbsp;
                           <button   class="btn btn-danger" v-on:click="eliminar(idioma.id,idioma.nombre_idioma)">
                               <i class="fa-solid fa-trash"></i>
                           </button>
                       </td>
                   </tr> -->
            </tbody>
          </DataTable>
          <div v-else>
            <div class="row justify-content-md-center">
              <div class="col-3 alert-info text-center mt-5">
                Cargando...
                <h3 class="mt-2">
                  <i class="fa fa-spin fa-sync"></i>
                </h3>
              </div>
            </div>
          </div>
        </div>      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue';
import axios from "axios";
import { confirmar, confirmar1, show_alerta } from '../../funciones';
//import {ref} from 'vue';
// const provincias = computed(()=>{
//         return this.provincias = this.getProvincias()
// })
//const provincias = ref([]);


import DataTable from 'datatables.net-vue3';
import DataTableLib from 'datatables.net-bs5';
import Select from "datatables.net-select";
import 'datatables.net-responsive-bs5';
//import 'datatables.net-select';

DataTable.use(DataTableLib);
DataTable.use(Select);

let BASE_URL = import.meta.env.VITE_BASE_URL;
export default {

  name: 'HomeView',
  components: { DataTable },
  data() {
    return {
      idiomas: null, datos: null,
      columns: [
        {
          data: null, render: function (data, type, row, meta) { return `${meta.row + 1}` }
        },
        { data: 'nombre_idioma' }

      ]
    }
  },
  setup() {
    const table = ref(null)
    // ...
    return {
      table
    }
  },
  mounted() {
    this.datos = this.getIdiomas();
    console.log(this.datos.result);
    this.principal = '/idioma-originario'

  },
  methods: {
    verificarSeleccion() {
      let datos = this.idiomas;
      let identificador = '';
      let nombres = '';

      this.table.dt.rows({ selected: true }).every(function () {
        //TODO ESTO FUNCIONA MUY BIEN, EXCELENTE
        const row = this.data();
        console.log(row);
        // console.log(datos.indexOf(this.data()));
        let idx = datos.indexOf(this.data());
        nombres = `${datos[idx].nombre_idioma}`;
        let clave = datos[idx].id;

        identificador = clave;
      });
      return { identificador, nombres };
    },
    async editarSeleccionado() {
      const { identificador } = this.verificarSeleccion();
      console.log(identificador);
      if (identificador) {
        this.$router.push('/idioma-originario/edit/' + identificador + '/');
      } else {
        const error = 'Debes Seleccionar Un Idioma!';
        show_alerta(error, 'info')
      }
    },
    eliminarSeleccionado() {
      const { identificador, nombres } = this.verificarSeleccion();

      if (identificador) {
        const ruta = 'parametros/idiomasOriginarios/' + identificador + '/';
        //const principal = '/docentes';
        confirmar1(identificador, nombres, ruta, this.principal);
        //this.$router.push('/estudiante/edit/'+identificador+'/');
      } else {
        const error = 'Debes Seleccionar Un Idioma!';
        show_alerta(error, 'info')
      }
    },
    async getIdiomas() {
      await axios.get(BASE_URL + '/parametros/idiomasOriginarios/')
        .then(
          response => (
            this.idiomas = response.data
          )
        );
      return this.idiomas

    }, eliminar(id, nombre) {
      //   for (let index = 0; index < 10; index++) {
      //     sendRequest('POST',{
      //     "id":999,
      //     "nombre_provincia": "TEST-PROVINCIAS",
      //     "id_departamento": null
      // },'http://127.0.0.1:8000/parametros/provincias/','ProvinciaS Eliminada');              
      //   }
      confirmar(id, nombre);

    }
  }
}
</script>
<style>
@import 'datatables.net-bs5';

/*@import 'datatables.net-dt';*/
@import 'datatables.net-responsive-dt';

table.dtr-inline.collapsed>tbody>tr>td.dtr-control,
table.dataTable.dtr-inline.collapsed>tbody>tr>th.dtr-control {
  position: relative;
  padding-left: 30px;
  cursor: pointer;
}

table.dataTable.dtr-inline.collapsed>tbody>tr.parent>td.dtr-control:before,
table.dataTable.dtr-inline.collapsed>tbody>tr.parent>th.dtr-control:before {
  content: "-";
  background-color: #d33333;
}

table.dataTable.dtr-inline.collapsed>tbody>tr>td.dtr-control:before,
table.dataTable.dtr-inline.collapsed>tbody>tr>th.dtr-control:before { 
  content: "+";
  background-color: #31b131;
  background-color: #74a2ff;
}
</style>