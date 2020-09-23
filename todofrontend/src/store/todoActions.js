import axios from 'axios'

const URL = 'http://localhost:1337/to-dos'
const GETURL = 'http://localhost:1337/users'

export const changeTitle = (event) => ({
    type: 'CHANGE_TITLE',
    payload: event.target.value
})

export const changeDescription = (event) => ({
    type: 'CHANGE_DESCRIPTION',
    payload: event.target.value
})

export const fetchTodos = (userKey, userID) => {
    const request = axios.get(GETURL + `/${userID}`, {
        headers: {
          Authorization:
            'Bearer ' + userKey
        },
      });
    return {
        type: 'TODO_LIST',
        payload: request
    }
}

export const add = (Title, Description, userKey, user, email, userID) => {
    return dispatch => {
        axios.post(URL, {
            Title: Title,
            Description: Description,
            Completed: false,
            user: {
                id: userID,
                username: user,
                email: email
            }
          }, {
            headers: {
                Authorization:'Bearer ' + userKey
            }
          })
            .then(resp => dispatch({
                type: 'TODO_ADDED',
                payload: resp.data
            }))
            .then(resp => dispatch(fetchTodos(userKey, userID)))
    }
}

export const markAsDone = (todo, userKey, userID) => {

    if (todo.Completed === true) {
        return dispatch => {
            axios.put(URL + `/${todo.id}`, {
                ...todo,
                Completed: false
              }, {
                headers: {
                    Authorization:'Bearer ' + userKey
                }
              }).then(resp => dispatch(fetchTodos(userKey, userID)))
        }
    }

    if (todo.Completed === false) {
        return dispatch => {
            axios.put(URL + `/${todo.id}`, {
                ...todo,
                Completed: true
              }, {
                headers: {
                    Authorization:'Bearer ' + userKey
                }
              }).then(resp => dispatch(fetchTodos(userKey, userID)))
        }
    }

    
}

export const remove = (todo, userKey, userID) => {

    return dispatch => {
        axios.delete(URL + `/${todo.id}`, {
            headers: {
                Authorization:'Bearer ' + userKey
            }
          })
            .then(resp => dispatch(fetchTodos(userKey, userID)))
    }
}

export const changeList = (buttonName) => {

    if(buttonName === "all") {
        return {
            type: 'CHANGE_TO_ALL',
            payload: "all"
        }
    }

    if(buttonName === "Complete") {
        return {
            type: 'CHANGE_TO_COMPLETE',
            payload: "Complete"
        }
    }
   
    if(buttonName === "Incomplete") {
        return {
            type: 'CHANGE_TO_INCOMPLETE',
            payload: "Incomplete"
        }
    }
}