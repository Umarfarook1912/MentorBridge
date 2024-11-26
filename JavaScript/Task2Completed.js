const employeeList = [
    { id: 1, name: "Umar", department: "HR", salary: 40000, bonusPercentage: 30, yearsOfExperience: 2 },
    { id: 2, name: "Harish", department: "Engineering", salary: 40000, bonusPercentage: 10, yearsOfExperience: 3 },
    { id: 2, name: "Harish", department: "Engineering", salary: 40000, bonusPercentage: 10, yearsOfExperience: 3 },
    { id: 3, name: "Lithesh", department: "Sales", salary: 40000, bonusPercentage: 15, yearsOfExperience: 0 },
]
const chosenDepartment = "HR";

function removeDuplicates() {
    const uniqueEmployeeSet = new Set();
    const uniqueEmployeeList = [];
    for (const employee of employeeList) {
        if (!uniqueEmployeeSet.has(employee.id)) {
            uniqueEmployeeSet.add(employee.id);
            uniqueEmployeeList.push(employee);
        }
    }
    return uniqueEmployeeList;
}

function filterEmployee(uniqueEmployeeList) {
    return uniqueEmployeeList.filter(employee => chosenDepartment.includes(employee.department))
}

function calculateCompensation(uniqueEmployeeList) {
    for (const employee of uniqueEmployeeList) {
        if (employee.department == "HR" && employee.salary < 50000) {
            employee.bonusPercentage += 10;
        }
        else if (employee.department == "Engineering" && employee.yearsOfExperience > 2) {
            employee.bonusPercentage += 15;
        }
        else if (employee.department == "Sales") {
            if (employee.salary < 100000) {
                employee.bonusPercentage += 5;
            }
            else if (employee.salary >= 100000 && employee.salary < 500000) {
                employee.bonusPercentage += 10;
            }
            else if (employee.salary >= 500000) {
                employee.bonusPercentage += 20;
            }
        }
        employee.bonus = employee.salary * (employee.bonusPercentage / 100);
        employee.totalCompensation = employee.salary + employee.bonus;

    }
    return uniqueEmployeeList;

}
function calculateGroupByDepartment(compensationList) {
    const compensationDepartmentList = {};
    for (const employee of compensationList) {
        if (!compensationDepartmentList[employee.department]) {
            compensationDepartmentList[employee.department]=[];
        }
        compensationDepartmentList[employee.department].push({id:employee.id,name:employee.name,salary:employee.salary,bonus:employee.bonus,totalCompensation:employee.totalCompensation});
    }
    return compensationDepartmentList;
}
function generateReport() {
    const uniqueEmployeeList = removeDuplicates();
    console.log("After Removing Duplicates:")
    console.log(uniqueEmployeeList);
    const chosenDepartment = filterEmployee(uniqueEmployeeList);
    console.log("After filtering Department:")
    console.log(chosenDepartment);
    const compensation = calculateCompensation(uniqueEmployeeList);
    console.log("After Compensation:")
    console.log(compensation);
    const departmentWise = calculateGroupByDepartment(compensation);
    console.log("Final Report:");
    console.log(departmentWise);
}
generateReport();


