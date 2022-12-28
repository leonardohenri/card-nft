import nft from "../../images/image-equilibrium.jpg"
import avatar from "../../images/image-avatar.png"
import {AiOutlineClockCircle} from 'react-icons/ai'
import './styles.css'

export const PostCard = () =>{
    return(<div className="container">

            <div className="grid">
                <div >
                    <img src={nft} alt="foto nft" className="photo"/>
                </div>
                <div className="text">
                    <h2>Equilibrium #3429</h2>
                    <p>Our Equilibrium collection promotes Balance And calm</p>
                </div>
                <div className="textvalor">
                    <p className="valor">0.041ETH</p>
                    <p><AiOutlineClockCircle/> 3days left</p>
                </div>
                <hr></hr>
                <div className="creator">
                    <img src={avatar} alt="foto do dono da nft" className="avatar" />
                    <p>creation of</p>
                    <p className="name">Jules Wyvern</p>
                </div>
                        </div>
            </div>

);
}
    