import "../Styles/styles.css";
import firebase from "firebase";
import {Link} from "react-router-dom";

function Header() {
    return <><div className="header">
                <div className="logo">
                    <img src="https://static.wixstatic.com/media/576f44_5e9ea38a9c60410c8a4938510ca4b7f1~mv2.png/v1/fill/w_211,h_211,al_c/576f44_5e9ea38a9c60410c8a4938510ca4b7f1~mv2.png" alt="logo" />
                    <h2>Newton School</h2>
                </div>
                <div>
                    <Link to="/"><button onClick={() => firebase.auth().signOut()}>Sign out!</button></Link>
                    
                </div>
                
    </div>
    <div className="line"></div>
    </>
}

export default Header;