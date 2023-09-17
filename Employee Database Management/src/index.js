(async function () {
  const data = await fetch("./src/data.json");
  const json = await data.json();
  let employees = json;
  let selectedEmployeeid = employees.id;
  let selectedEmployee = employees;

  const employeeList = document.querySelector(".employees__names--list");
  const employeeInfo = document.querySelector(".employee__single--info");

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

  const renderSingleEmployee = () => {};
  renderEmployees();
})();
