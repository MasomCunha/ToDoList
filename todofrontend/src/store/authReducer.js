//const userKey = null
const INITIAL_STATE = {
    UserName: null,
    userKey: null,
    isAuth: false
}

export default( state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USER_FETCHED':
            //localStorage.setItem(userKey, JSON.stringify(action.payload))
            return { ...state, UserName:action.payload.user.username, userKey: action.payload.jwt, isAuth: true}
        default:
            return state
    }
}