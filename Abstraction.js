
function Employee (name, age, baseSalary){
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    
    let monthlyBonus = 30000;

    let calculateFinalSalary = function(){
        let finalSalary = baseSalary + monthlyBonus;
        console.log('Final Salary : '+finalSalary);
    }

    this.getEmpDetails = function(){
        console.log('Name : '+this.name+' | Age : '+this.age);
        calculateFinalSalary();
    }
}

let emp1 = new Employee('Tade', 40, 150000);
emp1.getEmpDetails();
// emp1.calculateFinalSalary();
