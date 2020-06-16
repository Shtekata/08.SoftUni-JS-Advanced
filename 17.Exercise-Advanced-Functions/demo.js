function renderTable(employees, offices, otherData) {
    console.log(employees, offices, otherData);
}

function collectEmployees(employees) {
  return function (offices, otherData) {
    return () => renderTable(employees, offices, otherData);
  };
}

const employeeData = ['john', 'peter', 'goerge'];
const collectOtherData = collectEmployees(employeeData);

const offices = ['Main', 'South', 'West'];
const otherData = [5, 1, 67, 12];
const finalRender = collectOtherData(offices, otherData);

finalRender();
