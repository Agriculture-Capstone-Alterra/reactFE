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
            const statuserror = resp.status
            if(statuserror === 401){
                navigate("/login")
            }
            if(locate.pathname == "/"){
                navigate("/dashboard")
            }

        } catch (error) {
            console.log("error private route : ", error.response.status)
            const statuserror = error.response.status
            // buat case dia unauthorized sama no page
            if(statuserror === 401){
                navigate("/login")
            }else{
                navigate("/errorpage")
            }
        }
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