import './MypageComp.scss'
import Profile from "./Profile";
import AllDesigns from "./Grid/AllDesigns";
import MyDesigns from "./Grid/MyDesigns";
import LikedDesigns from "./Grid/LikedDesigns";
import { Link } from 'react-router-dom';



const MypageComp = () => {
    return (
        <>
            
            <div className="title">
                <h2>마이페이지</h2>
                <div className="tags">
                    <ul>
                        <li><Link to='/'>태그1</Link></li>
                        <li><Link to='/'>태그2</Link></li>
                        <li><Link to='/'>태그3</Link></li>
                    </ul>
                </div>
                <Profile />
            </div>

            <AllDesigns />
            <MyDesigns />
            <LikedDesigns />
        </>
    )
}
export default MypageComp;