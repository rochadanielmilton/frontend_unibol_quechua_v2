<script setup>
import { ref } from 'vue';
import useAuth from '../modules/auth/composables/useAuth';
const { cambiarIdioma } = useAuth();

import AppMenuItem from './AppMenuItem.vue';

let idioma_habilitado = false;

const model2 = ref([
    {
        label: 'Super-Sudo',
        items: [{ label: 'Perfil', icon: 'pi pi-fw pi-home', to: '/perfil-estudiante/13190057/' },
        { label: 'Reportes Generales', icon: 'pi pi-fw pi-check-circle', to: '/reportes-generales' },
        ]
        //13163851
    },
    {
        label: 'Kawsachun',
        items: [
            {
                label: 'Lista de Estudiantes',
                icon: 'pi pi-fw pi-user',
                items: [
                    { label: 'Lista de Estudiantes Regulares', icon: 'pi pi-fw pi-check-square', to: '/estudiantes' },
                    { label: 'Lista General Curso-Preparatorio', icon: 'pi pi-fw pi-check-square', to: '/curso-preparatorio' }
                ]
            }
            // { label: 'Lista General Estudiantes', icon: 'pi pi-fw pi-eye', to: '/estudiantes'},
            // { label: 'Lista Data', icon: 'pi pi-fw pi-check-square', to: '/estudianteData' },

        ]
    },
    {
        label: 'Inscripción',
        items: [
            {
                label: 'Inscripcion de Estudiantes',
                icon: 'pi pi-fw pi-list',
                items: [
                    { label: 'Esdudiantes Nuevos', icon: 'pi pi-fw pi-user', to: '/habilitados-nuevos' },
                    { label: 'Estudiantes Regulares', icon: 'pi pi-fw pi-user', to: '/habilitados-regulares' }
                ]
            }
        ]
    },
    {
        label: 'Reportes',
        items: [
            {
                label: 'Reportes Generales',
                icon: 'pi pi-fw pi-list',
                items: [
                    { label: 'Reportes Por Carrera/Año', icon: 'pi pi-fw pi-check-circle', to: '/reporte/reporte-carrera/' },
                    { label: 'Reportes Por Departamento', icon: 'pi pi-fw pi-check-circle', to: '/reporte/reporte-departamento/' },
                    { label: 'Reportes Por Género', icon: 'pi pi-fw pi-check-circle', to: '/reporte/reporte-genero/' },
                    { label: 'Reportes Por Organización Social', icon: 'pi pi-check-circle', to: '/reporte/reporte-organizacion/' }
                ]
            }
            //{ label: 'Reportes Generales', icon: 'pi pi-fw pi-check-circle', to: '/reportes-generales' },
            // { label: 'Lista General Curso Preparatorio', icon: 'pi pi-fw pi-globe', url: 'https://www.primefaces.org/primeblocks-vue', target: '_blank' }
        ]
    },
    {
        label: 'Docentes',
        items: [
            { label: 'Lista General Docentes', icon: 'pi pi-fw pi-users', to: '/docentes' },
            // { label: 'Lista General Curso Preparatorio', icon: 'pi pi-fw pi-globe', url: 'https://www.primefaces.org/primeblocks-vue', target: '_blank' }
        ]
    },
    {
        label: 'Carreras',
        items: [
            { label: 'Lista General Carreras', icon: 'pi pi-fw pi-list', to: '/carreras' },
            // { label: 'Lista General Curso Preparatorio', icon: 'pi pi-fw pi-globe', url: 'https://www.primefaces.org/primeblocks-vue', target: '_blank' }
        ]
    },
    {
        label: 'Asignaturas',
        items: [
            { label: 'Lista General Asignaturas', icon: 'pi pi-fw pi-list', to: '/asignaturas' },
            // { label: 'Lista General Curso Preparatorio', icon: 'pi pi-fw pi-globe', url: 'https://www.primefaces.org/primeblocks-vue', target: '_blank' }
        ]
    },
    {
        label: 'Parametros',
        items: [
            { label: 'Departamentos', icon: 'pi pi-fw pi-check-circle', to: '/departamentos' },
            { label: 'Provincias', icon: 'pi pi-fw pi-check-circle', to: '/provincias' },
            { label: 'Idioma Originario', icon: 'pi pi-fw pi-check-circle', to: '/idioma-originario' },
            // { label: 'Lista General Curso Preparatorio', icon: 'pi pi-fw pi-globe', url: 'https://www.primefaces.org/primeblocks-vue', target: '_blank' }
        ]
    },


    // {
    //     label: 'UI Components',
    //     items: [
    //         { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/uikit/formlayout' },
    //         { label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/uikit/input' },
    //         { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', to: '/uikit/floatlabel' },
    //         { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', to: '/uikit/invalidstate' },
    //         { label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/uikit/button', class: 'rotated-icon' },
    //         { label: 'Table', icon: 'pi pi-fw pi-table', to: '/uikit/table' },
    //         { label: 'List', icon: 'pi pi-fw pi-list', to: '/uikit/list' },
    //         { label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/uikit/tree' },
    //         { label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/uikit/panel' },
    //         { label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/uikit/overlay' },
    //         { label: 'Media', icon: 'pi pi-fw pi-image', to: '/uikit/media' },
    //         { label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/uikit/menu', preventExact: true },
    //         { label: 'Message', icon: 'pi pi-fw pi-comment', to: '/uikit/message' },
    //         { label: 'File', icon: 'pi pi-fw pi-file', to: '/uikit/file' },
    //         { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/uikit/charts' },
    //         { label: 'Misc', icon: 'pi pi-fw pi-circle', to: '/uikit/misc' }
    //     ]
    // },
    // {
    //     label: 'Prime Blocks',
    //     items: [
    //         { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', to: '/blocks', badge: 'NEW' },
    //         { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: 'https://www.primefaces.org/primeblocks-vue', target: '_blank' }
    //     ]
    // },
    // {
    //     label: 'Utilities',
    //     items: [
    //         { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', to: '/utilities/icons' },
    //         { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: 'https://www.primefaces.org/primeflex/', target: '_blank' }
    //     ]
    // },

    //ESTA PARTE TOMAR EN CUENTA EL MENU DESPLEGABLE QUE HAY
    // {
    //     label: 'Pages',
    //     icon: 'pi pi-fw pi-briefcase',
    //     to: '/pages',
    //     items: [
    //         {
    //             label: 'Landing',
    //             icon: 'pi pi-fw pi-globe',
    //             to: '/landing'
    //         },
    //         {
    //             label: 'Auth',
    //             icon: 'pi pi-fw pi-user',
    //             items: [
    //                 {
    //                     label: 'Login',
    //                     icon: 'pi pi-fw pi-sign-in',
    //                     to: '/auth/login'
    //                 },
    //                 {
    //                     label: 'Error',
    //                     icon: 'pi pi-fw pi-times-circle',
    //                     to: '/auth/error'
    //                 },
    //                 {
    //                     label: 'Access Denied',
    //                     icon: 'pi pi-fw pi-lock',
    //                     to: '/auth/access'
    //                 }
    //             ]
    //         },
    //         {
    //             label: 'Crud',
    //             icon: 'pi pi-fw pi-pencil',
    //             to: '/pages/crud'
    //         },
    //         {
    //             label: 'Timeline',
    //             icon: 'pi pi-fw pi-calendar',
    //             to: '/pages/timeline'
    //         },
    //         {
    //             label: 'Not Found',
    //             icon: 'pi pi-fw pi-exclamation-circle',
    //             to: '/pages/notfound'
    //         },
    //         {
    //             label: 'Empty',
    //             icon: 'pi pi-fw pi-circle-off',
    //             to: '/pages/empty'
    //         }
    //     ]
    // },
    //{
    //     label: 'Hierarchy',
    //     items: [
    //         {
    //             label: 'Submenu 1',
    //             icon: 'pi pi-fw pi-bookmark',
    //             items: [
    //                 {
    //                     label: 'Submenu 1.1',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [
    //                         { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
    //                         { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
    //                         { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
    //                     ]
    //                 },
    //                 {
    //                     label: 'Submenu 1.2',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }]
    //                 }
    //             ]
    //         },
    //         {
    //             label: 'Submenu 2',
    //             icon: 'pi pi-fw pi-bookmark',
    //             items: [
    //                 {
    //                     label: 'Submenu 2.1',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [
    //                         { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
    //                         { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' }
    //                     ]
    //                 },
    //                 {
    //                     label: 'Submenu 2.2',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     label: 'Get Started',
    //     items: [
    //         {
    //             label: 'Documentation',
    //             icon: 'pi pi-fw pi-question',
    //             to: '/documentation'
    //         },
    //         {
    //             label: 'Figma',
    //             url: 'https://www.dropbox.com/scl/fi/bhfwymnk8wu0g5530ceas/sakai-2023.fig?rlkey=u0c8n6xgn44db9t4zkd1brr3l&dl=0',
    //             icon: 'pi pi-fw pi-pencil',
    //             target: '_blank'
    //         },
    //         {
    //             label: 'View Source',
    //             icon: 'pi pi-fw pi-search',
    //             url: 'https://github.com/primefaces/sakai-vue',
    //             target: '_blank'
    //         },
    //         {
    //             label: 'Nuxt Version',
    //             url: 'https://github.com/primefaces/sakai-nuxt',
    //             icon: 'pi pi-fw pi-star'
    //         }
    //     ]
    // }
]);

