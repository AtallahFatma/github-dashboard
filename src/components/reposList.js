import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserRepo } from "../actions";

const ReposList = ({ repositories }) => {
    const isLoading = useSelector(({ loading }) => loading);
    const dispatch = useDispatch();

    const getRepoDetails = (fullName) => {
        dispatch(getUserRepo(fullName));
    };
    
    return isLoading ? <div className = "lds-dual-ring"></div> :
        <ul className="flex flex--col flex--align-start">
            {repositories.map(({ id, name, full_name }) =>
                <Link to="/details" key={id}>
                    <li className="flex flex--align-center" onClick={() => getRepoDetails(full_name)}>
                        <img className="l-padding-around--medium repo-icon" alt="repo-icon" src="https://img.icons8.com/ios/50/000000/product-documents.png" />
                        <span>{name}</span>
                    </li>
                </Link>
                )}
        </ul>
};

export default ReposList;