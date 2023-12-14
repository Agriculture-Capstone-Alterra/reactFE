import { Doughnut } from "react-chartjs-2"
import "./Persentase.css"
import {Chart as ChartJS,ArcElement,Tooltip,} from 'chart.js'



export default function Persentase({datainserted}){

    const data = {
        datasets: [
            { 
            data: [datainserted.halfdone,datainserted.halfundone],
            backgroundColor: [
                datainserted.color,
                '#D1D5DB',
            ]
            },
        ],
    };
    
    let percentage = Math.round((datainserted.halfdone / (datainserted.halfdone + datainserted.halfundone)) * 100)

    return (
        <>
            <div className="d-flex persentase-div justify-content-center align-items-center">
                <div className="persentase-doughnut-chart">
                    <Doughnut data={data}/>
                </div>
                <div className="d-flex flex-column persentase-rightpart">
                    <p className="fonts24 fontw800">{percentage}%</p>
                    <p className="fonts14 fontw700">{datainserted.nama}</p>
                </div>
            </div>
        
        </>
    )
}