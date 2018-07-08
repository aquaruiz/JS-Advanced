function getPersons () {
    class Person {
        constructor(firstName, lastName, age, email){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email
        }
        toString(){
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }

    let data =[
        ["Maria", "Petrova", 22, "mp@yahoo.com"],
        ["SoftUni"],
        ["Stephan", "Nikolov", 25],
        ["Peter", "Kolev", 24, "ptr@gmail.com"],
    ];

    let output = [];
    for (let i = 0; i < data.length; i++) {
        let person = new Person();
        for (let j = 0; j < 4; j++){
            if (data[i][j] !== undefined){
                if (j === 0){
                    person.firstName = data[i][j];
                } else if(j === 1){
                    person.lastName = data[i][j];
                } else if(j === 2){
                    person.age = data[i][j];
                } else if(j === 3) {
                    person.email = data[i][j];
                }
            }
        }

        output.push(person + "");
    }

    return output;
};

console.log(getPersons().join(",  "));