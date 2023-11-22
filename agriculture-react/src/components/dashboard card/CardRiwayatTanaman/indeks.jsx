import card1 from '../../../assets/DashboardCardImg/card1.svg'
import './style.css'

function CardRiwayatTanaman() {
    return(
        <div className="border">
                <div className="border2">
                    <p className='text1'>250+</p>
                    <p className='text2'>Riwayat Tanaman </p>
                </div>
                <img className="img" src={card1} alt="" />
            </div>
    )
}

export default CardRiwayatTanaman