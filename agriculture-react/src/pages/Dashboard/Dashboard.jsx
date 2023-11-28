import { useState } from "react";
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
        // {
        //     nama: "Farmer 1",
        //     farmerpic: "/",
        //     leavepoint: 4
        // },
        // {
        //     nama: "Farmer 4",
        //     farmerpic: "/",
        //     leavepoint: 3
        // },
        // {
        //     nama: "Farmer 2",
        //     farmerpic: "/",
        //     leavepoint: 5
        // },
    ])

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