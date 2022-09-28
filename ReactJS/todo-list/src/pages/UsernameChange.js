import { useState } from "react";

const UsernameChange = (props) => {

    const [newusername, setNewusername] = useState("");

    return (
        <div>
            <input onChange={(event) => setNewusername(event.target.value)} />
            <button onClick={() => props.setUsername(newusername)} >Change Username</button>
        </div>
    )
}

export default UsernameChange;