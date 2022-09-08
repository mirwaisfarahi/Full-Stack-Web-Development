import { useEffect, useState } from "react";
import TextBox from "./components/TextBox";

const ComponentLifeCycle = () => {

    const [showText, setShowText] = useState(false);

    const ShowText = () => {
        setShowText(!showText);
    }

    useEffect(() => {
        console.log('hi')
    })

    return (
        <div className="App2">
            <button onClick={ShowText}>Show Text</button>
            {showText && <TextBox />}
        </div>
    );
}

export default ComponentLifeCycle;