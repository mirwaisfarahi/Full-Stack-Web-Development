import { useState } from "react";

const TextBox = () => {

    const [inputValue, setInputValue] = useState("")

    const HandleText = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <div>
            <input onChange={HandleText} />
            <h2>{inputValue}</h2>
        </div>
    );
}

export default TextBox;