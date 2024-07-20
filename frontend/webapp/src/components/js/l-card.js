import React from "react";
import '../../components/css/l-card.css'
import locn from '../../assets/locn.png'
function LCard(props) {
    return(
        <div className="l-card-body">
            <img src={locn} alt="location" draggable="false"></img>
            <h3 id="l-title">{props.title}</h3>
            <p id="l-inf">{props.info}</p>
            <p id="mob-no">{props.mobno}</p>
        </div>
    );
}
export default LCard;