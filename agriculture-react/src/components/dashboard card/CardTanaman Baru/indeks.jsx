import card2 from '../../../assets/DashboardCardImg/card2.svg'
import './style.css'

function CardTanamanBaru() {
    return(
        <div className="border">
                <div className="border2">
                    <p className='text1'>250+</p>
                    <p className='text2'>Tanaman Baru </p>
                </div>
                <img className="img" src={card2} alt="" />
            </div>
    )
}

export default CardTanamanBaru