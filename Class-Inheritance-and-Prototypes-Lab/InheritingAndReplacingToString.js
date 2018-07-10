function toStringExtension () {
    class Person {
        constructor(name, email){
            this.name = name;
            this.email = email;
        }

        toString(){
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email);
            this.subject = subject;
        }

        toString(){
            return super.toString().slice(0, -1) + `, subject: ${this.subject})`;
        }
    }

    class Student extends Person{
        constructor(name, email, course){
            super(name, email);
            this.course = course;
        }

        toString(){
            return super.toString().slice(0, -1) + `, course: ${this.course})`
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

let funcs = toStringExtension();
let obj1 = funcs.Person;
let obj2 = funcs.Teacher;
let obj3 = funcs.Student;
let bee = new obj1("mama", "vi");
console.log(bee + "");
let bee2 = new obj2("mama", "vi", "maths");
console.log(bee2 + "");
let bee3 = new obj3("mama", "vi", "JS");
console.log(bee3 + "");