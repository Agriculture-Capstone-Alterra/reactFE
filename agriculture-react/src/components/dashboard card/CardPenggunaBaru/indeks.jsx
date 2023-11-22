import card from '../../../assets/DashboardCardImg/card.svg'
import './style.css'

function CardDashboard({data}) {
    return(
        <div className="border">
                <div className="border2">
                    <p className='text1'>{data.jumlah}</p>
                    <p className='text2'>{data.nama} </p>
                </div>
                <img className="img" src={data.img} alt="" />
            </div>
    )
}

export default CardDashboard