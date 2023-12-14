import { useEffect, useState } from "react";
import LineChart from "../../components/LineChart/LineChart"
import Persentase from "../../components/Persentase/Persentase";
import Layout from "../../layout/Layout"
import "./Dashboard.css"
import { FaAngleDown } from "react-icons/fa6";
import CardDashboard from "../../components/dashboard card/CardPenggunaBaru/indeks";
import card1 from '../../assets/DashboardCardImg/card1.svg'
import card from '../../assets/DashboardCardImg/card.svg'
import card2 from '../../assets/DashboardCardImg/card2.svg'
import cloud from '../../assets/DashboardCardImg/cloud.svg'
import CardCuaca from "../../components/CardCuaca/indeks";
import { Plant } from "../../assets";
import axiosWithAuth from "../../api/axios";


export default function Dashboard(){
    const [dataBaruDitanam, setDataBaruDitanam] = useState({
        color: "#059669",
        halfdone: 20,
        halfundone: 50,
        nama: "Baru Ditanam"
    })
    const [dataPerawatan, setDataPerawatan] = useState({
        color: "#D97706",
        halfdone: 100,
        halfundone: 50,
        nama: "Perawatan"
    })
    const [dataPanen, setPanen] = useState({
        color: "#2563EB",
        halfdone: 80,
        halfundone: 50,
        nama: "Panen"
    })
    // begin : dummy data untuk data pada chart
    const generateRandomData = (count) => {
        return Array.from({ length: count }, (_, index) => ({
            month: (index + 1).toString(),
            value: Math.floor(Math.random() * 451),
        }));
    };
    const data = [
        {
            dataSetName: 'bulan ini',
            data: generateRandomData(9),
            color: '#4B567E',
        },
        {
            dataSetName: 'bulan lalu',
            data: generateRandomData(9),
            color: '#847042',
        },
    ];
    const [datacard, setDataCard] = useState({
        penggunabaru: {
            nama: "Pengguna Baru",
            jumlah: 1000,
            img: card
        },
        tanamanbaru:{
            nama: "Tanaman Baru",
            jumlah: 130,
            img: card1
        },
        riwayattanam:{
            nama: "Riwayat Tanam",
            jumlah: 420,
            img: card2
        }
    })
    const breadcrumbsobjectexample = [
    {
      crumblink: "/dashboard",
      crumbname: "Dashboard",
    }]
    const [datasuhu, setDataSuhu] = useState({
        suhunama: "Sedikit Awan",
        suhu: 25,
        suhupic: cloud
    })

    const [datafarmer, setDatafarmer] = useState([
        {
            nama: "Farmer 1",
            farmerpic: "/",
            leavepoint: 4
        },
        {
            nama: "Farmer 4",
            farmerpic: "/",
            leavepoint: 3
        },
        {
            nama: "Farmer 2",
            farmerpic: "/",
            leavepoint: 5
        },
    ])
    async function GetCuaca(){
        let weathermap = []
        await axiosWithAuth.get("https://api.open-meteo.com/v1/forecast?latitude=3.5833&longitude=98.6667&hourly=temperature_2m,weather_code&timezone=auto&forecast_days=1")
        .then((response)=>{
            const resp = response.data
            weathermap = resp.hourly.time.map((value, index)=>{
                var weather
                // switch (resp.hourly.weather_code[index]) {
                //     case 0:
                //         weather = "Cerah Tanpa Awan"
                //         break;
                //     case 1,2,3:
                //         weather = "Berawan"
                //         break;
                //     case 45,48:
                //         weather = "Berkabut"
                //         break;
                //     case 51,53,55:
                //         weather = "Gerimis"
                //         break;
                //     case 56,57:
                //         weather = "Gerimis dingin"
                //         break;
                //     case 61,63,65:
                //         weather = "Hujan menengah ke atas"
                //         break;
                //     case 66,67:
                //         weather = "Hujan membeku"
                //         break;
                //     case 71,73,75:
                //         weather = "Turun Salju"
                //         break;
                //     case 77:
                //         weather = "Bersalju"
                //         break;
                //     case 80,81,82:
                //         weather = "Hujan deras"
                //         break;
                //     case 85,86:
                //         weather = "Hujan Salju"
                //         break;
                //     case 95:
                //         weather = "Badai"
                //         break;
                //     case 96,99:
                //         weather = "Badah dengan angin"
                //         break;
                //     default:
                //         weather = "Unknown"
                //         break;
                // }
                if (resp.hourly.weather_code[index] === 0) {
                    weather = "Cerah Tanpa Awan";
                } else if (resp.hourly.weather_code[index] === 1 || resp.hourly.weather_code[index] === 2 || resp.hourly.weather_code[index] === 3) {
                    weather = "Berawan";
                } else if (resp.hourly.weather_code[index] === 45 || resp.hourly.weather_code[index] === 48) {
                    weather = "Berkabut";
                } else if (resp.hourly.weather_code[index] === 51 || resp.hourly.weather_code[index] === 53 || resp.hourly.weather_code[index] === 55) {
                    weather = "Gerimis";
                } else if (resp.hourly.weather_code[index] === 56 || resp.hourly.weather_code[index] === 57) {
                    weather = "Gerimis dingin";
                } else if (resp.hourly.weather_code[index] === 61 || resp.hourly.weather_code[index] === 63 || resp.hourly.weather_code[index] === 65) {
                    weather = "Hujan menengah ke atas";
                } else if (resp.hourly.weather_code[index] === 66 || resp.hourly.weather_code[index] === 67) {
                    weather = "Hujan membeku";
                } else if (resp.hourly.weather_code[index] === 71 || resp.hourly.weather_code[index] === 73 || resp.hourly.weather_code[index] === 75) {
                    weather = "Turun Salju";
                } else if (resp.hourly.weather_code[index] === 77) {
                    weather = "Bersalju";
                } else if (resp.hourly.weather_code[index] === 80 || resp.hourly.weather_code[index] === 81 || resp.hourly.weather_code[index] === 82) {
                    weather = "Hujan deras";
                } else if (resp.hourly.weather_code[index] === 85 || resp.hourly.weather_code[index] === 86) {
                    weather = "Hujan salju";
                } else if (resp.hourly.weather_code[index] === 95) {
                    weather = "Badai";
                } else if (resp.hourly.weather_code[index] === 96 || resp.hourly.weather_code[index] === 99) {
                    weather = "Badai dengan hujan es";
                } else {
                    weather = "Unknown";
                }
                console.log(resp.hourly.weather_code[index])
                return {
                    time: value,
                    temperature: resp.hourly.temperature_2m[index],
                    weather_name: weather
                }
            })
            console.log(weathermap)

        })
        let currenttime = new Date(new Date().toISOString())
        const hour = currenttime.getHours()
        const currentweather = weathermap.filter(obj=>{
            const date = new Date(obj.time);
            return date.getHours() === hour
        })
        const weatherconverted = {
            suhunama: currentweather[0].weather_name,
            suhu: currentweather[0].temperature,
            suhupic: cloud
        }
        console.log("current time", currentweather)
        setDataSuhu(weatherconverted)
    }

    useEffect(()=>{
        GetCuaca()
    },[])



    return (
        <>
            <Layout pagetitle={"Dashboard"} breadcrumbs={breadcrumbsobjectexample}>
                <div className="dashboard-container">
                    <div className="dashboard-toppart d-flex align-items-center">
                        <CardDashboard data={datacard.penggunabaru} />
                        <CardDashboard data={datacard.tanamanbaru} />
                        <CardDashboard data={datacard.riwayattanam} />
                        <CardCuaca data={datasuhu}/>
                    </div>
                    <div className="dashboard-middlepart">
                        <div className="dashboard-middle-leftpart">
                            <div className="dashboard-chartdiv">
                                <LineChart data={data} />
                            </div>
                            <div className="dasboard-persentasediv bg-light container-fluid d-flex flex-column">
                                <div className="dashboard-persentase-toppart d-flex justify-content-between align-items-center">
                                    <div className="d-flex flex-column">
                                        <p className="fontw700 fonts20">Persentase Global</p>
                                        <p className="fontw600 fonts14" >Data Penanaman tahunan</p>
                                    </div>
                                    <div className="">
                                        <button className="dashboard-btn fonts14 fontw600">2023</button>
                                    </div>
                                </div>
                                <div className="dashboard-persentase-bottompart d-flex justify-content-between align-items-center">
                                    <Persentase datainserted={dataBaruDitanam}/>
                                    <Persentase datainserted={dataPerawatan}/>
                                    <Persentase datainserted={dataPanen}/>
                                </div>
                            </div>
                        </div>
                        
                        
                        
                        
                        
                        <div className="dashboard-middle-rightpart">
                            <div className="dashboard-topfarmer">
                                <div className="d-flex dashboard-topfarmer-toppart">
                                    <p className="fonts20 fontw600 text-removemargin">Top Farmer</p>
                                    <button className="dashboard-btn fonts12 fontw400" type="button" data-bs-toggle="dropdown">Bulan <FaAngleDown /></button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                {/* begin: kemungkinaan ada hover effect */}
                                {
                                    datafarmer.length!=0 ?
                                    datafarmer.map((item)=>{
                                        return(
                                            <div className="d-flex align-items-center justify-content-between dashboard-topfarmer-farmerdiv">
                                                <div className="d-flex align-items-center dashboard-farmerdiv-leftpart">
                                                    {/* <object data={item.farmerpic} type="image/png"> */}
                                                        <img src={"..//assets/img/avatar/avatar (5).png"} className="dashboard-farmerimg" width={64} height={64} />
                                                    {/* </object> */}
                                                    <p className="fonts14 fontw600 text-removemargin dashboard-farmername">{item.nama}</p>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center dashboard-farmerdiv-rightpart">
                                                    <img className="dashboard-leavelogofarmer" src={Plant} width={18} height={18} />
                                                    <p className="fonts14 fontw600 text-removemargin">{item.leavepoint}</p>
                                                </div>
                                            </div>
                                        )
                                    }) :
                                    <div className="d-flex align-items-center justify-content-between dashboard-topfarmer-farmerdiv">
                                        <p>No Farmer Found...</p>
                                    </div>
                                }
                                {/* end : kemungkinaan ada hover effect */}

                            </div>
                        </div>
                    </div>
                
                </div>
            </Layout>
        </>
    )
}


