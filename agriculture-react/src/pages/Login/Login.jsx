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
                        <svg xmlns="http://www.w3.org/2000/svg" width="205" height="204" viewBox="0 0 205 204" fill="none">
                            <path d="M138.098 77.826C136.262 49.368 124.736 21.624 103.112 0C81.284 21.828 69.248 49.572 66.902 77.826C79.958 84.762 91.994 93.738 102.5 104.652C113.006 93.84 125.042 84.864 138.098 77.826ZM103.01 32.538C109.436 43.044 113.924 54.774 116.27 67.014C111.476 70.074 106.988 73.44 102.602 77.01C98.318 73.542 93.728 70.176 89.036 67.116C91.586 54.876 96.278 43.146 103.01 32.538ZM102.5 137.19C94.136 124.44 83.528 113.322 71.288 104.55C69.962 103.632 68.534 102.918 67.208 101.898C68.534 102.816 69.962 103.632 71.186 104.448C51.296 90.066 26.918 81.6 0.5 81.6C0.5 135.864 34.772 181.764 82.406 198.798C88.832 201.144 95.564 202.878 102.5 204C109.436 202.776 116.066 201.042 122.594 198.798C170.228 181.764 204.5 135.864 204.5 81.6C161.864 81.6 124.43 103.734 102.5 137.19ZM115.964 179.52C111.476 181.05 106.988 182.274 102.398 183.294C97.91 182.376 93.524 181.152 89.342 179.622C55.784 167.586 31.202 138.924 23.552 104.652C34.772 107.304 45.482 111.894 55.376 118.218L55.172 118.32C56.498 119.238 57.824 120.156 59.15 120.87L59.864 121.278C69.962 128.622 78.632 137.7 85.466 148.308L102.5 174.42L119.534 148.41C126.572 137.7 135.344 128.52 145.34 121.278L146.054 120.768C146.972 120.258 147.89 119.646 148.808 119.034L148.706 118.83C158.702 112.2 169.82 107.304 181.448 104.55C173.798 138.924 149.318 167.586 115.964 179.52ZM71.798 104.856C71.594 104.754 71.39 104.55 71.288 104.448C71.288 104.448 71.39 104.448 71.39 104.55C71.492 104.652 71.594 104.754 71.798 104.856Z" fill="#36725D"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="417" height="75" viewBox="0 0 417 75" fill="none">
                            <path d="M13.0804 58.5557H0.5L19.6688 3.16445H34.7978L53.9395 58.5557H41.3591L27.4502 15.8222H27.0164L13.0804 58.5557ZM12.2941 36.7833H42.0099V45.925H12.2941V36.7833Z" fill="#36725D"/>
                            <path d="M77.2295 75C73.4879 75 70.2796 74.4861 67.6044 73.4583C64.9474 72.4486 62.8325 71.0692 61.26 69.3202C59.6875 67.5712 58.6662 65.6058 58.1963 63.4241L68.8787 61.9906C69.2041 62.8201 69.7192 63.5954 70.4242 64.3166C71.1291 65.0379 72.06 65.6149 73.2168 66.0476C74.3917 66.4984 75.8196 66.7238 77.5006 66.7238C80.0131 66.7238 82.0827 66.1107 83.7095 64.8846C85.3543 63.6765 86.1768 61.648 86.1768 58.7991V51.1991H85.6887C85.1826 52.353 84.4235 53.4439 83.4112 54.4717C82.399 55.4995 81.0976 56.3379 79.507 56.987C77.9164 57.6361 76.0185 57.9607 73.8133 57.9607C70.6862 57.9607 67.8394 57.2394 65.2727 55.797C62.7241 54.3365 60.6906 52.1096 59.1723 49.1165C57.6721 46.1053 56.9219 42.3008 56.9219 37.7029C56.9219 32.9968 57.6901 29.066 59.2265 25.9106C60.7629 22.7551 62.8055 20.3931 65.3541 18.8244C67.9208 17.2557 70.7315 16.4713 73.7862 16.4713C76.1179 16.4713 78.07 16.868 79.6426 17.6614C81.2151 18.4367 82.4804 19.4104 83.4384 20.5824C84.4144 21.7364 85.1646 22.8723 85.6887 23.9903H86.1225V17.0123H97.5913V58.9614C97.5913 62.4955 96.7237 65.4526 94.9884 67.8327C93.2532 70.2128 90.8492 71.9978 87.7764 73.1879C84.7217 74.396 81.2061 75 77.2295 75ZM77.4735 49.3058C79.3353 49.3058 80.9078 48.846 82.1912 47.9264C83.4926 46.9888 84.4867 45.6545 85.1736 43.9235C85.8785 42.1745 86.231 40.0829 86.231 37.6488C86.231 35.2146 85.8876 33.1049 85.2007 31.3199C84.5138 29.5168 83.5197 28.1194 82.2183 27.1277C80.9169 26.136 79.3353 25.6401 77.4735 25.6401C75.5756 25.6401 73.976 26.154 72.6745 27.1818C71.3731 28.1915 70.388 29.5979 69.7192 31.401C69.0504 33.2041 68.7161 35.2867 68.7161 37.6488C68.7161 40.0469 69.0504 42.1204 69.7192 43.8695C70.4061 45.6004 71.3912 46.9437 72.6745 47.8994C73.976 48.837 75.5756 49.3058 77.4735 49.3058Z" fill="#36725D"/>
                            <path d="M106.783 58.5557V17.0123H117.98V24.2607H118.414C119.173 21.6823 120.447 19.7349 122.237 18.4187C124.026 17.0844 126.087 16.4172 128.419 16.4172C128.997 16.4172 129.621 16.4533 130.289 16.5254C130.958 16.5976 131.546 16.6967 132.052 16.8229V27.0465C131.51 26.8842 130.759 26.74 129.801 26.6138C128.843 26.4876 127.967 26.4244 127.171 26.4244C125.472 26.4244 123.954 26.7941 122.617 27.5334C121.297 28.2546 120.249 29.2643 119.471 30.5626C118.712 31.8608 118.333 33.3574 118.333 35.0523V58.5557H106.783Z" fill="#36725D"/>
                            <path d="M138.023 58.5557V17.0123H149.574V58.5557H138.023ZM143.826 11.6571C142.108 11.6571 140.635 11.0891 139.406 9.95312C138.195 8.79913 137.59 7.41976 137.59 5.815C137.59 4.22827 138.195 2.86693 139.406 1.73098C140.635 0.576992 142.108 0 143.826 0C145.543 0 147.007 0.576992 148.218 1.73098C149.447 2.86693 150.062 4.22827 150.062 5.815C150.062 7.41976 149.447 8.79913 148.218 9.95312C147.007 11.0891 145.543 11.6571 143.826 11.6571Z" fill="#36725D"/>
                            <path d="M177.642 59.3671C173.376 59.3671 169.707 58.4656 166.634 56.6625C163.58 54.8413 161.23 52.317 159.585 49.0894C157.958 45.8619 157.145 42.1475 157.145 37.9463C157.145 33.6909 157.967 29.9585 159.612 26.749C161.275 23.5215 163.634 21.0061 166.689 19.203C169.743 17.3819 173.376 16.4713 177.588 16.4713C181.221 16.4713 184.402 17.1295 187.132 18.4457C189.861 19.762 192.021 21.6102 193.612 23.9903C195.202 26.3704 196.079 29.1652 196.242 32.3747H185.342C185.035 30.3011 184.222 28.6332 182.902 27.3711C181.601 26.0909 179.892 25.4508 177.778 25.4508C175.988 25.4508 174.425 25.9376 173.087 26.9113C171.768 27.8669 170.737 29.2643 169.996 31.1035C169.255 32.9427 168.885 35.1695 168.885 37.784C168.885 40.4345 169.246 42.6884 169.969 44.5456C170.71 46.4028 171.75 47.8182 173.087 48.7919C174.425 49.7656 175.988 50.2524 177.778 50.2524C179.097 50.2524 180.281 49.982 181.329 49.441C182.396 48.9001 183.273 48.1158 183.959 47.088C184.664 46.0422 185.125 44.789 185.342 43.3285H196.242C196.061 46.502 195.193 49.2968 193.639 51.7129C192.102 54.1111 189.979 55.9863 187.267 57.3386C184.556 58.691 181.348 59.3671 177.642 59.3671Z" fill="#36725D"/>
                            <path d="M230.343 40.8673V17.0123H241.893V58.5557H230.804V51.0097H230.37C229.43 53.4439 227.867 55.4003 225.679 56.8788C223.51 58.3574 220.862 59.0966 217.735 59.0966C214.952 59.0966 212.503 58.4656 210.388 57.2034C208.273 55.9412 206.619 54.1471 205.426 51.8211C204.251 49.4951 203.655 46.7093 203.637 43.4638V17.0123H215.187V41.4082C215.205 43.8604 215.865 45.7988 217.166 47.2232C218.467 48.6477 220.212 49.3599 222.399 49.3599C223.791 49.3599 225.092 49.0444 226.303 48.4133C227.514 47.7642 228.49 46.8085 229.231 45.5463C229.99 44.2842 230.361 42.7245 230.343 40.8673Z" fill="#36725D"/>
                            <path d="M262.682 3.16445V58.5557H251.132V3.16445H262.682Z" fill="#36725D"/>
                            <path d="M294.085 17.0123V25.6671H269.006V17.0123H294.085ZM274.699 7.05915H286.25V45.7898C286.25 46.8536 286.412 47.683 286.738 48.278C287.063 48.855 287.515 49.2607 288.093 49.4951C288.69 49.7295 289.377 49.8467 290.154 49.8467C290.696 49.8467 291.238 49.8017 291.781 49.7115C292.323 49.6033 292.739 49.5222 293.028 49.4681L294.844 58.0418C294.266 58.2221 293.453 58.4295 292.404 58.6639C291.356 58.9163 290.082 59.0696 288.581 59.1237C285.798 59.2319 283.358 58.8622 281.261 58.0148C279.182 57.1673 277.564 55.8511 276.408 54.066C275.251 52.2809 274.681 50.027 274.699 47.3044V7.05915Z" fill="#36725D"/>
                            <path d="M328.315 40.8673V17.0123H339.865V58.5557H328.776V51.0097H328.342C327.402 53.4439 325.839 55.4003 323.652 56.8788C321.483 58.3574 318.835 59.0966 315.708 59.0966C312.924 59.0966 310.475 58.4656 308.36 57.2034C306.245 55.9412 304.591 54.1471 303.399 51.8211C302.224 49.4951 301.627 46.7093 301.609 43.4638V17.0123H313.159V41.4082C313.177 43.8604 313.837 45.7988 315.138 47.2232C316.44 48.6477 318.184 49.3599 320.371 49.3599C321.763 49.3599 323.064 49.0444 324.275 48.4133C325.487 47.7642 326.463 46.8085 327.204 45.5463C327.963 44.2842 328.333 42.7245 328.315 40.8673Z" fill="#36725D"/>
                            <path d="M349.104 58.5557V17.0123H360.302V24.2607H360.736C361.495 21.6823 362.769 19.7349 364.558 18.4187C366.348 17.0844 368.409 16.4172 370.74 16.4172C371.319 16.4172 371.942 16.4533 372.611 16.5254C373.28 16.5976 373.867 16.6967 374.373 16.8229V27.0465C373.831 26.8842 373.081 26.74 372.123 26.6138C371.165 26.4876 370.288 26.4244 369.493 26.4244C367.794 26.4244 366.276 26.7941 364.938 27.5334C363.618 28.2546 362.57 29.2643 361.793 30.5626C361.034 31.8608 360.654 33.3574 360.654 35.0523V58.5557H349.104Z" fill="#36725D"/>
                            <path d="M397.385 59.3671C393.102 59.3671 389.414 58.5016 386.323 56.7706C383.251 55.0216 380.883 52.5514 379.22 49.3599C377.557 46.1504 376.725 42.3549 376.725 37.9733C376.725 33.7 377.557 29.9495 379.22 26.722C380.883 23.4944 383.223 20.9791 386.242 19.176C389.279 17.3729 392.839 16.4713 396.924 16.4713C399.672 16.4713 402.23 16.9131 404.597 17.7966C406.983 18.6621 409.062 19.9693 410.833 21.7184C412.623 23.4674 414.015 25.6672 415.009 28.3177C416.003 30.9502 416.5 34.0335 416.5 37.5676V40.7321H381.335V33.5918H405.628C405.628 31.9329 405.266 30.4634 404.543 29.1832C403.82 27.903 402.817 26.9023 401.534 26.181C400.268 25.4418 398.795 25.0721 397.114 25.0721C395.361 25.0721 393.806 25.4778 392.451 26.2892C391.113 27.0826 390.065 28.1554 389.306 29.5078C388.547 30.8421 388.158 32.3296 388.14 33.9704V40.7591C388.14 42.8146 388.519 44.5907 389.279 46.0873C390.056 47.5838 391.149 48.7378 392.559 49.5492C393.969 50.3606 395.641 50.7663 397.575 50.7663C398.859 50.7663 400.033 50.586 401.1 50.2254C402.166 49.8648 403.079 49.3238 403.838 48.6026C404.597 47.8814 405.176 46.9978 405.573 45.952L416.256 46.6552C415.714 49.2156 414.602 51.4515 412.921 53.3628C411.258 55.256 409.107 56.7346 406.468 57.7984C403.847 58.8442 400.82 59.3671 397.385 59.3671Z" fill="#36725D"/>
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