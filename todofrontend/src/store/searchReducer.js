const INITIAL_STATE = {
    inputSearch: "",
    startSearch: false
}

export default( state=INITIAL_STATE, action) => {
    switch(action.type){
        case "SEARCH_TO_SEARCH":
            return{
                ...state, inputSearch: action.payload
            }
        case "SEARCH_ELEMENT":
            return{
                ...state, startSearch: true
            }
        default:
            return state
    }
}