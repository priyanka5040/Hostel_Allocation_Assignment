import { useState , useContext} from "react";
import "../Styles/styles.css";
import { useParams } from "react-router-dom";
import DisplayRoom from "../Components/DisplayRoom";
import firebase from "firebase";
import {userContext} from "../App";

function ChooseFloor(){
    const [floor, setFloor] = useState("");
    const [roomNo, setRoomNo] = useState("");
    const { hostelno } = useParams();
    const {setAppUser, appUser} = useContext(userContext);
    console.log(floor);
    let arr = new Array(10).fill(1);

    if(roomNo){
        let obj = {
            userId : firebase.auth().currentUser.id,
            roomNo : roomNo,
            hostelno : hostelno
        };
        let arr = appUser.filter((u)=>u.id !== firebase.auth().currentUser.uid);
        if(!arr){
            setAppUser([...appUser, obj]);
        }
        return<DisplayRoom roomNo={roomNo} hostelno={hostelno}/>
    }
    
    return(
        <div className="choosefloor">
            <h4>choose a floor</h4>
            <select className="sel" onChange={(e)=>{
                setFloor(e.target.value);
            }}>
                <option value="1">1st Floor</option>
                <option value="2">2nd Floor</option>
                <option value="3">3rd Floor</option>
                <option value="4">4th Floor</option>
                <option value="5">5th Floor</option>
            </select>
            <div className="chooseRoom">
                {arr.map((a, index)=>{
                    return<h1 key={a+index} onClick={(e)=>{
                        setRoomNo(e.target.id);
                    }}
                    className="room" id={a+index}>{a + index}</h1>
                })}
            </div>

        </div>
    );
}
export default ChooseFloor;
