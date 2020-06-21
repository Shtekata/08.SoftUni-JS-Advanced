function mixin(mainObj, ...objs) {
  return Object.assign(mainObj, ...objs);
}

const userMethods = {
  obj: {
    pop1: {
      
    }
  },
  setName(name) {
    this.name = name;
  },
  getName() {
    return this.name;
  },
};

const employeeMethods = {
  pos:'Pos',
  setPosition(pos) {
    this.position = pos;
  },
  getPosition() {
    return this.position;
  },
};

const myEmploee = mixin(
  { name: null, position: null },
  userMethods,
  employeeMethods
);
myEmploee.setPosition('Manager');
myEmploee.pos = () => (this.position = 'AlaBala');
console.log(myEmploee);
