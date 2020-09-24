import axios from 'axios'


export const registration = (user, email, password) => {
    
    axios.post("http://localhost:1337/auth/local/register", {
        "username": user,
        "email": email,
        "password": password
    }).catch(e => {
        alert('An error occurred');
    })

}

export const RegistrationValidation = (user, email, password) => {
    
    let errors = {};
    let formIsValid = true;

    //Name
    if (password.length === 0) {
        formIsValid = false;
        errors["name"] = "Cannot be empty";
    }

    if (typeof user !== "undefined") {
        if (!user.match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["name"] = "Only letters";
        }
    }

    //Email
    if (password.length === 0) {
        formIsValid = false;
        errors["email"] = "Cannot be empty";
    }

    if (typeof email !== "undefined") {
        let lastAtPos = email.lastIndexOf('@');
        let lastDotPos = email.lastIndexOf('.');

        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
        }
    }

    //password

    if (password.length <= 0) {
        formIsValid = false;
        errors["password"] = "Cannot be empty";
    }

    if (password.length < 8) {
        formIsValid = false;
        errors["password"] = "Need minimum 8 character";
    }

    if (!password.match(/[a-z]/g)) {
        formIsValid = false;
        errors["password"] = "Need at least 1 lowercase character";
    }

    if (!password.match(/[A-Z]/g)) {
        formIsValid = false;
        errors["password"] = "Need at least 1 uppercase character";
    }

    if (!password.match(/[0-9]/g)) {
        formIsValid = false;
        errors["password"] = "Need at least 1 digit";
    }

    if (!password.match(/[^a-zA-Z\d]/g)) {
        formIsValid = false;
        errors["password"] = "Need at least 1 special character";
    }
    
    if (!formIsValid) {
        return errors
    }

    return formIsValid;
}

export const ToDoValidation = (title, description) => {

    let errors = {};
    let formIsValid = true;

    //Title
    if (title.length === 0) {
        formIsValid = false;
        errors["title"] = "Cannot be empty";
    }

    //description
    if (description.length === 0) {
        formIsValid = false;
        errors["description"] = "Cannot be empty";
    }

    if (!formIsValid) {
        return errors
    }

    return formIsValid;

    

}

export const searchFilter = (list, element) => {
    console.log(list)
    console.log(element)
   console.log(list.filter(e => e.Title === element) )
}






