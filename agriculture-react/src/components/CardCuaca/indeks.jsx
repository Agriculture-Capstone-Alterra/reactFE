import cloud from '../../assets/DashboardCardImg/cloud.svg'
import './style.css'

function CardCuaca(){
    return(
        <div className="border-cuaca">
                <div className="border">
                    <p className='text-suhu'>37° C</p>
                    <p className='text-suhu2'>Sedikit Berawan </p>
                </div>
                <img className="img" src={cloud} alt="" />
        </div>
    )
}

export default CardCuaca