
import APIService from "../shared/APIService";

export function increment(val=1) {

    return {
        type: "INCREMENT",
        payload: val
    }
}


export function login(username) {

    return (dispatch) => {
        APIService.post("/count", {username: username})
            .then(data => {
                console.log(data);
                dispatch({
                    type: "UPDATE_COUNT",
                    payload: data
                })
            });
    }
}
