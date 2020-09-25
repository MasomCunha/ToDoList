import axios from 'axios'

export const login = (user, password) => {
    return dispatch => {
        axios.post("http://localhost:1337/auth/local", {
            "identifier": user,
            "password": password
        }).then(resp => {
            dispatch([
                { type: 'USER_FETCHED', payload: resp.data }
            ])
        })
            .catch(e => {
                alert('User does not exist');
            })
    }
}


export const logout = () => {
    return {
        type: 'USER_LOGOUT',
        payload: null
    }
}

