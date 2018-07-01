function createObj(commands) {
    let car = new Map();

    let executor = {
      create: function ([objName, inherits, parentName]) {
        parentName = parentName ? car.get(parentName) : null;
        let newObj = Object.create(parentName);
        car.set(objName, newObj);
          return newObj;
      },
      set: function ([objName ,key, value]){
          let obj = car.get(objName);
          obj[key] = value;
      },
      print: function ([objName]) {
          let obj = car.get(objName);
          let objects = [];
          for (let key in obj) {
            objects.push(`${key}:${obj[key]}`);
          }

          console.log(objects.join(", "));
      }
    };

    for (let command of commands) {
        let commandParams = command.split(" ");
        let initialCommand = commandParams.shift();

        executor[initialCommand](commandParams);
    }
}

createObj(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);