const model = ref([
    {
        label: 'Admin',
        items: [{ label: 'Perfil', icon: 'pi pi-fw pi-home', to: '/perfil-estudiante/13190057/' },
        { label: 'Reportes Generales', icon: 'pi pi-fw pi-check-circle', to: '/reportes-generales' },
        ]
        //13163851
    },
    {
        label: 'Estudiantes',
        items: [
            {
                label: 'Lista de Estudiantes',
                icon: 'pi pi-fw pi-user',
                items: [
                    { label: 'Lista de Estudiantes Regulares', icon: 'pi pi-fw pi-check-square', to: '/estudiantes' },
                    { label: 'Lista General Curso-Preparatorio', icon: 'pi pi-fw pi-check-square', to: '/curso-preparatorio' }
                ]
            }
            // { label: 'Lista General Estudiantes', icon: 'pi pi-fw pi-eye', to: '/estudiantes'},
            // { label: 'Lista Data', icon: 'pi pi-fw pi-check-square', to: '/estudianteData' },

        ]
    },
    {
        label: 'Inscripción',
        items: [
            {
                label: 'Inscripcion de Estudiantes',
                icon: 'pi pi-fw pi-list',
                items: [
                    { label: 'Esdudiantes Nuevos', icon: 'pi pi-fw pi-user', to: '/habilitados-nuevos' },
                    { label: 'Estudiantes Regulares', icon: 'pi pi-fw pi-user', to: '/habilitados-regulares' }
                ]
            }
        ]
    },
    {
        label: 'Reportes',
        items: [
            {
                label: 'Reportes Generales',
                icon: 'pi pi-fw pi-list',
                items: [
                    { label: 'Reportes Por Carrera/Año', icon: 'pi pi-fw pi-check-circle', to: '/reporte/reporte-carrera/' },
                    { label: 'Reportes Por Departamento', icon: 'pi pi-fw pi-check-circle', to: '/reporte/reporte-departamento/' },
                    { label: 'Reportes Por Género', icon: 'pi pi-fw pi-check-circle', to: '/reporte/reporte-genero/' },
                    { label: 'Reportes Por Organización Social', icon: 'pi pi-check-circle', to: '/reporte/reporte-organizacion/' }
                ]
            }
            //{ label: 'Reportes Generales', icon: 'pi pi-fw pi-check-circle', to: '/reportes-generales' },
            // { label: 'Lista General Curso Preparatorio', icon: 'pi pi-fw pi-globe', url: 'https://www.primefaces.org/primeblocks-vue', target: '_blank' }
        ]
    },
    {
        label: 'Docentes',
        items: [
            { label: 'Lista General Docentes', icon: 'pi pi-fw pi-users', to: '/docentes' },
            // { label: 'Lista General Curso Preparatorio', icon: 'pi pi-fw pi-globe', url: 'https://www.primefaces.org/primeblocks-vue', target: '_blank' }
        ]
    },
    {
        label: 'Carreras',
        items: [
            { label: 'Lista General Carreras', icon: 'pi pi-fw pi-list', to: '/carreras' },
            // { label: 'Lista General Curso Preparatorio', icon: 'pi pi-fw pi-globe', url: 'https://www.primefaces.org/primeblocks-vue', target: '_blank' }
        ]
    },
    {
        label: 'Asignaturas',
        items: [
            { label: 'Lista General Asignaturas', icon: 'pi pi-fw pi-list', to: '/asignaturas' },
            // { label: 'Lista General Curso Preparatorio', icon: 'pi pi-fw pi-globe', url: 'https://www.primefaces.org/primeblocks-vue', target: '_blank' }
        ]
    },
    {
        label: 'Parametros',
        items: [
            { label: 'Departamentos', icon: 'pi pi-fw pi-check-circle', to: '/departamentos' },
            { label: 'Provincias', icon: 'pi pi-fw pi-check-circle', to: '/provincias' },
            { label: 'Idioma Originario', icon: 'pi pi-fw pi-check-circle', to: '/idioma-originario' },
            // { label: 'Lista General Curso Preparatorio', icon: 'pi pi-fw pi-globe', url: 'https://www.primefaces.org/primeblocks-vue', target: '_blank' }
        ]
    },


    // {
    //     label: 'UI Components',
    //     items: [
    //         { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/uikit/formlayout' },
    //         { label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/uikit/input' },
    //         { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', to: '/uikit/floatlabel' },
    //         { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', to: '/uikit/invalidstate' },
    //         { label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/uikit/button', class: 'rotated-icon' },
    //         { label: 'Table', icon: 'pi pi-fw pi-table', to: '/uikit/table' },
    //         { label: 'List', icon: 'pi pi-fw pi-list', to: '/uikit/list' },
    //         { label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/uikit/tree' },
    //         { label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/uikit/panel' },
    //         { label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/uikit/overlay' },
    //         { label: 'Media', icon: 'pi pi-fw pi-image', to: '/uikit/media' },
    //         { label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/uikit/menu', preventExact: true },
    //         { label: 'Message', icon: 'pi pi-fw pi-comment', to: '/uikit/message' },
    //         { label: 'File', icon: 'pi pi-fw pi-file', to: '/uikit/file' },
    //         { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/uikit/charts' },
    //         { label: 'Misc', icon: 'pi pi-fw pi-circle', to: '/uikit/misc' }
    //     ]
    // },
    // {
    //     label: 'Prime Blocks',
    //     items: [
    //         { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', to: '/blocks', badge: 'NEW' },
    //         { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: 'https://www.primefaces.org/primeblocks-vue', target: '_blank' }
    //     ]
    // },
    // {
    //     label: 'Utilities',
    //     items: [
    //         { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', to: '/utilities/icons' },
    //         { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: 'https://www.primefaces.org/primeflex/', target: '_blank' }
    //     ]
    // },

    //ESTA PARTE TOMAR EN CUENTA EL MENU DESPLEGABLE QUE HAY
    // {
    //     label: 'Pages',
    //     icon: 'pi pi-fw pi-briefcase',
    //     to: '/pages',
    //     items: [
    //         {
    //             label: 'Landing',
    //             icon: 'pi pi-fw pi-globe',
    //             to: '/landing'
    //         },
    //         {
    //             label: 'Auth',
    //             icon: 'pi pi-fw pi-user',
    //             items: [
    //                 {
    //                     label: 'Login',
    //                     icon: 'pi pi-fw pi-sign-in',
    //                     to: '/auth/login'
    //                 },
    //                 {
    //                     label: 'Error',
    //                     icon: 'pi pi-fw pi-times-circle',
    //                     to: '/auth/error'
    //                 },
    //                 {
    //                     label: 'Access Denied',
    //                     icon: 'pi pi-fw pi-lock',
    //                     to: '/auth/access'
    //                 }
    //             ]
    //         },
    //         {
    //             label: 'Crud',
    //             icon: 'pi pi-fw pi-pencil',
    //             to: '/pages/crud'
    //         },
    //         {
    //             label: 'Timeline',
    //             icon: 'pi pi-fw pi-calendar',
    //             to: '/pages/timeline'
    //         },
    //         {
    //             label: 'Not Found',
    //             icon: 'pi pi-fw pi-exclamation-circle',
    //             to: '/pages/notfound'
    //         },
    //         {
    //             label: 'Empty',
    //             icon: 'pi pi-fw pi-circle-off',
    //             to: '/pages/empty'
    //         }
    //     ]
    // },
    //{
    //     label: 'Hierarchy',
    //     items: [
    //         {
    //             label: 'Submenu 1',
    //             icon: 'pi pi-fw pi-bookmark',
    //             items: [
    //                 {
    //                     label: 'Submenu 1.1',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [
    //                         { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
    //                         { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
    //                         { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
    //                     ]
    //                 },
    //                 {
    //                     label: 'Submenu 1.2',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }]
    //                 }
    //             ]
    //         },
    //         {
    //             label: 'Submenu 2',
    //             icon: 'pi pi-fw pi-bookmark',
    //             items: [
    //                 {
    //                     label: 'Submenu 2.1',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [
    //                         { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
    //                         { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' }
    //                     ]
    //                 },
    //                 {
    //                     label: 'Submenu 2.2',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     label: 'Get Started',
    //     items: [
    //         {
    //             label: 'Documentation',
    //             icon: 'pi pi-fw pi-question',
    //             to: '/documentation'
    //         },
    //         {
    //             label: 'Figma',
    //             url: 'https://www.dropbox.com/scl/fi/bhfwymnk8wu0g5530ceas/sakai-2023.fig?rlkey=u0c8n6xgn44db9t4zkd1brr3l&dl=0',
    //             icon: 'pi pi-fw pi-pencil',
    //             target: '_blank'
    //         },
    //         {
    //             label: 'View Source',
    //             icon: 'pi pi-fw pi-search',
    //             url: 'https://github.com/primefaces/sakai-vue',
    //             target: '_blank'
    //         },
    //         {
    //             label: 'Nuxt Version',
    //             url: 'https://github.com/primefaces/sakai-nuxt',
    //             icon: 'pi pi-fw pi-star'
    //         }
    //     ]
    // }
]);

