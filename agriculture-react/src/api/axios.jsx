import axios from "axios"

const client = axios.create()

client.interceptors.request.use(function (config){
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config

})