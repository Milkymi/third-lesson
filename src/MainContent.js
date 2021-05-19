import Number from "./Number";
import Buttons from "./Buttons";
import {useState} from "react";

function MainContent(props) {
    let [counter, setCounter] = useState(0);
    function plus() {
        setCounter(counter + 1);
    }
    function minus() {
        if(counter > 0) {
        setCounter(counter - 1);
    }
    }
    function reset() {
        setCounter(0);
    }
    return (
        <div className={"dis-main"}>
            <Number counter={counter} />
            <Buttons plus={plus} minus={minus} reset={reset} />
        </div>
    );
}

export default MainContent;