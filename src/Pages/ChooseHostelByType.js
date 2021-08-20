import { Redirect, useParams } from "react-router-dom";
import "../Styles/styles.css";
import { useState } from "react";

function ChooseHostelByType() {
    const {type} = useParams();
    let [hostelNo, setHostelNo] = useState("");
    
    if(hostelNo){
        let url = `/user/choose/${hostelNo}`;
        return <Redirect to={url} />
    }
    
    console.log(type);
    return(
        <div className="hostel" onClick={(e) =>{
            if(e.target.id){
                setHostelNo(type === "boys" ? 'B' : 'G' + e.target.id);
            }
        }}>
        
            <div id="1">{type === "boys" ? 'B' : 'G'}1</div>
            <div id="2">{type === "boys" ? 'B' : 'G'}2</div>
            <div id="3">{type === "boys" ? 'B' : 'G'}3</div>
            <div id="4">{type === "boys" ? 'B' : 'G'}4</div>
            <div id="5">{type === "boys" ? 'B' : 'G'}5</div>
            <div id="6">{type === "boys" ? 'B' : 'G'}6</div>
        </div>
    );
}
export default ChooseHostelByType;