const model3 = ref([
    {
        label: 'Administración',
        items: [
            {
                label: 'Gestión de Inscripciones',
                icon: 'pi pi-fw pi-cog',
                items: [
                    { label: 'Estudiantes Nuevos', icon: 'pi pi-fw pi-user', to: '/habilitados-nuevos' },
                    { label: 'Estudiantes Regulares', icon: 'pi pi-fw pi-user', to: '/habilitados-regulares' }
                ]
            },
            {
                
                    label: 'Gestión Docentes',
                    icon: 'pi pi-fw pi-cog',
                    items: [
                        { label: 'Lista General Docentes', icon: 'pi pi-fw pi-users', to: '/docentes' },
                        // { label: 'Lista General Curso Preparatorio', icon: 'pi pi-fw pi-globe', url: 'https://www.primefaces.org/primeblocks-vue', target: '_blank' }
                    ]
                
            }
        ]
    },
    {
        label: 'Parámetros',
        items: [
            {
                label: 'Gestión de Parámetros',
                icon: 'pi pi-fw pi-database',
                items: [
                    { label: 'Gestión de Carreras ', icon: 'pi pi-fw pi-plus-circle', to: '/carreras' },
                    { label: 'Gestión de Asignaturas', icon: 'pi pi-fw pi-plus-circle', to: '/asignaturas' },
                    { label: 'Gestión de Departamentos', icon: 'pi pi-fw pi-plus-circle', to: '/departamentos' },
                    { label: 'Gestión de Provincias', icon: 'pi pi-fw pi-plus-circle', to: '/provincias' },
                    { label: 'Gestión de Idioma Originario', icon: 'pi pi-fw pi-plus-circle', to: '/idioma-originario' },



                ]
            },
            // {
            //     label: 'Gestión de Asignaturas',
            //     icon: 'pi pi-fw pi-list',
            //     items: [
            //         { label: 'Lista General Asignaturas', icon: 'pi pi-fw pi-users', to: '/docentes' },
            //     ]
            // },
            // {
            //     label: 'Gestión de Departamentos',
            //     icon: 'pi pi-fw pi-list',
            //     items: [
            //         { label: 'Lista General Departamentos', icon: 'pi pi-fw pi-users', to: '/docentes' },
            //     ]
            // },
            // {
            //     label: 'Gestión de Provincias',
            //     icon: 'pi pi-fw pi-list',
            //     items: [
            //         { label: 'Lista General Provincias', icon: 'pi pi-fw pi-users', to: '/docentes' },
            //     ]
            // },
            // {
            //     label: 'Gestión de Idioma Originario',
            //     icon: 'pi pi-fw pi-list',
            //     items: [
            //         { label: 'Lista Idiomas Originarios', icon: 'pi pi-fw pi-users', to: '/docentes' },
            //     ]
            // },
        ]
    },
    {
        label: 'Estudiantes',
        items: [
            {
                label: 'Gestión de Estudiantes',
                icon: 'pi pi-fw pi-user-plus',
                to: '/estudiantes'
            },
            {
                
                    label: 'Gestión Curso Preparatorio',
                    icon: 'pi pi-fw pi-user-plus',
                    to: '/curso-preparatorio'                
            }
        ]
    },
    // {
    //     label: 'DOCENTES',
    //     items: [{ label: 'Gestión Lista de Estudiantes Por Asignatura', icon: 'pi pi-fw pi-home', to: '/perfil-estudiante/13190057/' },
    //             { label: 'Gestión Notas Estudiante', icon: 'pi pi-fw pi-home', to: '/reportes-generales' },
    //     ]        
    // },
    {
        label: 'REPORTES',
        items: [{ label: 'Reporte General', icon: 'pi pi-fw pi-check-circle', to: '/reportes-generales' },
                { label: 'Reporte Por Departamento', icon: 'pi pi-fw pi-check-circle', to: '/reporte/reporte-departamento' },
                { label: 'Reporte Por Género', icon: 'pi pi-fw pi-check-circle', to: '/reporte/reporte-genero/' },
                { label: 'Reporte En Planilla(Carrera Por Año)', icon: 'pi pi-fw pi-check-circle', to: '/reporte/reporte-carrera/' },                
        ]        
    },
    // {
    //     label: 'Estudiantes',
    //     items: [
    //         {
    //             label: 'Lista de Estudiantes',
    //             icon: 'pi pi-fw pi-user',
    //             items: [
    //                 { label: 'Lista de Estudiantes Regulares', icon: 'pi pi-fw pi-check-square', to: '/estudiantes' },
    //                 { label: 'Lista General Curso-Preparatorio', icon: 'pi pi-fw pi-check-square', to: '/curso-preparatorio' }
    //             ]
    //         }
    //         // { label: 'Lista General Estudiantes', icon: 'pi pi-fw pi-eye', to: '/estudiantes'},
    //         // { label: 'Lista Data', icon: 'pi pi-fw pi-check-square', to: '/estudianteData' },

    //     ]
    // },
    
    // {
    //     label: 'Reportes',
    //     items: [
    //         {
    //             label: 'Reportes Generales',
    //             icon: 'pi pi-fw pi-list',
    //             items: [
    //                 { label: 'Reportes Por Carrera/Año', icon: 'pi pi-fw pi-check-circle', to: '/reporte/reporte-carrera/' },
    //                 { label: 'Reportes Por Departamento', icon: 'pi pi-fw pi-check-circle', to: '/reporte/reporte-departamento/' },
    //                 { label: 'Reportes Por Género', icon: 'pi pi-fw pi-check-circle', to: '/reporte/reporte-genero/' },
    //                 { label: 'Reportes Por Organización Social', icon: 'pi pi-check-circle', to: '/reporte/reporte-organizacion/' }
    //             ]
    //         }
    //         //{ label: 'Reportes Generales', icon: 'pi pi-fw pi-check-circle', to: '/reportes-generales' },
    //         // { label: 'Lista General Curso Preparatorio', icon: 'pi pi-fw pi-globe', url: 'https://www.primefaces.org/primeblocks-vue', target: '_blank' }
    //     ]
    // },
    // {
    //     label: 'Docentes',
    //     items: [
    //         { label: 'Lista General Docentes', icon: 'pi pi-fw pi-users', to: '/docentes' },
    //         // { label: 'Lista General Curso Preparatorio', icon: 'pi pi-fw pi-globe', url: 'https://www.primefaces.org/primeblocks-vue', target: '_blank' }
    //     ]
    // },
    // {
    //     label: 'Carreras',
    //     items: [
    //         { label: 'Lista General Carreras', icon: 'pi pi-fw pi-list', to: '/carreras' },
    //         // { label: 'Lista General Curso Preparatorio', icon: 'pi pi-fw pi-globe', url: 'https://www.primefaces.org/primeblocks-vue', target: '_blank' }
    //     ]
    // },
    // {
    //     label: 'Asignaturas',
    //     items: [
    //         { label: 'Lista General Asignaturas', icon: 'pi pi-fw pi-list', to: '/asignaturas' },
    //         // { label: 'Lista General Curso Preparatorio', icon: 'pi pi-fw pi-globe', url: 'https://www.primefaces.org/primeblocks-vue', target: '_blank' }
    //     ]
    // },
    // {
    //     label: 'Parametros',
    //     items: [
    //         { label: 'Departamentos', icon: 'pi pi-fw pi-check-circle', to: '/departamentos' },
    //         { label: 'Provincias', icon: 'pi pi-fw pi-check-circle', to: '/provincias' },
    //         { label: 'Idioma Originario', icon: 'pi pi-fw pi-check-circle', to: '/idioma-originario' },
    //         // { label: 'Lista General Curso Preparatorio', icon: 'pi pi-fw pi-globe', url: 'https://www.primefaces.org/primeblocks-vue', target: '_blank' }
    //     ]
    // },
]);

const cambiarQuechua = () => {
    if (idioma_habilitado) {
        cambiarIdioma('español')
    }
    else {
        cambiarIdioma('quechua')
        idioma_habilitado = !idioma_habilitado;
    }
}
</script>

<template>
    <ul class="layout-menu">

        <template v-for="(item2, i) in model2" :key="item2" v-if="idioma_habilitado">
            <app-menu-item v-if="!item2.separator" :item="item2" :index="i"></app-menu-item>
            <li v-if="item2.separator" class="menu-separator"></li>
        </template>

        <template v-for="(item, i) in model3" :key="item" v-else>
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
        <!-- <li>
            <a href="https://www.primefaces.org/primeblocks-vue/#/" target="_blank">
                <img src="/layout/images/banner-primeblocks.png" alt="Prime Blocks" class="w-full mt-3" />
            </a>
        </li> -->
    </ul>
</template>

<style lang="scss" scoped></style>
