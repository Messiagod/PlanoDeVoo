import axios from 'axios';


// VARIAVEL DE CONEXÃO COM API
const api = axios.create({
    baseURL: 'http://brampwsapp002:5050'
})

export default api;