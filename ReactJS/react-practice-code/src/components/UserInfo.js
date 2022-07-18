function UserInfo(props) {
    return (
        <div>
            <h2>{props.user.name}</h2>
            <img src={props.user.avatarUrl} alt={props.user.name} />
        </div>
        
    );
}

export default UserInfo;