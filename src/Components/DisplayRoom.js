import "../Styles/styles.css";

function DisplayRoom(props) {
    let {hostelno, roomNo} = props;
    return(
        <div className="result">
            <div>
                <img style={{height:'30px', width:"30px"}}src="https://image.shutterstock.com/image-vector/red-cross-close-icon-sign-260nw-1141338977.jpg" alt="cross"/>
            </div>
            <div>
                <h1>Success</h1>
                <p>Your room has been booked successfully</p>
                <h6>Yoyr room details are as follows</h6>
                <p>Hostel no <span style={{color:"red"}}>{hostelno}</span></p>
                <p>room no <span style={{color:"red"}}>{roomNo}</span></p>
            </div>
        </div>

    );
}
export default DisplayRoom;