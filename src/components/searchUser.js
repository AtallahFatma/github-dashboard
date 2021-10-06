import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../actions";
import ReposList from "./reposList";
import UserDetails from "./userDetails";

const SearchUser = () => {    
    const user = useSelector(({ user }) => user)
    const error = useSelector(({ error }) => error);
    const repos = useSelector(({ repos }) => repos);

    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        dispatch(getUser(searchTerm));
    };

    return <div className="flex flex--justify-center flex--col flex--align-center">
            <div className="flex l-padding-around--large">
                <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                className="search-input"
                onChange={handleChange}/>
                <button className="btn-cta btn-hover" onClick={handleSearch}>Search</button>
            </div>
            {user ? <UserDetails username={user.name} avatar={user.avatar_url} /> : error && <span className="error">Error has occurred</span>}
            {repos && <ReposList repositories={repos} />}
        </div>
};

export default SearchUser;