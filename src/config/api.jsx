import axios from 'axios';


// VARIAVEL DE CONEXÃO COM API
const api = axios.create({
    baseURL: 'http://brampwsapp001:3000'
})

export default api;

