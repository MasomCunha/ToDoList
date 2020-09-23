
const INITIAL_STATE = {
    userID: null,
    UserName: null,
    email: null,
    userKey: null,
    isAuth: false
}

export default( state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USER_FETCHED':
            //localStorage.setItem(userKey, JSON.stringify(action.payload))
            return { ...state, 
                UserName:action.payload.user.username,
                userID:action.payload.user.id,
                email:action.payload.user.email,
                userKey: action.payload.jwt, 
                isAuth: true}
        case 'USER_LOGOUT':
            return { ...state, 
                    UserName: null,
                    userID: null,
                    email: null,
                    userKey: null, 
                    isAuth: false}
        default:
            return state
    }
}