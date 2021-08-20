import "../Styles/styles.css";
import {Link} from "react-router-dom";

function ChooseHostel(){
    
    return <div>
        <h1 style={{textAlign: "center"}}>Choose Your Hostel</h1>
        <div className="choose">
            <Link to="/user/choose-hostel/girls"><div className="girls">
            <img src="https://cdn2.iconfinder.com/data/icons/avatars-2-7/128/42-512.png" alt="girls" /></div></Link>
            <Link to="/user/choose-hostel/boys"><div className="boys"><img src="https://cdn1.vectorstock.com/i/1000x1000/98/00/boy-icon-flat-single-avatarpeaople-icon-from-the-vector-14449800.jpg" alt="boys" /></div></Link>
        </div>
    </div>
}
export default ChooseHostel;