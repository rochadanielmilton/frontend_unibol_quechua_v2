import axios from 'axios'

const authApi = axios.create({
    //baseURL:'http://127.0.0.1:8000',
    baseURL:'http://192.168.30.9:8000',
    params:{
    }
})

export default authApi