import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserDetails from "./userDetails";

const RepoDetails = () => {
    const user = useSelector(({ user }) => user)
    const userRepo = useSelector(({ userRepo }) => userRepo);

    const createdAt = userRepo && userRepo.created_at && new Date(userRepo.created_at);
    const updatedAt = userRepo && userRepo.updated_at && new Date(userRepo.updated_at);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return  <div className="flex flex--justify-center flex--col flex--align-center l-padding-around--large card l-half-width">
        {userRepo ? 
            <>
                <Link to="/">Go back to search</Link>
                <UserDetails username={user.name} avatar={user.avatar_url} login={user.login}/>
                <span className="l-padding-around--small fs--small">{userRepo.name}</span>
                <span className="l-padding-around--medium">{userRepo.description}</span>
                <span className="l-padding-around--small">Created at: {createdAt.toLocaleDateString('fr-FR', options)}</span>
                <span className="l-padding-around--small">Updated at: {updatedAt.toLocaleDateString('fr-FR', options)}</span>
                {userRepo.language && <span className="l-padding-around--medium">Language: {userRepo.language}</span>}
                <span className="l-padding-around--small">Starts: {userRepo.stargazers_count}</span>
            </>
            : <Link to="/">Nothing to show. Go back to search</Link>
        }
        </div> 
};

export default RepoDetails;