function solve() {
  const juniorTasks = [' is working on a simple task.'];
  const seniorTasks = [
    ' is working on a complicated task.',
    ' is taking time off work.',
    ' is supervising junior workers.',
  ];
  const managerTasks = [
    ' scheduled a meeting.',
    ' is preparing a quarterly report.',
  ];

  class Employee {
    constructor(name, age) {
      if (new.target === Employee) {
        throw new Error('Cannot instantiate abstract class');
      }
      this.name = name;
      this.age = age;
      this.salary = 30;
      this.tasks = [];
    }

    work() {
      const currentTask = this.tasks.shift();
      console.log(this.name + currentTask);
      this.tasks.push(currentTask);
    }

    collectSalary() {
      console.log(
        `${this.name} received ${this._calculateSalary()} this month.`
      );
    }

    _calculateSalary() {
      return this.salary;
    }
  }

  class Junior extends Employee {
    constructor(name, age) {
      super(name, age);

      juniorTasks.forEach((x) => this.tasks.push(x));
    }
  }

  class Senior extends Employee {
    constructor(name, age) {
      super(name, age);

      seniorTasks.forEach((x) => this.tasks.push(x));
    }
  }

  class Manager extends Employee {
    constructor(name, age) {
      super(name, age);

      this.dividend = 50;

      managerTasks.forEach((x) => this.tasks.push(x));
    }

    _calculateSalary() {
      return super._calculateSalary() + this.dividend;
    }
  }

  return {
    Employee,
    Junior,
    Senior,
    Manager,
  };
}

const employees = solve();
const Emploee = employees.Employee;
const Junior = employees.Junior;
const Senior = employees.Senior;
const Manager = employees.Manager;

// const emploee = new Emploee('F', 8);
const junior = new Junior('Pesho', 7);
junior.salary = 1500;
const senior = new Senior('Gosho', 34);
senior.salary = 2500;
const manager = new Manager('Sasho', 38);
manager.salary = 3500;
manager.dividend = 1000;

junior.work();
senior.work();
manager.work();

junior.collectSalary();
senior.collectSalary();
manager.collectSalary();
