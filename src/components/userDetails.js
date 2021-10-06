const UserDetails = ({ username, avatar, login = null }) => {
    return <div className="flex--col">
        <div className="flex flex--align-center">
            <img className="l-padding-around--small avatar" alt="avatar" src={avatar} />
            <span>{username}</span>
        </div>
        {login && <a href={"https://github.com/" + login}>https://github.com/{login}</a>}
    </div>
};

export default UserDetails;