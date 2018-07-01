function processList(inputs) {
    let list = {
        status : [],
        add: function (str) {
            return list.status.push(str)
        },
        remove: function (str) {
            return list.status = list.status.filter(x => x !== str);
        },
        print: function (){
            console.log(list.status.join(","));
        }
    };
    for (let inp of inputs) {
        [command, str] = inp.split(" ");
        list[command](str);
    }
}

processList(['add hello', 'add again', 'remove hello', 'add again', 'print']);
processList(['add pesho', 'add gosho', 'add pesho', 'remove pesho', 'print']);