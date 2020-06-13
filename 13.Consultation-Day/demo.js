function myFunc() {
  let someVar = 5;
  let anotherVar = 'string';

  function setVar(value) {
    someVar = value;
  }

  function getVar() {
    return someVar;
  }

  return {
    setVar,
    getVar,
  };
}

const accessor = myFunc();
console.log(accessor.getVar());
