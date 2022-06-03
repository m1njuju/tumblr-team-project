import './MypageComp.scss'
import Profile from '../../components/Mypage/Profile'
import { ProfileComp } from '../../components/index-comp/IndexComp';
import MyDesigns from "../../components/Mypage/Grid/MyDesigns";
import LikedDesigns from "../../components/Mypage/Grid/LikedDesigns";
import { Link } from 'react-router-dom';


const MypageComp = () => {

    return (
        <>
            
            <div className="header">
                
                <div className="title">
                    <h2>마이페이지</h2>
                    <ul>
                        <li><Link to='/'>태그1</Link></li>
                        <li><Link to='/'>태그2</Link></li>
                        <li><Link to='/'>태그3</Link></li>
                    </ul>
                </div>
                <Profile />
                
            </div>
            
            <MyDesigns />
            <LikedDesigns />
        </>
    )
}
export default MypageComp;