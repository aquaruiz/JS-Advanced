function calc(name, age, weight, height) {
    let person = {
        name: name,
        personalInfo: {
            age: 0,
            weight: 0,
            height: 0
        },
        bmi: 0,
        status: ""
    };

    age = Number(age);
    weight = Number(weight);
    height = Number(height);

    function setBmi(weight, height) {
        let bmi = Math.round(weight / Math.pow((height / 100), 2));
        return bmi;
    }

    function setStatus(bmi) {
        if (bmi < 18.5){
            return "'underweight';";
        } else if(bmi < 25) {
            return "normal";
        } else if( bmi < 30) {
            return "overweight"
        } else {
            return "obese";
        }
    }

    function giveAdvice (bmi){
        if (bmi >= 30){
            return "admission required";
        } else {
            return "";
        }
    }
    
    person.name = name;
    person.personalInfo.age = age;
    person.personalInfo.weight = weight;
    person.personalInfo.height = height;
    person.bmi = setBmi(weight, height);
    person.status = setStatus(person.bmi);

    if (giveAdvice(person.bmi) !== ""){
        person.recommedation = giveAdvice(person.bmi)
    }

    return person.name;
}

// calc('Peter', 29, 75, 182);
//
// calc('Peter', 29, 175, 182);
// calc("Honey Boo Boo", 9, 57, 137);

console.log(calc('Peter', 29, 75, 182));;