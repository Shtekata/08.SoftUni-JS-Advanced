class Company {
  constructor() {
    this.departments = [];
    this.index = {};
  }

  addEmployee(username, salary, position, department) {
    // let data = [username, salary, position, department];
    // if (
    //   data.includes('') ||
    //   data.includes(undefined) ||
    //   data.includes(null) ||
    //   salary < 0
    // ) {
    //   throw new Error('Invalid input!');
    // }

    this._validateParam(username, salary, position, department);
    if (salary < 0) {
      throw new Error('Invalid input!');
    }

    // let current = this.departments.find((x) => x.name === department);
    let current = this.departments[this.index[department]];
    if (current === undefined) {
      current = { name: department, employees: [] };
      this.departments.push(current);
      this.index[department] = this.departments.length - 1;
    }
    current.employees.push({ username, salary, position });
    return `New employee is hired. Name: ${username}. Position: ${position}`;
  }

  bestDepartment() {
    // const departments = this.departments.map((x) => {
    //   const dep = Object.assign({}, x);
    //   dep.averageSalary =
    //     x.employees.reduce((p, c) => p + c.salary, 0) / x.employees.length;
    //   return dep;
    // });

    const best = this.departments.map((x) => ({
      name: x.name,
      employees: x.employees.slice(),
      averageSalary:
        x.employees.reduce((y, z) => y + z.salary, 0) / x.employees.length,
    })).sort((x, y) => y.averageSalary - x.averageSalary)[0];

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

  _validateParam(...p) {
    // if (!x) {
    p.forEach((x) => {
      if (x === '' || x === undefined || x === null) {
        throw new Error('Invalid input!');
      }
    });
  }
}

let c = new Company();
c.addEmployee('Stanimir', 2000, 'engineer', 'Construction');
c.addEmployee('Pesho', 1500, 'electrical engineer', 'Construction');
c.addEmployee('Slavi', 500, 'dyer', 'Construction');
c.addEmployee('Stan', 2000, 'architect', 'Construction');
c.addEmployee('Stanimir', 1200, 'digital marketing manager', 'Marketing');
c.addEmployee('Pesho', 1000, 'graphical designer', 'Marketing');
c.addEmployee('Gosho', 1350, 'HR', 'Human resources');
console.log(c.bestDepartment());
