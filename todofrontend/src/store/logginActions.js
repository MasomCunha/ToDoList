import axios from 'axios'

export const login = (user, password) => {
    return submit({
        "identifier": user,
        "password": password
      }, "http://localhost:1337/auth/local" )
}


export const registration = (user, email, password) => {
    return submit({
        "username": user,
        "email": email,
        "password": password
      }, "http://localhost:1337/auth/local/register" )
}


function submit(values, url) {
    return dispatch => {
        axios
            .post(url, values)
            .then(resp => {
                dispatch([
                    { type: 'USER_FETCHED', payload: resp.data }
                ])
            })
            .catch(e => {
                alert('An error occurred');
            })
    }
}