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
import { CuacaBerawan, CuacaBerkabut, CuacaHujan, CuacaHujanPetir, CuacaSedikitBerawan, CuacaCerah } from "../../assets";



import CardCuaca from "../../components/CardCuaca/indeks";
import { Plant } from "../../assets";
import axiosWithAuth from "../../api/axios";
import { PersentaseGlobalDatas, TopFarmerDatas } from "../../api/datadashboard/DashboardDatas";
import axios from "axios";


export default function Dashboard(){
    const [datapersentaseglobal, setDataPersentaseGlobal] = useState([
        {
        nama: "Baru Ditanam",
        jumlah: 0
        },
        {
        nama: "Perawatan",
        jumlah: 0
        },
        {
        nama: "Panen",
        jumlah: 0
        },
        {
        nama: "Total",
        jumlah: 0
        }
    ])

    const [datacard, setDataCard] = useState({
        penggunabaru: {
            nama: "Pengguna Baru",
            jumlah: 0,
            img: card
        },
        tanamanbaru:{
            nama: "Tanaman Baru",
            jumlah: 0,
            img: card1
        },
        riwayattanam:{
            nama: "Riwayat Tanam",
            jumlah: 0,
            img: card2
        }
    })
    const [datasuhu, setDataSuhu] = useState({
        suhunama: "unknown",
        suhu: 0,
        suhupic: cloud
    })
    const [datalokasi, setDataLokasi] = useState({latitude: 0, longitude:0})
    const [datafarmer, setDatafarmer] = useState([])
    const [selecteddatafarmer, setSelectedDataFarmer] = useState([])
    const [selectedtopfarmermonth, setSelectedTopFarmerMonth] = useState({month: "December", year: 2023})
    function handleTopFarmerMonth(e){
        console.log(e.target.value)
        const parts = e.target.value.split(" "); // Split the string by space 
        const monthselected = parts[0];
        const year = parts[1];
        setSelectedTopFarmerMonth({month: monthselected, year: year})
        const selectdatafarmerlist = datafarmer.find((data) => data.month_name === monthselected && data.year == year);
        setSelectedDataFarmer(selectdatafarmerlist.top_farmers)

    }
    
    const [datachart, setDataChart]= useState([
        {
            dataSetName: 'Bulan ini',
            data: [{
                date: "",
                value: 0,
            },],
            color: '#2563EB',
        },
        {
            dataSetName: 'Bulan lalu',
            data: [{
                date: "",
                value: 0,
            },],
            color: '#059669',
        },
    ])


    
    async function GetCuaca(){
        navigator.geolocation.getCurrentPosition((position)=>{
            setDataLokasi({latitude: position.coords.latitude, longitude: position.coords.longitude})
        })


        let weathermap = []
        await axiosWithAuth.get("https://api.open-meteo.com/v1/forecast?latitude="+datalokasi.latitude+"&longitude="+datalokasi.longitude+"&hourly=temperature_2m,weather_code&timezone=auto&forecast_days=1")
        .then((response)=>{
            const resp = response.data
            weathermap = resp.hourly.time.map((value, index)=>{
                var weather
                var weather_img
                if (resp.hourly.weather_code[index] === 0) {
                    weather = "Cerah Tanpa Awan";
                    weather_img = CuacaCerah
                } else if (resp.hourly.weather_code[index] === 1 || resp.hourly.weather_code[index] === 2 || resp.hourly.weather_code[index] === 3) {
                    weather = "Berawan";
                    weather_img = CuacaBerawan
                } else if (resp.hourly.weather_code[index] === 45 || resp.hourly.weather_code[index] === 48) {
                    weather = "Berkabut";
                    weather_img = CuacaBerkabut
                } else if (resp.hourly.weather_code[index] === 51 || resp.hourly.weather_code[index] === 53 || resp.hourly.weather_code[index] === 55) {
                    weather = "Gerimis";
                    weather_img = CuacaHujan
                } else if (resp.hourly.weather_code[index] === 56 || resp.hourly.weather_code[index] === 57) {
                    weather = "Gerimis dingin";
                    weather_img = CuacaHujan
                } else if (resp.hourly.weather_code[index] === 61 || resp.hourly.weather_code[index] === 63 || resp.hourly.weather_code[index] === 65) {
                    weather = "Hujan menengah ke atas";
                    weather_img = CuacaHujan
                } else if (resp.hourly.weather_code[index] === 66 || resp.hourly.weather_code[index] === 67) {
                    weather = "Hujan membeku";
                    weather_img = CuacaHujan
                } else if (resp.hourly.weather_code[index] === 71 || resp.hourly.weather_code[index] === 73 || resp.hourly.weather_code[index] === 75) {
                    weather = "Turun Salju";
                    weather_img = CuacaHujan
                } else if (resp.hourly.weather_code[index] === 77) {
                    weather = "Bersalju";
                    weather_img = CuacaHujan
                } else if (resp.hourly.weather_code[index] === 80 || resp.hourly.weather_code[index] === 81 || resp.hourly.weather_code[index] === 82) {
                    weather = "Hujan deras";
                    weather_img = CuacaHujanPetir
                } else if (resp.hourly.weather_code[index] === 85 || resp.hourly.weather_code[index] === 86) {
                    weather = "Hujan salju";
                    weather_img = CuacaHujan
                } else if (resp.hourly.weather_code[index] === 95) {
                    weather = "Badai";
                    weather_img = CuacaHujanPetir
                } else if (resp.hourly.weather_code[index] === 96 || resp.hourly.weather_code[index] === 99) {
                    weather = "Badai dengan hujan es";
                    weather_img = CuacaHujanPetir
                } else {
                    weather = "Unknown";
                    weather_img = CuacaCerah
                }
                // console.log(resp.hourly.weather_code[index])
                return {
                    time: value,
                    temperature: resp.hourly.temperature_2m[index],
                    weather_name: weather,
                    weather_img: weather_img
                }
            })
            // console.log(weathermap)

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
            suhupic: currentweather[0].weather_img
        }
        console.log("current time", currentweather)
        setDataSuhu(weatherconverted)
    }
    async function GetCardsData(){
        axiosWithAuth.get('/admin/dashboard').then((response) => {
            const resp = response.data.data
            setDataCard({...datacard,
                penggunabaru: {
                    ...datacard.penggunabaru,
                    jumlah: resp.total_new_user
                },
                tanamanbaru: {
                    ...datacard.tanamanbaru,
                    jumlah: resp.total_new_plant
                },
                riwayattanam: {
                    ...datacard.riwayattanam,
                    jumlah: resp.total_plant_history
                }

            })
        })
    }
    async function GetTopFarmer(){
        try {
            const response = await axiosWithAuth.get('/admin/user-plants/top-farmer');
            const resp = response.data.data;
    
            console.log("huh,", resp);
            if (resp && resp.length > 0) {
                setDatafarmer(resp);
                setSelectedDataFarmer(resp[0].top_farmers);
            } else {
                console.error("Data tidak ditemukan atau kosong");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    
    async function GetAnalyticsData(){
        axiosWithAuth.get('/admin/user-plants/statistics').then((response) => {
            const resp = response.data.data
            const currentmonth = resp[0]
            const lastmonth = resp[1]
            var currentmonthdate = {month:0, year:0}
            var lastmonthdate = {month:0, year:0}
            // console.log("chart data function currentmonth: ", currentmonth)
            // console.log("chart data lastmonth: ", lastmonth)
            // cek dulu exist data atau enggak
            if(currentmonth.list != null){
                const parts = currentmonth.list[0].date.split('-');
                currentmonthdate = {month:parts[1], year:parts[0]}
            }
            if(lastmonth.list != null){
                const parts = lastmonth.list[0].date.split('-');
                lastmonthdate = {month:parts[1], year:parts[0]}
            }

            const listcurrentmonth = []
            const listlastmonth = []
            for (let day = 1; day <= 31; day++) {
                const currentDate = `${currentmonthdate.year}-${currentmonthdate.month}-${day.toString().padStart(2, '0')}T00:00:00Z`;
                const lastDate = `${lastmonthdate.year}-${lastmonthdate.month}-${day.toString().padStart(2, '0')}T00:00:00Z`;
                const findexistscurrent = currentmonth.list ? currentmonth.list.find((item) => item.date === currentDate) : 0;
                const findexistslast = lastmonth.list ? lastmonth.list.find((item) => item.date === lastDate) : 0
                if(findexistscurrent){
                    // listcurrentmonth.push(findexistscurrent)
                    listcurrentmonth.push({date: day, total: findexistscurrent.total})
                    // console.log("findexistscurrent value",findexistscurrent)
                }else{
                    listcurrentmonth.push({date: day, total: 0})
                }
                if(findexistslast){
                    // listlastmonth.push(findexistslast)
                    listlastmonth.push({date: day, total: findexistslast.total})
                }else{
                    listlastmonth.push({date: day, total: 0})
                }
            }
            // console.log("listcurrentmonth: ", listcurrentmonth)
            // console.log("listlastmonth: ", listlastmonth)
            setDataChart([
                {
                    dataSetName: 'Bulan ini',
                    data: listcurrentmonth,
                    color: '#2563EB',
                },
                {
                    dataSetName: 'Bulan lalu',
                    data: listlastmonth,
                    color: '#059669',
                },
            ])
        })
    }
    async function GetPercentageData(){
        axios.get('https://83af003f-e467-4a03-bda6-0cca0323f795.mock.pstmn.io/persentasedata').then((response) => {
            setDataPersentaseGlobal(response.data.data)
            console.log(response)
    
    })
    }



    useEffect(()=>{
        GetCuaca()
        GetCardsData()
        GetTopFarmer()
        GetAnalyticsData()
        GetPercentageData()
    },[])

    const breadcrumbsobjectexample = [
    {
      crumblink: "/dashboard",
      crumbname: "Dashboard",
    }]


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
                                <LineChart data={datachart} />
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
                                <div className="dashboard-persentase-bottompart d-flex justify-content-center align-items-center">
                                    {/* <Persentase datainserted={dataBaruDitanam}/>
                                    <Persentase datainserted={dataPerawatan}/>
                                    <Persentase datainserted={dataPanen}/> */}
                                    <Persentase datainserted={datapersentaseglobal}/>
                                </div>
                            </div>
                        </div>
                        <div className="dashboard-middle-rightpart">
                            <div className="dashboard-topfarmer">
                                <div className="d-flex dashboard-topfarmer-toppart">
                                    <p className="fonts20 fontw600 text-removemargin">Top Farmer</p>
                                    <select onChange={handleTopFarmerMonth} className="dashboard-btn fonts12 fontw400" aria-label="Default select example">
                                        {
                                            datafarmer.length > 0 ?
                                            datafarmer.map((item)=>{
                                                return (
                                                    <option key={item.id} value={item.id}>{item.month_name} {item.year}</option>
                                                )
                                            }):
                                            <option>Loading...</option>
                                        }
                                    </select>
                                </div>
                                {/* begin: kemungkinaan ada hover effect */}
                                {
                                    selecteddatafarmer.length!=0 ?
                                    selecteddatafarmer.map((item)=>{
                                        return(
                                            <div className="d-flex align-items-center justify-content-between dashboard-topfarmer-farmerdiv">
                                                <div className="d-flex align-items-center dashboard-farmerdiv-leftpart">
                                                    {/* <object data={item.farmerpic} type="image/png"> */}
                                                        <img src={item.farmerpic} className="dashboard-farmerimg" width={64} height={64} />
                                                    {/* </object> */}
                                                    <p className="fonts14 fontw600 text-removemargin dashboard-farmername">{item.name}</p>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center dashboard-farmerdiv-rightpart">
                                                    <img className="dashboard-leavelogofarmer" src={Plant} width={18} height={18} />
                                                    <p className="fonts14 fontw600 text-removemargin">{item.leave_point}</p>
                                                </div>
                                            </div>
                                        )
                                    }) :
                                    <div className="d-flex align-items-center justify-content-between dashboard-topfarmer-farmerdiv">
                                        <p></p>
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


