
const initState = {
    count: 0
}

export default function counterReducer(state=initState, action) {
    if (action.type === "INCREMENT") {
        state = {
            ...state,
            count: state.count + action.payload
        }
    }

    if (action.type === "UPDATE_COUNT" ) {
        state = {
            ...state,
            count: action.payload.result
        }
    }

    return state;
}
