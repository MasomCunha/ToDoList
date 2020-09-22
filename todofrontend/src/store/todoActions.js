import axios from 'axios'

const URL = 'http://localhost:1337/to-dos'

export const changeTitle = (event) => ({
    type: 'CHANGE_TITLE',
    payload: event.target.value
})

export const changeDescription = (event) => ({
    type: 'CHANGE_DESCRIPTION',
    payload: event.target.value
})

export const fetchTodos = (userKey) => {
    console.log(userKey)
    const request = axios.get(URL, {
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

export const add = (Title, Description, userKey) => {
    return dispatch => {
        axios.post(URL, {
            Title: Title,
            Description: Description,
            Completed: false
          }, {
            headers: {
                Authorization:'Bearer ' + userKey
            }
          })
            .then(resp => dispatch({
                type: 'TODO_ADDED',
                payload: resp.data
            }))
            .then(resp => dispatch(fetchTodos(userKey)))
    }
}

export const markAsDone = (todo, userKey) => {

    console.log("here")
    console.log(userKey)

    if (todo.Completed === true) {
        return dispatch => {
            axios.put(URL + `/${todo.id}`, {
                ...todo, Completed: false
              }, {
                headers: {
                    Authorization:'Bearer ' + userKey
                }
              }            
            )
                .then(resp => dispatch(fetchTodos(userKey)))
        }
    }

    if (todo.Completed === false) {
        return dispatch => {
            axios.put(URL + `/${todo.id}`, {
                ...todo, Completed: false
              }, {
                headers: {
                    Authorization:'Bearer ' + userKey
                }
              }            )
                .then(resp => dispatch(fetchTodos(userKey)))
        }
    }
}

export const remove = (todo, userKey) => {

    return dispatch => {
        axios.delete(URL + `/${todo.id}`, {
            Authorization:'Bearer ' + userKey
        })
            .then(resp => dispatch(fetchTodos(userKey)))
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