import axios from "axios";

export function getUser(username) {
    return function (dispatch) {
        return axios.get("https://api.github.com/users/" + username)
            .then(({ data }) => {
                dispatch(setUser(data));
                dispatch(fetchRepos(data.repos_url));
            })
            .catch(error => dispatch({
                type: 'FETCH_DATA_ERROR',
                payload: error
            }));
    }
}

export function fetchRepos(url) {
    return function (dispatch) {
        dispatch({ type: 'FETCHING_REPOS' });
        return axios.get(url)
            .then(({ data }) => {
                dispatch(setRepos(data));
            });
    }
}

export function getUserRepo(repoName) {
    return function (dispatch) {
        return axios.get("https://api.github.com/repos/" + repoName)
            .then(({ data }) => {
                dispatch(setUserRepo(data));
            });
    }
}

function setUser(data) {
    return {
        type: 'SET_USER',
        payload: data
    };
}

function setRepos(data) {
    return {
        type: 'SET_USER_REPOS',
        payload: data
    };
}

function setUserRepo(data) {
    return {
        type: 'SET_USER_REPO',
        payload: data
    };
}