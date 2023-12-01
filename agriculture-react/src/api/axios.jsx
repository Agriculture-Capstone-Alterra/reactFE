import axios from "axios"

const axiosWithAuth = axios.create({
    baseURL: "http://13.213.19.179:8000/",
})

// dieksekusi ketika mau ngirim response
axiosWithAuth.interceptors.request.use((config)=>{
    const token = localStorage.getItem('usertoken')
    console.log("from axios reqeust interceptor config =>", config)
    if(token != null){
        config.headers.Authorization = `Bearer ${token}`
        console.log("from axios request interceptor : token found in localstorage. returning the config with the token..")
    }else{
        console.log("from axios request interceptor : Token not found in localstorage.")
        // localStorage.setItem("usertoken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE3MzIzNzAyODYsInJvbGUiOiJBZG1pbiIsInVzZXJJZCI6MX0.sayjAjPCnc4r2m2PjVM0XGIEqfign04kuypm1T3axe0");
    }
    return config
},(error)=>{
    console.log("from axios request interceptor : ", error)
    if(error.response.status === 404){
        console.log("from axios request interceptor : NOT FOUND 404")
    }
    return Promise.reject(error)
})


// dieksekuis ketika dapat response
axiosWithAuth.interceptors.response.use((response) => {
    console.log("from intercerptors response : ", response)
    return response;
}, (error) => {

    console.log("from intercerptors response error : ", error.response.status)
    return Promise.reject(error);
});

export default axiosWithAuth