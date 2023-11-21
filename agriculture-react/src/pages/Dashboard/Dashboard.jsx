import { useState } from "react";
import LineChart from "../../components/LineChart/LineChart"
import Persentase from "../../components/Persentase/Persentase";
import Layout from "../../layout/Layout"
import "./Dashboard.css"
import { FaAngleDown } from "react-icons/fa6";


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
    //  end : dummy data untuk data pada chart



    return (
        <>
            <Layout pagetitle={"Dashboard"} >
                <div className="dashboard-container">
                    <div className="dashboard-toppart">
                    
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
                                    <button className="dashboard-btn fonts12 fontw400">Bulan <FaAngleDown /></button>
                                </div>
                                {/* begin: kemungkinaan ada hover effect */}
                                <div className="d-flex align-items-center justify-content-between dashboard-topfarmer-farmerdiv">
                                    <div className="d-flex align-items-center dashboard-farmerdiv-leftpart">
                                        <img src="/" className="dashboard-farmerimg" width={64} height={64} />
                                        <p className="fonts14 fontw600 text-removemargin dashboard-farmername">Nama Farmer</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center dashboard-farmerdiv-rightpart">
                                        <img className="dashboard-leavelogofarmer" src="/" width={18} height={18} />
                                        <p className="fonts14 fontw600 text-removemargin">0</p>
                                    </div>
                                </div>
                                {/* end : kemungkinaan ada hover effect */}

                                <div className="d-flex align-items-center justify-content-between dashboard-topfarmer-farmerdiv">
                                    <div className="d-flex align-items-center dashboard-farmerdiv-leftpart">
                                        <img src="/" className="dashboard-farmerimg" width={64} height={64} />
                                        <p className="fonts14 fontw600 text-removemargin dashboard-farmername">Nama Farmer</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center dashboard-farmerdiv-rightpart">
                                        <img className="dashboard-leavelogofarmer" src="/" width={18} height={18} />
                                        <p className="fonts14 fontw600 text-removemargin">0</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between dashboard-topfarmer-farmerdiv">
                                    <div className="d-flex align-items-center dashboard-farmerdiv-leftpart">
                                        <img src="/" className="dashboard-farmerimg" width={64} height={64} />
                                        <p className="fonts14 fontw600 text-removemargin dashboard-farmername">Nama Farmer</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center dashboard-farmerdiv-rightpart">
                                        <img className="dashboard-leavelogofarmer" src="/" width={18} height={18} />
                                        <p className="fonts14 fontw600 text-removemargin">0</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </Layout>
        </>
    )
}