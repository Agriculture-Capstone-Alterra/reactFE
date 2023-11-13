import card from '../../assets/Group.svg'
import card1 from '../../assets/Group1.svg'
import card2 from '../../assets/Group2.svg'
import cloud from '../../assets/Cloud.svg'
import './dashboard.css'

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="border">
                <div className="border2">
                    <p className='text1'>250+</p>
                    <p className='text2'>Pengguna Baru </p>
                </div>
                <img className="img" src={card2} alt="" />
            </div>
            <div className="border">
                <div className="border2">
                <p className='text1'>250+</p>
                    <p className='text2'>Pengguna Baru </p>
                </div>
                <img className="img" src={card} alt="" />
            </div>
            <div className="border">
                <div className="border2">
                <p className='text1'>250+</p>
                    <p className='text2'>Pengguna Baru </p>
                </div>
                <img className="img" src={card1} alt="" />
            </div>
            <div className="border3">
                <div className="border2">
                    <p className='suhu'>37° C</p>
                    <p className='suhu2'>Sedikit Berawan </p>
                </div>
                <img className="img" src={cloud} alt="" />
            </div>
        </div>
    )
}

export default Dashboard;
