import { Doughnut } from "react-chartjs-2"
import "./Persentase.css"
import {Chart as ChartJS,ArcElement,Tooltip,} from 'chart.js'
import { BsFillSquareFill } from "react-icons/bs";


export default function Persentase({datainserted}){

    const abaruditanam = {...datainserted[0]}
    const aperawatan = {...datainserted[1]}
    const apanen = {...datainserted[2]}

    const data = {
        datasets: [
            { 
                data: [abaruditanam.jumlah,aperawatan.jumlah,apanen.jumlah],
                backgroundColor: [
                    '#059669',
                    '#2563EB',
                    '#D97706'
                ]
            },
        ],
    };
    let percentageeach = {
        persenbaruditanam: Math.round((abaruditanam.jumlah / (datainserted[3].jumlah)) * 100),
        persenperawatan: Math.round((aperawatan.jumlah / (datainserted[3].jumlah)) * 100),
        persenpanen: Math.round((apanen.jumlah / (datainserted[3].jumlah)) * 100),
    }
    
    
    return (
        <>
            <div className="d-flex persentase-div justify-content-center align-items-center">
                <div className="persentase-doughnut-chart">
                    <Doughnut data={data}/>
                </div>
                <div className="d-flex flex-column persentase-rightpart">
                    <div className="d-flex justify-content-betwee persentase-squares-div">
                        <BsFillSquareFill className="persentase-square persentase-square-baruditanam"/>
                        <div className="d-flex flex-column fontw600 persentase-square-each">
                            <p>Baru Ditanam</p>
                            <p>{percentageeach.persenbaruditanam} %</p>
                            <p className="fonts12">{abaruditanam.jumlah} Tanaman</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-betwee persentase-squares-div">
                        <BsFillSquareFill className="persentase-square persentase-square-perawatan"/>
                        <div className="d-flex flex-column fontw600 persentase-square-each">
                            <p>Perawatan</p>
                            <p>{percentageeach.persenperawatan} %</p>
                            <p className="fonts12">{aperawatan.jumlah} Tanaman</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-betwee persentase-squares-div">
                        <BsFillSquareFill className="persentase-square persentase-square-panen"/>
                        <div className="d-flex flex-column fontw600 persentase-square-each">
                            <p>Panen</p>
                            <p>{percentageeach.persenpanen} %</p>
                            <p className="fonts12">{apanen.jumlah} Tanaman</p>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )

    // const data = {
    //     datasets: [
    //         { 
    //         data: [datainserted.halfdone,datainserted.halfundone],
    //         backgroundColor: [
    //             datainserted.color,
    //             '#D1D5DB',
    //         ]
    //         },
    //     ],
    // };
    // let percentage = Math.round((datainserted.halfdone / (datainserted.halfdone + datainserted.halfundone)) * 100)
    // return (
    //     <>
    //         <div className="d-flex persentase-div justify-content-center align-items-center">
    //             <div className="persentase-doughnut-chart">
    //                 <Doughnut data={data}/>
    //             </div>
    //             <div className="d-flex flex-column persentase-rightpart">
    //                 <p className="fonts24 fontw800">{percentage}%</p>
    //                 <p className="fonts14 fontw700">{datainserted.nama}</p>
    //             </div>
    //         </div>
        
    //     </>
    // )
}