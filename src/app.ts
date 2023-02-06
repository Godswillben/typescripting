class Department {
    name: string;
    employees: string[]=[];

    constructor(n: string){
        this.name = n
    }
    describe(this:Department){
        console.log('Department: ', this.name)
    }

    addEmployee(employee: string){
        this.employees.push()
    }

    printEmployeeInformation(){
        console.log(this.employees.length)
        console.log(this.employees)
    }

}

const accounting = new Department('Accounting')

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.employees[2] = "Anna";

accounting.describe();
accounting.printEmployeeInformation()
