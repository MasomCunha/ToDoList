

export const validation = (user, email, password) => {
    let fields = {
        name: user,
        email: email,
        password: password
    }
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["name"]) {
        formIsValid = false;
        errors["name"] = "Cannot be empty";
    }

    if (typeof fields["name"] !== "undefined") {
        if (!fields["name"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["name"] = "Only letters";
        }
    }

    //Email
    if (!fields["email"]) {
        formIsValid = false;
        errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
        let lastAtPos = fields["email"].lastIndexOf('@');
        let lastDotPos = fields["email"].lastIndexOf('.');

        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
        }
    }

    
    return formIsValid;
}



