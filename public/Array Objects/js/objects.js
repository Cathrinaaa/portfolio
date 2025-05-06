function showemployees(){
    let table= document.getElementById('employees');

    employees.forEach(element => {
        let newRow = table.insertRow(-1);
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);

        cell1.innerHTML = element.emp_id;
        cell2.innerHTML = element.emp_name;
        cell3.innerHTML = element.emp_position;
        //console.log(element);
    });
    
}

function addemployee() {
    let empId = document.getElementById("emp_id").value;
    let empName = document.getElementById("emp_name").value;
    let empPosition = document.getElementById("emp_position").value;
    
    let table = document.getElementById("employee");
    let newRow = table.insertRow(-1);
    
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    
    cell1.innerHTML = empId;
    cell2.innerHTML = empName;
    cell3.innerHTML = empPosition;
    
    document.getElementById("emp_id").value = "";
    document.getElementById("emp_name").value = "";
    document.getElementById("emp_position").value = "";
}
