import { computed } from 'vue';
import { useStore } from 'vuex';
//import Swal from "sweetalert2";

const useAuth = () => {
    const store = useStore()

    const createUser = async (user) => {
        console.log(user);
        const resp = await store.dispatch('auth/createUser', user)
        //return {ok:false, message: 'EMAIL_EXISTS'}
        //un dispatch es ejecutar una accion o una peticion al backend
        //TO:DO store.dispatch ('auth/createUser',user)
        //FALTARIA HACER LA MUTATION PARA HACER EL LOGINUSER

        return resp
    }

    const loginUser = async (user) => {
        // new Swal({
        //     title: 'Espere por favor',
        //     allowOutsideClick: false,
        //     timer: 2000
        // })
        // Swal.showLoading()
        const resp = await store.dispatch('auth/signInUser', user)
        return resp
    }

    const checkAuthStatus = async () => {
        const resp = await store.dispatch('auth/checkAuthentication')
        return resp
    }

    const cambiarIdioma = async (idioma) => {
        const resp = await store.dispatch('auth/checkIdioma', idioma)
        return resp
    }

    const getStatus = async () => {
        const resp = await store.getters['auth/currentState']
        return resp
    }

    const logout = () => {
        // new Swal({
        //     title: 'Espere por favor',
        //     allowOutsideClick: false,
        //     timer: 2000
        // })
        // Swal.showLoading()
        //console.log('pasando por el logout/commit');  
        store.commit('auth/logout');
    }

    return {
        createUser,
        loginUser,
        checkAuthStatus,
        authStatus: computed(() => store.getters['auth/currentStatus']),
        username: computed(() => store.getters['auth/username']),
        authIdioma: computed(() => store.getters['auth/currentIdioma']),
        getStatus,
        logout,
        cambiarIdioma
    }
}


export default useAuth
