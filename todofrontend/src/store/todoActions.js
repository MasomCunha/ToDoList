import axios from 'axios'

const URL = 'http://localhost:1337/to-dos'

export const changeTitle = (event) => ({
    type:'CHANGE_TITLE',
    payload: event.target.value
})

export const changeDescription = (event) => ({
    type:'CHANGE_DESCRIPTION',
    payload: event.target.value
})

export const search = () => {
    const request = axios.get(URL)
    return{
        type:'TODO_LIST',
        payload: request
    }
}

export const add = (Title, Description) => {
    return dispatch => {
        axios.post(URL, {
            Title: Title, 
            Description: Description,
            Completed: false})
            .then(resp => dispatch({type:'TODO_ADD',
            payload: resp.data}))
            .then(resp => dispatch(search()))
    }
}

export const markAsDone = (todo) => {
    console.log(todo)
    return dispatch => {
        axios.put(URL + `​/to-dos​/${todo.id}`, {...todo, Completed: true})
        .then(resp => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(URL + `​/to-dos​/${todo.id}`)
        .then(resp => dispatch(search()))
    }
}