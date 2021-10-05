import axios from "axios";

export function getData() {
    return function (dispatch) {
        return axios.get("https://api.github.com/users")
            .then(({ data }) => {
                dispatch(setUsers(data));
            }
        );
    }
}

function setUsers(data) {
    return {
        type: 'SET_USERS',
        payload: data
    };
}