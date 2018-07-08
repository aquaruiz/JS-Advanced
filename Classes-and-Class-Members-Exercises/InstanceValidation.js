class CheckingAccount{
    constructor(clientId, email, firstName, lastName){
        this.products = [];
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId() {
        return this._clientId;
    }

    set clientId(id) {
        let idRegex = /^[1-9][0-9]{5}$/;

        if (!idRegex.test(id)) {
            throw new TypeError("Client ID must be a 6-digit number");
        }

        this._clientId = id;
    }

    get email() {
        return this._email;
    }

    set email(mail) {
        let mailRegex = /^[a-zA-Z0-9]+@[a-zA-Z\\.]+$/;

        if (!mailRegex.test(mail)) {
            throw new TypeError("Invalid e-mail");
        }

        this._email = mail;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(fName) {
        let fNameRegex = /^[a-zA-Z]{3,20}$/;

        if (!fNameRegex.test(fName)) {
            if (fName.length < 3 || fName.length > 20){
                throw new TypeError("First name must be between 3 and 20 characters long")
            }

            throw new TypeError("First name must contain only Latin characters");
        }

        this._firstName = fName;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(lName) {
        let lNameRegex = /^[a-zA-Z]{3,20}$/;

        if (!lNameRegex.test(lName)) {
            if (lName.length < 3 || lName.length > 20){
                throw new TypeError("Last name must be between 3 and 20 characters long")
            }

            throw new TypeError("Last name must contain only Latin characters");
        }

        this._lastName = lName;
    }

    get products() {
        return this._products;
    }

    set products(value) {
        this._products = value;
    }
}

// let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');
// let acc = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov');
// let acc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov');
// let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov');