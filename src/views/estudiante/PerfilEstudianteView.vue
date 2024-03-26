<template>
  <!-- <div class="container-fluid text-center"> -->
  <div v-if="materias" class="container" id="contenido-global">
    <div class="row">
      <!-- <div class="col-lg-10 offset-lg-1"> -->
      <div class="mb-3 fw-bold  normal-letter">

        <div class="mb-3 fs-5 text-center">
          HISTORIAL ACADÉMICO 
        </div>

        <div class="  fs-6">
          APELLIDOS Y NOMBRES: {{ `${apellidoP} ${apellidoM} ${nombres}` }}
        </div>

        <div class="  fs-6">
          CÉDULA DE IDENTIDAD: {{ `${ci_estudiante}` }}
        </div>

        <div class="  fs-6">
          NRO DE REGISTRO: {{ `${numero_registro}` }}
        </div>

        <div class="  fs-6">
          CARRERA: {{ `${nombre_carrera}` }}
        </div>

        <!-- <div class=" fs-6">                 
              APELLIDOS Y NOMBRES:      {{`${apellidoP} ${apellidoM} ${nombres}`}}
            </div> -->

        <div class=" mb-3 fs-6">
          FECHA DE EMISIÓN : {{ `${fecha_emision}` }}
        </div>
        <div class="d-flex justify-content-between ">

          <div>
            <button class="btn btn-warning ma-3" @click="exportPDF">
              <strong> GENERAR PDF :</strong> <i class="fa-solid fa-file-pdf"></i>
            </button>
          </div>
        </div>

      </div>
      <!-- </div> -->
    </div>

    <div class="row g-3">
      <div class="col-sm-12 col-md-12 col-lg-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">   
              Información General           
            </h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, error? Animi qui id maxime corporis, ex rem labore laborum unde ipsa nisi sunt deserunt,
               ducimus sed tempore, fuga commodi laboriosam.      
            </p>            
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">     
              Información Universitaria
            </h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, error? Animi qui id maxime corporis, ex rem labore laborum unde ipsa nisi sunt deserunt,
               ducimus sed tempore, fuga commodi laboriosam.      
            </p>
          </div>
        </div>
      </div>
    </div>


    <div class="row">
      <!-- <div class="col-lg-12 col-sm-12 offset-lg-2 align-center"> -->
      <!-- <div class="col-lg-12 col-sm-12 align-center"> -->
      <!-- <div class="col-lg-10 offset-lg-1"> -->
      <div class="table-responsive ">
        <DataTable ref="table" id="materias_cursadas" :data="materias" :columns="columns"
          class="table table-bordered table-striped display small" :options="{
            select: true, responsive: true, autoWidth: true, dom: 'Bfrti',
            buttons: [{
              extend: 'selected',
              text: 'Edit',
              name: 'edit'
            }],
            pageLength: 100,
            //responsivePriority: 1,                                                   
            columnDefs: [{
              width: '40%', target: [6],
              width: '10%', target: [7],
            },
            { responsivePriority: 1, targets: 1 },
            { responsivePriority: 2, targets: 2 },
            { responsivePriority: 3, targets: 3 },
            { responsivePriority: 4, targets: 4 },
            ],
            language: {
              search: 'Buscar', zeroRecord: 'No hay registros que mostrar',
              info: 'Mostrando desde _START_ a _END_ de _TOTAL_ registros',
              infoFiltered: '(Filtrados de _MAX_ registros)',
              paginate: { first: 'Primero', previous: 'Anterior', next: 'Siguiente', last: 'Ultimo' }
            },
          }" :key="columns.length">
          <thead v-if="materias" class="pb-4 table-light">
            <tr>
              <th>
                N°
              </th>
              <th>
                GESTIÓN
              </th>
              <th>
                SIGLA CODIGO
              </th>
   
              <th>
                HOMOL.
              </th>
              <th>
                ASIGNATURA
              </th>
              <th>
                HRS. ACAD.
              </th>

              <th>
                PREREQUISITOS
              </th>
              <th>
                CALIFICACION NUMERAL
              </th>
              <th>
                ESTADO
              </th>

            </tr>
          </thead>
          <tbody class="table-group-divider" id="contenido">
  
          </tbody>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { show_alerta, confirmar1 } from '../../funciones';
import { useRoute } from "vue-router";


//librerias para la exportacion en pdf
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";


import DataTable from 'datatables.net-vue3';
import DataTableLib from 'datatables.net-bs5';
import Select from "datatables.net-select";
import 'datatables.net-responsive-bs5';
//import 'datatables.net-select';

