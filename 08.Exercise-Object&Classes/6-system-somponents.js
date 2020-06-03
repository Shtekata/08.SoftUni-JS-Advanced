function solve(input) {
    const catalog = {};
    for (let line of input) {
        const [system, component, sub] = line.split(' | ');

        if (!catalog.hasOwnProperty(system)) {
            catalog[system] = {};
        }

        if (!catalog[system].hasOwnProperty(component)) {
            catalog[system][component] = [];
        }

        catalog[system][component].push(sub);
    }
    
    Object.entries(catalog).sort((x, y) => {
        return Object.keys(y[1]).length - Object.keys(x[1]).length || x[0].localeCompare(y[0]);
    }).forEach(([system,component]) => {
        console.log(system);
        Object.entries(component).sort((x, y) => y[1].length - x[1].length)
            .forEach(([name, sub]) => {
                console.log(`|||${name}`);
                sub.forEach(x => {
                    console.log(`||||||${x}`);
                });
        })
    });
}

solve([
  'SULS | Main Site | Home Page',
  'SULS | Main Site | Login Page',
  'SULS | Main Site | Register Page',
  'SULS | Judge Site | Login Page',
  'SULS | Judge Site | Submittion Page',
  'Lambda | CoreA | A23',
  'SULS | Digital Site | Login Page',
  'Lambda | CoreB | B24',
  'Lambda | CoreA | A24',
  'Lambda | CoreA | A25',
  'Lambda | CoreC | C4',
  'Indice | Session | Default Storage',
  'Indice | Session | Default Security',
]);