import { useContext } from "react";
import { AppContext } from "../ReactRouter";
import AgeChange from "./AgeChange";
import UsernameChange from "./UsernameChange";

const Profile = (props) => {

    const {userAge} = useContext(AppContext);

    return (
        <div>
            <h3>Profile, useername: {props.username} Age: {userAge}</h3>
            <UsernameChange setUsername = {props.setUsername} />
            <AgeChange />
        </div>
    )
}

export default Profile;