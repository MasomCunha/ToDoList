const userKey = 'Bearer'//`Bearer ${token}`
const INITIAL_STATE = {
    UserName: null,
    validToken:false
}

export default( state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOKEN_VALIDATED':
            if (action.payload){
                return { ...state, validToken: true }
            } else {
                localStorage.removeItem(userKey)
                return {...state, validToken: false, user: null}
            }
        case 'USER_FETCHED':
            localStorage.setItem(userKey, JSON.stringify(action.payload))
            return { ...state, user:action.payload.user, validToken: true}
        default:
            return state
    }
}