DataTable.use(DataTableLib);
DataTable.use(Select);


import { ref } from 'vue';
let BASE_URL = import.meta.env.VITE_BASE_URL;
let MINISTERIO = import.meta.env.VITE_MINISTERIO;
let LOGO_UNI = import.meta.env.VITE_LOGO_UNI;
export default {
  components: { DataTable },
  name: 'AprobadasEstudianteView',
  data() {
    return {
      estudiantes: null, carreras: [], principal: '',
      ci_estudiante: '', nombres: '', apellidoP: '', apellidoM: '', numero_registro: '', nombre_carrera: '', fecha_emision: '', grado: '',
      cantidad_aprobadas: '',
      cantidad_todas: '',
      promedio_todas: '',
      promedio_aprobadas: '',
      materias: null, message: '',
      url: BASE_URL + '/estudiantes/ObtenerHitorialAcademico2',
      columns: [
        {
          data: null, render: function (data, type, row, meta) { return `${meta.row + 1}` }
        },
        { data: null, render: function (data) { return `${data[0]}` } },
        { data: null, render: function (data) { return `${data[1]}` } },
        { data: null, render: function (data) { return `${data[2]}` } },
        { data: null, render: function (data) { return `${data[3]}` } },
        { data: null, render: function (data) { return `${data[4]}` } },
        { data: null, render: function (data) { return `${data[5]}` } },
        { data: null, render: function (data) { return `${data[6]}` } },
        { data: null, render: function (data) { return `${data[7]}` } },

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
    const route = useRoute();
    this.id = route.params.id;

    this.url = this.url + '/' + '13190057' + '/';
    //oficial
    this.getEstudiantes();

    this.getMateriasCursadas();
    //ruta de navegacion despues de la accion eliminar
    this.principal = '/estudiantes';
  },
  methods: {
    async getEstudiantes() {
      //await axios.get('http://127.0.0.1:8000/estudiantes/estudiantes/')
      await axios.get(BASE_URL + '/estudiantes/estudiantes/')
        .then(
          response => (
            this.estudiantes = response.data
          )
        ).catch(error => {
          console.log(error)
          show_alerta(error, 'error')
        });
      console.log(this.estudiantes);
      //console.log(this.estudiantes);
      //console.log('AS'+BASE_URL);
    },

    async exportPDF() {
      const doc = new jsPDF({ orientation: 'p', unit: 'px', format: 'letter' });
      doc.setFontSize(12);
      let tabla_promedios = [];


      //asignaturas_tabla.push([index+1,datos[index].anio_asignado ,datos[index].codigo_asignatura,datos[index].nombre_asignatura])          
      tabla_promedios.push(['TOTAL DE ASIGNATURAS APROBADAS', this.cantidad_aprobadas])
      tabla_promedios.push(['TOTAL DE ASIGNATURAS CURSADAS', this.cantidad_todas])
      tabla_promedios.push(['PROMEDIO DE CALIFICACIÓN GNRAL.', this.promedio_todas])
      tabla_promedios.push(['PREMEDIO DE CALIFICACIÓN APROBADAS', this.promedio_aprobadas])

      doc.setTextColor(10);
      doc.setFontSize(15);


      let finalY = doc.lastAutoTable.finalY || 10

      finalY += 85;

      doc.setTextColor(10);
      doc.setFontSize(6).setFont(undefined, 'bold');
      doc.text(`
      SERIE "A"-3 
      `, (doc.internal.pageSize.getWidth() / 2) + 160, finalY, null, null, "center");
      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes
      finalY += 10;


      doc.setTextColor(10);
      doc.setFontSize(8);
      doc.text(`
                       APELLIDOS Y NOMBRES:                                  
                       CÉDULA DE IDENTIDAD: 
                       NRO DE REGISTRO: 
                       CARRERA: 
                       FECHA DE EMISIÓN: 
                       NIVEL DE FORMACIÓN: 
                       `, -10, finalY);


      doc.setTextColor(100);
      doc.text(`
                       ${this.apellidoP} ${this.apellidoM} ${this.nombres}                         
                       ${this.ci_estudiante}                       
                       ${this.numero_registro}                                
                       ${this.nombre_carrera}
                       ${this.fecha_emision}
                       ${this.grado}
                       `, (doc.internal.pageSize.getWidth() / 2) - 150, finalY);



      finalY += 35;




      autoTable(doc, {
        startY: finalY + 20,
        html: '#materias_cursadas',
        theme: 'plain',
        tableLineColor: [0, 0, 0], tableLineWidth: 0.2,
        styles: { fontSize: 6, halign: 'center' },
        bodyStyles: { lineWidth: 0.2, lineColor: [0, 0, 0] },
        margin: { top: 105 }
        //padding: 0                      
      })

      finalY = doc.lastAutoTable.finalY

      let wantedTableWidth = 100;
      let pageWidth = doc.internal.pageSize.width;
      let margin = (pageWidth - wantedTableWidth) / 2;

      autoTable(doc, {
        //QUITANDO ESPACIO
        //startY: finalY + 20,               
        startY: finalY + 10,
        showHead: 'never',
        body: tabla_promedios,
        //theme:'grid',theme:'striped',theme:'plain'
        theme: 'plain',
        tableLineColor: [0, 0, 0], tableLineWidth: 0.2,
        styles: { fontSize: 5, cellWidth: 'wrap', halign: 'center' },
        bodyStyles: { lineWidth: 0.2, lineColor: [0, 0, 0] },
        columnStyles: {
          1: { columnWidth: 'auto' }
        },
        tableWidth: doc.internal.pageSize.getWidth() / 3,
        margin: { left: margin - 20, right: margin }
        //columnStyles:{color}

      });
      finalY = doc.lastAutoTable.finalY
      finalY += 30;

      doc.setTextColor(10);
      doc.setFontSize(6).setFont(undefined, 'bold');
      doc.text(`                
        APR.: APROBADO
        REP.:REPROBADO
        AB.:ABANDONO
        CONV.:CONVALIDADO
        *Documento solo válido para Trámite Interno.
          `, 40, finalY);
     
      await window.open(doc.output('bloburl'), '_blank');                                                                                                    
    }
    ,
    sortGestion(data) {
      data = data.sort((a, b) => {
        if (a.anio_cursado < b.anio_cursado) {
          return -1;
        }
      });
      console.log(data);
      return data;
    },
    getMateriasCursadas() {
      axios.get(this.url)
        .then(
          response => {

            this.message = response.data.message,
              this.ci_estudiante = response.data['estudiante']['ci_estudiante'],
              this.nombres = response.data['estudiante']['nombres'],
              this.apellidoP = response.data['estudiante']['apellidoP'],
              this.apellidoM = response.data['estudiante']['apellidoM'],
              this.numero_registro = response.data['estudiante']['numero_registro'],
              this.nombre_carrera = response.data['estudiante']['nombre_carrera'],

              this.fecha_emision = response.data['fecha_emision'],
              this.grado = response.data['grado'],

              this.cantidad_aprobadas = response.data['otros_datos']['cantidad_aprobadas'],
              this.cantidad_todas = response.data['otros_datos']['cantidad_todas'],
              this.promedio_todas = response.data['otros_datos']['promedio_todas'],
              this.promedio_aprobadas = response.data['otros_datos']['promedio_aprobadas'],


              this.materias = this.sortGestion(response.data['datos'])

          }
        ).catch(error => {
          console.log(error)
          show_alerta(this.message, 'error')
          this.$router.push('/estudiantes')
        });
      //console.log(this.materias+'sss');        

    }, eliminar(id, nombre) {
      const ruta = 'estudiantes/estudiantes/' + id + '/';
      confirmar1(id, nombre, ruta, this.principal);
      this.$router.push('/estudiantes')
    },
    getCarrera(id) {
      axios.get(BASE_URL + '/parametros/carreras/' + id + '/')
        .then(
          response => (
            this.carreras[id] = response.data['nombre_carrera']
          )
        );
      return this.carreras[id]
    },

  }
}
</script>
<style>
@import 'datatables.net-bs5';
@import 'datatables.net-responsive-dt';

body {
  font-size: .875rem;
  line-height: 1.25rem;
}

.normal-letter {
  font-size: .875rem;
  line-height: 1.25rem;
}


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
  top: 33%;
  left: 5px;
  height: 1em;
  width: 1em;
  margin-top: -5px;
  display: block;
  position: absolute;
  color: white;
  border: .15em solid white;
  border-radius: 1em;
  box-shadow: 0 0 0.2em #444;
  box-sizing: content-box;
  text-align: center;
  text-indent: 0 !important;
  font-family: "Courier New", Courier, monospace;
  line-height: 1em;
  content: "+";
  background-color: #31b131;
  background-color: #74a2ff;
}
</style>