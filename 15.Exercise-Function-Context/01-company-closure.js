function Company() {
  const departments = [];
  const index = {};

  const company = {
    departments,
    index,
    addEmployee,
    bestDepartment,
  };

  return company;

  function addEmployee(username, salary, position, department) {
    _validateParam(username, salary, position, department);
    if (salary < 0) {
      throw new Error('Invalid input!');
    }

    let current = departments[index[department]];
    if (current === undefined) {
      current = { name: department, employees: [] };
      departments.push(current);
      index[department] = departments.length - 1;
    }
    current.employees.push({ username, salary, position });
    return `New employee is hired. Name: ${username}. Position: ${position}`;
  }

  function bestDepartment() {
    const best = departments
      .map((x) => ({
        name: x.name,
        employees: x.employees.slice(),
        averageSalary:
          x.employees.reduce((y, z) => y + z.salary, 0) / x.employees.length,
      }))
      .sort((x, y) => y.averageSalary - x.averageSalary)[0];

    if (best !== undefined) {
      best.employees.sort(
        (x, y) => y.salary - x.salary || x.username.localeCompare(y.username)
      );
    }

    const result = [
      `Best Department is: ${best.name}`,
      `Average salary: ${best.averageSalary.toFixed(2)}`,
    ];

    best.employees.forEach((x) => {
      result.push(`${x.username} ${x.salary} ${x.position}`);
    });

    return result.join('\n');
  }

  function _validateParam(...p) {
    p.forEach((x) => {
      if (x === '' || x === undefined || x === null) {
        throw new Error('Invalid input!');
      }
    });
  }
}

let c = Company();

const myAddEmployee = c.addEmployee;

myAddEmployee('Pesho', 1500, 'electrical engineer', 'Construction');
myAddEmployee('Slavi', 500, 'dyer', 'Construction');
myAddEmployee('Stan', 2000, 'architect', 'Construction');
myAddEmployee('Stanimir', 1200, 'digital marketing manager', 'Marketing');
myAddEmployee('Pesho', 1000, 'graphical designer', 'Marketing');
myAddEmployee('Gosho', 1350, 'HR', 'Human resources');
myAddEmployee('Stanimir', 2000, 'engineer', 'Construction');
console.log(c.bestDepartment());
