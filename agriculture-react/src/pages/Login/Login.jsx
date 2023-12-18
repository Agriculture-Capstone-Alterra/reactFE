import { useEffect, useState } from "react"
import { BGLogin } from "../../assets"
import axiosWithAuth from "../../api/axios"
import "./Login.css"
import { useNavigate } from "react-router-dom"

export default function Login(){
    const [form, setForm] = useState({
        email: "",
        password: "",
        ingatcheck: false,
    })
    const [alert, setAlert] = useState({
        alertemail: {message : "", classes:"form-control fontw400 fonts20 login-inputtext"},
        alertpassword: {message : "", classes:"form-control fontw400 fonts20 login-inputtext"},
        alertnearsubmit: ""
    })
    const navigate = useNavigate()
    async function LoginTokenAuth(){
        try {
            const resp = await axiosWithAuth.get('users')
            // console.log("resp from login: ", resp)
            if(resp.status === 200){
                navigate("/dashboard")
            }
        } catch (error) {
            // console.log("err login (??): ", error.response.status)
            // buat case dia unauthorized sama no page
        }
    }

    useEffect(()=>{
        LoginTokenAuth();
    },[])


    function handleEmail(e){
        setForm({...form, email: e.target.value})
    }
    function handlePassword(e){
        setForm({...form, password: e.target.value})
    }
    function handleIngat(e){
        setForm({...form,
        ingatcheck: !form.ingatcheck})
        console.log("ingat is ",form.ingatcheck)
    }

    async function LoginUser(){
        await axiosWithAuth.post('/auth/login',{
            email: form.email,
            password: form.password
        }).then((resp)=>{
            // console.log("what",resp)
            if(typeof resp.response != 'undefined'){
                if(resp.response.data.message == 'Password Invalid'){
                    setAlert({...alert, alertpassword: {...alert.alertpassword, message: "Password is invalid", classes: "danger form-control fontw400 fonts20 login-inputtext"},
                    alertemail: {message : "", classes:"form-control fontw400 fonts20 login-inputtext"},
                    alertnearsubmit: ""})
                }else if(resp.response.data.message == 'Email not found'){
                    setAlert({alertemail: {...alert.alertemail, message: "Email not found.", classes: "danger form-control fontw400 fonts20 login-inputtext"},
                    alertpassword: {message : "", classes:"form-control fontw400 fonts20 login-inputtext"},
                    alertnearsubmit: ""})
                }
            }else{
                localStorage.setItem('usertoken', resp.data.data.token)
                navigate("/dashboard")
            }
            
        })
        
        
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(form)

        // validasi
        if(form.email == ""){
            setAlert({alertemail: {...alert.alertemail, message: "Please enter a email.", classes: "danger form-control fontw400 fonts20 login-inputtext"},
            alertpassword: {message : "", classes:"form-control fontw400 fonts20 login-inputtext"},
            alertnearsubmit: ""})
        }else if(form.password == ""){
            setAlert({...alert, alertpassword: {...alert.alertpassword, message: "Please enter a password.", classes: "danger form-control fontw400 fonts20 login-inputtext"},
            alertemail: {message : "", classes:"form-control fontw400 fonts20 login-inputtext"},
            alertnearsubmit: ""})

        }else{
            // kalau valid formatnya, validasi kedb
            LoginUser()

            console.log("Berhasil ig..")
        }

    }


     return (
        <>
            <div className="login-globalcontainer d-flex justify-content-between align-items-center" style={{ backgroundImage: "url(/BgLogin1.png)", backgroundPositionY: "center"}}>
                <div className="login-leftpart d-flex justify-content-center align-items-center" >
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <svg style={{marginBottom: "12px"}} xmlns="http://www.w3.org/2000/svg" width="205" height="204" viewBox="0 0 205 204" fill="none">
                            <path d="M138.098 77.826C136.262 49.368 124.736 21.624 103.112 0C81.284 21.828 69.248 49.572 66.902 77.826C79.958 84.762 91.994 93.738 102.5 104.652C113.006 93.84 125.042 84.864 138.098 77.826ZM103.01 32.538C109.436 43.044 113.924 54.774 116.27 67.014C111.476 70.074 106.988 73.44 102.602 77.01C98.318 73.542 93.728 70.176 89.036 67.116C91.586 54.876 96.278 43.146 103.01 32.538ZM102.5 137.19C94.136 124.44 83.528 113.322 71.288 104.55C69.962 103.632 68.534 102.918 67.208 101.898C68.534 102.816 69.962 103.632 71.186 104.448C51.296 90.066 26.918 81.6 0.5 81.6C0.5 135.864 34.772 181.764 82.406 198.798C88.832 201.144 95.564 202.878 102.5 204C109.436 202.776 116.066 201.042 122.594 198.798C170.228 181.764 204.5 135.864 204.5 81.6C161.864 81.6 124.43 103.734 102.5 137.19ZM115.964 179.52C111.476 181.05 106.988 182.274 102.398 183.294C97.91 182.376 93.524 181.152 89.342 179.622C55.784 167.586 31.202 138.924 23.552 104.652C34.772 107.304 45.482 111.894 55.376 118.218L55.172 118.32C56.498 119.238 57.824 120.156 59.15 120.87L59.864 121.278C69.962 128.622 78.632 137.7 85.466 148.308L102.5 174.42L119.534 148.41C126.572 137.7 135.344 128.52 145.34 121.278L146.054 120.768C146.972 120.258 147.89 119.646 148.808 119.034L148.706 118.83C158.702 112.2 169.82 107.304 181.448 104.55C173.798 138.924 149.318 167.586 115.964 179.52ZM71.798 104.856C71.594 104.754 71.39 104.55 71.288 104.448C71.288 104.448 71.39 104.448 71.39 104.55C71.492 104.652 71.594 104.754 71.798 104.856Z" fill="#36725D"/>
                        </svg>
                        <svg width="425" height="96" viewBox="0 0 425 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.6132 75H0.476868L24.0337 5.18182H46.4996L70.0564 75H51.9201L35.5223 22.7727H34.9769L18.6132 75ZM16.1928 47.5227H54.1019V60.3409H16.1928V47.5227ZM96.7813 95.7273C91.804 95.7273 87.5427 95.0341 83.9972 93.6477C80.4518 92.2614 77.6677 90.3636 75.6449 87.9545C73.6222 85.5455 72.4063 82.8182 71.9972 79.7727L87.7813 78.8864C88.0768 79.9545 88.6222 80.8864 89.4177 81.6818C90.2358 82.4773 91.2927 83.0909 92.5881 83.5227C93.9063 83.9545 95.4518 84.1705 97.2245 84.1705C100.02 84.1705 102.327 83.4886 104.145 82.125C105.986 80.7841 106.906 78.4318 106.906 75.0682V65.8636H106.327C105.668 67.4773 104.668 68.9205 103.327 70.1932C101.986 71.4659 100.315 72.4659 98.3154 73.1932C96.3381 73.9205 94.0654 74.2841 91.4972 74.2841C87.679 74.2841 84.179 73.3977 80.9972 71.625C77.8381 69.8295 75.304 67.0568 73.3949 63.3068C71.5086 59.5341 70.5654 54.6818 70.5654 48.75C70.5654 42.6364 71.5427 37.6023 73.4972 33.6477C75.4518 29.6705 78.0086 26.7273 81.1677 24.8182C84.3495 22.9091 87.7699 21.9545 91.429 21.9545C94.179 21.9545 96.5313 22.4318 98.4858 23.3864C100.463 24.3182 102.088 25.5227 103.361 27C104.634 28.4773 105.599 30.0114 106.259 31.6023H106.736V22.6364H123.338V75.2045C123.338 79.6364 122.224 83.375 119.997 86.4205C117.77 89.4659 114.656 91.7727 110.656 93.3409C106.656 94.9318 102.031 95.7273 96.7813 95.7273ZM97.2927 62.1477C99.3154 62.1477 101.043 61.6136 102.474 60.5455C103.906 59.4773 105.009 57.9432 105.781 55.9432C106.554 53.9432 106.94 51.5455 106.94 48.75C106.94 45.9091 106.554 43.4659 105.781 41.4205C105.031 39.3523 103.929 37.7614 102.474 36.6477C101.043 35.5341 99.3154 34.9773 97.2927 34.9773C95.2245 34.9773 93.4745 35.5455 92.0427 36.6818C90.6108 37.8182 89.5199 39.4205 88.7699 41.4886C88.0427 43.5341 87.679 45.9545 87.679 48.75C87.679 51.5455 88.054 53.9432 88.804 55.9432C89.554 57.9432 90.6336 59.4773 92.0427 60.5455C93.4745 61.6136 95.2245 62.1477 97.2927 62.1477ZM132.046 75V22.6364H148.239V32.1818H148.785C149.739 28.7273 151.296 26.1591 153.455 24.4773C155.614 22.7727 158.126 21.9205 160.989 21.9205C161.762 21.9205 162.557 21.9773 163.376 22.0909C164.194 22.1818 164.955 22.3295 165.66 22.5341V37.0227C164.864 36.75 163.819 36.5341 162.523 36.375C161.251 36.2159 160.114 36.1364 159.114 36.1364C157.137 36.1364 155.353 36.5795 153.762 37.4659C152.194 38.3295 150.955 39.5455 150.046 41.1136C149.16 42.6591 148.716 44.4773 148.716 46.5682V75H132.046ZM170.532 75V22.6364H187.203V75H170.532ZM178.884 16.5341C176.544 16.5341 174.532 15.7614 172.85 14.2159C171.169 12.6477 170.328 10.7614 170.328 8.55682C170.328 6.375 171.169 4.51136 172.85 2.96591C174.532 1.39772 176.544 0.613632 178.884 0.613632C181.248 0.613632 183.259 1.39772 184.919 2.96591C186.6 4.51136 187.441 6.375 187.441 8.55682C187.441 10.7614 186.6 12.6477 184.919 14.2159C183.259 15.7614 181.248 16.5341 178.884 16.5341ZM195.893 94.6364V22.6364H212.393V31.6023H212.905C213.587 30.0114 214.553 28.4773 215.803 27C217.075 25.5227 218.689 24.3182 220.643 23.3864C222.621 22.4318 224.984 21.9545 227.734 21.9545C231.371 21.9545 234.768 22.9091 237.928 24.8182C241.109 26.7273 243.678 29.6705 245.632 33.6477C247.587 37.625 248.564 42.6932 248.564 48.8523C248.564 54.7841 247.621 59.75 245.734 63.75C243.871 67.75 241.348 70.75 238.166 72.75C235.007 74.75 231.496 75.75 227.632 75.75C224.996 75.75 222.712 75.3182 220.78 74.4545C218.848 73.5909 217.223 72.4545 215.905 71.0455C214.609 69.6364 213.609 68.125 212.905 66.5114H212.564V94.6364H195.893ZM212.223 48.8182C212.223 51.6364 212.598 54.0909 213.348 56.1818C214.121 58.2727 215.223 59.8977 216.655 61.0568C218.109 62.1932 219.848 62.7614 221.871 62.7614C223.916 62.7614 225.655 62.1932 227.087 61.0568C228.518 59.8977 229.598 58.2727 230.325 56.1818C231.075 54.0909 231.45 51.6364 231.45 48.8182C231.45 46 231.075 43.5568 230.325 41.4886C229.598 39.4205 228.518 37.8182 227.087 36.6818C225.678 35.5455 223.939 34.9773 221.871 34.9773C219.825 34.9773 218.087 35.5341 216.655 36.6477C215.223 37.7614 214.121 39.3523 213.348 41.4205C212.598 43.4886 212.223 45.9545 212.223 48.8182ZM272.05 5.18182V75H255.38V5.18182H272.05ZM295.502 75.8864C292.161 75.8864 289.196 75.3295 286.605 74.2159C284.036 73.0795 282.002 71.375 280.502 69.1023C279.025 66.8068 278.286 63.9318 278.286 60.4773C278.286 57.5682 278.798 55.1136 279.821 53.1136C280.843 51.1136 282.252 49.4886 284.048 48.2386C285.843 46.9886 287.911 46.0455 290.252 45.4091C292.593 44.75 295.093 44.3068 297.752 44.0795C300.73 43.8068 303.127 43.5227 304.946 43.2273C306.764 42.9091 308.082 42.4659 308.9 41.8977C309.741 41.3068 310.161 40.4773 310.161 39.4091V39.2386C310.161 37.4886 309.559 36.1364 308.355 35.1818C307.15 34.2273 305.525 33.75 303.48 33.75C301.275 33.75 299.502 34.2273 298.161 35.1818C296.821 36.1364 295.968 37.4545 295.605 39.1364L280.23 38.5909C280.684 35.4091 281.855 32.5682 283.741 30.0682C285.65 27.5455 288.264 25.5682 291.582 24.1364C294.923 22.6818 298.934 21.9545 303.616 21.9545C306.957 21.9545 310.036 22.3523 312.855 23.1477C315.673 23.9205 318.127 25.0568 320.218 26.5568C322.309 28.0341 323.923 29.8523 325.059 32.0114C326.218 34.1705 326.798 36.6364 326.798 39.4091V75H311.116V67.7045H310.707C309.775 69.4773 308.582 70.9773 307.127 72.2045C305.696 73.4318 304.002 74.3523 302.048 74.9659C300.116 75.5795 297.934 75.8864 295.502 75.8864ZM300.65 64.9773C302.446 64.9773 304.059 64.6136 305.491 63.8864C306.946 63.1591 308.105 62.1591 308.968 60.8864C309.832 59.5909 310.264 58.0909 310.264 56.3864V51.4091C309.786 51.6591 309.207 51.8864 308.525 52.0909C307.866 52.2955 307.139 52.4886 306.343 52.6705C305.548 52.8523 304.73 53.0114 303.889 53.1477C303.048 53.2841 302.241 53.4091 301.468 53.5227C299.9 53.7727 298.559 54.1591 297.446 54.6818C296.355 55.2045 295.514 55.8864 294.923 56.7273C294.355 57.5455 294.071 58.5227 294.071 59.6591C294.071 61.3864 294.684 62.7045 295.911 63.6136C297.161 64.5227 298.741 64.9773 300.65 64.9773ZM351.741 45.1364V75H335.071V22.6364H350.923V32.25H351.503C352.662 29.0455 354.639 26.5341 357.435 24.7159C360.23 22.875 363.56 21.9545 367.423 21.9545C371.105 21.9545 374.298 22.7841 377.003 24.4432C379.73 26.0795 381.844 28.375 383.344 31.3295C384.866 34.2614 385.616 37.6932 385.594 41.625V75H368.923V44.8977C368.946 41.9886 368.207 39.7159 366.707 38.0795C365.23 36.4432 363.173 35.625 360.537 35.625C358.787 35.625 357.241 36.0114 355.901 36.7841C354.582 37.5341 353.56 38.6136 352.832 40.0227C352.128 41.4318 351.764 43.1364 351.741 45.1364ZM423.552 22.6364V34.9091H390.517V22.6364H423.552ZM397.438 10.0909H414.108V58.5341C414.108 59.5568 414.267 60.3864 414.586 61.0227C414.927 61.6364 415.415 62.0795 416.052 62.3523C416.688 62.6023 417.449 62.7273 418.336 62.7273C418.972 62.7273 419.642 62.6705 420.347 62.5568C421.074 62.4205 421.62 62.3068 421.983 62.2159L424.506 74.25C423.711 74.4773 422.586 74.7614 421.131 75.1023C419.699 75.4432 417.983 75.6591 415.983 75.75C412.074 75.9318 408.722 75.4773 405.927 74.3864C403.154 73.2727 401.029 71.5455 399.552 69.2045C398.097 66.8636 397.392 63.9205 397.438 60.375V10.0909Z" fill="#36725D"/>
                        </svg>
                    </div>
                </div>
                <div className="login-rightpart d-flex flex-column justify-content-center">
                    <div className="login-words">
                        <p className="fonts48 fontw800">Login</p>
                        <p className="fontw400 fonts20 login-welcome">Selamat datang kembali! Tolong masuk dengan akun anda</p>

                    </div>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="login-formpart">
                            <label htmlFor="email" className="form-label fonts24 fontw800">Email</label>
                            <input value={form.email} onChange={handleEmail} type="text" id="email" className={alert.alertemail.classes} placeholder="Masukkan Email"/>
                            <p className="text-danger fonts12 fontw400">{alert.alertemail.message}</p>
                        </div>
                        <div className="login-formpart ">
                            <label htmlFor="password" className="form-label fonts24 fontw800">Password</label>
                            <input value={form.password} onChange={handlePassword} type="password" id="password" className={alert.alertpassword.classes} placeholder="Masukkan Password"/>
                            <p className="text-danger fonts12 fontw400">{alert.alertpassword.message}</p>
                        </div>
                        {/* <div className="login-formpart"> */}
                            <div className="form-check">
                                <input checked={form.ingatcheck} onChange={handleIngat}  className="form-check-input login-checkbox" type="checkbox" defaultValue="" id="flexCheckDefault" />
                                <label className="form-check-label login-checkboxlabel fontw600 fonts12" htmlFor="flexCheckDefault">
                                    Ingat Saya
                                </label>
                            </div>
                        {/* </div> */}
                        <div className="login-formpart-final">
                            <button type="submit" className="login-masukbtn fontw600 fonts20 text-light">Masuk</button>
                        </div>
                    </form>
                </div>
            </div>
        
        </>
     )
}