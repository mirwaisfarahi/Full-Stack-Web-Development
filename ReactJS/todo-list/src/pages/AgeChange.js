import { useContext, useState } from "react";
import { AppContext } from "../ReactRouter";

const AgeChange = () => {

    const {setUserAge} = useContext(AppContext);

    const [newUserAge, setnewUserAge] = useState(0);

    return (
        <div>
            <input onChange={(event) => setnewUserAge(event.target.value)} />
            <button onClick={() => setUserAge(newUserAge)} >Change Age</button>
        </div>
    )
}

export default AgeChange;