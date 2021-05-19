import {useState} from "react";
function Buttons(props) {
    let [counter, setCounter] = useState(0);
    return (
        <div className={"buttons"}>
            <button className={"plus"} onClick={props.plus}>
                Увеличить
            </button>
            <button className={"minus"} onClick={props.minus}>
                Уменьшить
            </button>
            <button className={"reset"} onClick={props.reset}>
                Сбросить
            </button>
        </div>
    );
}

export default Buttons;