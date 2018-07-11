function workItOut() {

    class Employee {
        constructor(name, age){
            if (new.target === Employee){
                throw new Error("Cannot instantiate directly.")
            }

            this.name = name;
            this.age = Number(age);
            this.salary = 0;
            this.tasks = [];
        }

        work () {
            let currentTask = this.tasks.shift();
            console.log(currentTask);
            this.tasks.push(currentTask);
        }

        calcSalary(){
            return this.salary;
        }

        collectSalary () {
            console.log(`${this.name} received ${this.calcSalary()} this month.`);
        }
    }

    class Junior extends Employee{
        constructor(name, age){
            super(name, age);
            this.tasks.push(`${this.name} is working on a simple task.`);
        }
    }

    class Senior extends Employee{
        constructor(name, age){
            super(name, age);
            this.tasks.push(`${this.name} is working on a complicated task.`);
            this.tasks.push(`${this.name} is taking time off work.`);
            this.tasks.push(`${this.name} is supervising junior workers.`);
        }
    }

    class Manager extends Employee{
        constructor(name, age){
            super(name, age);
            this.tasks.push(`${this.name} scheduled a meeting.`);
            this.tasks.push(`${this.name} is preparing a quarterly report.`);
            this.dividend = 0;
        }

        calcSalary() {
            return this.salary + this.dividend;
        }
    }

    return {
        Employee, Junior, Senior, Manager
    }
}


// let Junior = workItOut().Junior;
// let junior = new Junior('Junior', 22);
// junior.salary = 1000;
// junior.work();
// junior.collectSalary();
//
// let Senior = workItOut().Senior;
// let senior = new Senior('Senior', 35);
// senior.salary = 5000;
// for (let i = 0; i < 4; i++)
//     senior.work();
// senior.collectSalary();

// let Manager = workItOut().Manager;
// let manager = new Manager('Manager', 50);
// manager.dividend = 10000;
// manager.salary = 10000;
// for (let i = 0; i < 22; i++)
//     manager.work();
// manager.collectSalary();