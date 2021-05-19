import {useState} from "react";
function Number(props) {
    return (
        <div className={"counter"}>
            {props.counter}
        </div>
    );
}

export default Number;