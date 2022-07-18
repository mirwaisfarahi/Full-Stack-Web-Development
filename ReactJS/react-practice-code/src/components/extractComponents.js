import UserInfo from "./UserInfo";
import ToLocalDate from "./Date";
function Comment(props) {
    return (
        <div>
            <UserInfo user = {props.author} />
            Date: {ToLocalDate(props.date)}
        </div>
    );
}

export default Comment;