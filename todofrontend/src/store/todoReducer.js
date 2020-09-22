const INITIAL_STATE = {
    Title: "",
    Description: "",
    list: [""],
    listType: "all"
}

export default( state=INITIAL_STATE, action) => {
    switch(action.type) {
        case 'CHANGE_TITLE':
            return {...state, Title: action.payload}
        case 'CHANGE_DESCRIPTION':
            return {...state, Description: action.payload}
        case 'TODO_LIST':
            return { ...state, list: action.payload.data }
        case 'TODO_ADDED':
            return { ...state, Title: '', Description: '' }
        case 'CHANGE_TO_COMPLETE':
            return { ...state, listType: action.payload}
        case 'CHANGE_TO_INCOMPLETE':
            return { ...state, listType: action.payload}
        case 'CHANGE_TO_ALL':
            return { ...state, listType: action.payload}
        default:
            return state
    }
}