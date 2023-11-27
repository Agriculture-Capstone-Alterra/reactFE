import cloud from '../../assets/DashboardCardImg/cloud.svg'
import './style.css'

function CardCuaca({data}){
    return(
        <div className="border-cuaca">
            <div className='cardcuaca-words d-flex flex-column'>
                <p className='text-suhu'>{data.suhu}° C</p>
                <p className='text-suhu2'>{data.suhunama} </p>
            </div>
            <img className="" src={data.suhupic} alt="" />
        </div>
    )
}

export default CardCuaca