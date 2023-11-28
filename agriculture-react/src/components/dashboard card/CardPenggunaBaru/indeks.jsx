import card from '../../../assets/DashboardCardImg/card.svg'
import './style.css'

function CardPenggunaBaru() {
    return(
        <div className="border">
                <div className="border2">
                    <p className='text1'>250+</p>
                    <p className='text2'>Pengguna Baru </p>
                </div>
                <img className="img" src={card} alt="" />
            </div>
    )
}

export default CardPenggunaBaru