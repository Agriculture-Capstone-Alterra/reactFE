import { useEffect } from "react";
import axiosWithAuth from "../api/axios";
import { Outlet, redirect, useLocation, useNavigate } from "react-router-dom";

export default function PrivateRoute(){
    const navigate = useNavigate()
    const locate = useLocation()
    async function fetchAuth(){
        try {
            const resp = await axiosWithAuth.get('users')
            console.log("Response from Private Route : ", resp)
            if(typeof resp.status !== 'undefined'){
                if(resp.status && resp.status == 200 && locate.pathname == "/"){
                    console.log("it went to it")
                    navigate("/dashboard")
                }
            }else{
                if(resp.response.status && resp.response.status == 401){
                    navigate("/login")
                }
            }

        } catch (error) {
            console.log("error private route : ", error)
            const statuserror = error.response.status
            // buat case dia unauthorized sama no page
            if(statuserror === 401){
                navigate("/login")
            }else{
                navigate("/errorpage")
            }
        }
        console.log("private route callled")
    }
    useEffect(()=>{
        fetchAuth();
    },[])

    return (
        <>
            <Outlet/>
        </>
    )
}