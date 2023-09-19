(async function () {
  const data = await fetch("./src/data.json");
  const json = await data.json();
  let employees = json;
  let selectedEmployeeid = employees[0].id;
  let selectedEmployee = employees[0];

  const employeeList = document.querySelector(".employees__names--list");
  const employeeInfo = document.querySelector(".employees__single--info");

  //Add Employee Logic
  const createEmployee = document.querySelector(".createEmployee");
  const addEmployeeModal = document.querySelector(".addEmployee");
  const addEmployeeForm = document.querySelector(".addEmployee_create");

  createEmployee.addEventListener("click", () => {
    addEmployeeModal.style.display = "flex";
  });

  // Select Employee Logic
  employeeList.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN" && selectedEmployeeid !== e.target.id) {
      selectedEmployeeid = e.target.id;
      renderEmployees();
      renderSingleEmployee();
    }
  });

  const renderEmployees = () => {
    employeeList.innerHTML = "";

    employees.forEach((emp) => {
      const employee = document.createElement("span");
      employee.classList.add("employees__names--item");

      if (parseInt(selectedEmployeeid, 10) === emp.id) {
        employee.classList.add("selected");
        selectedEmployee = emp;
      }

      employee.setAttribute("id", emp.id);
      employee.innerHTML = `${emp.firstName} ${emp.lastName} <i class="employeeDelete">❌</i>`;

      employeeList.append(employee);
    });
  };

  const renderSingleEmployee = () => {
    employeeInfo.innerHTML = `<img src="${selectedEmployee.imageUrl}" />
    <span class="employees__single--heading">
    ${selectedEmployee.firstName}
    ${selectedEmployee.lastName}
    (${selectedEmployee.age}))<span/>
    <span>${selectedEmployee.address}<span>
    <span>${selectedEmployee.email}</span>
    <span>Mobile- ${selectedEmployee.contactNumber}</span>
    <span>DOB - ${selectedEmployee.dob}</span>
    `;
  };

  if (selectedEmployee) renderSingleEmployee();

  renderEmployees();
})();
