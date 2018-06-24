function processIt(commands) {
    let commandCollection = (function () {
        let output = "";
        return{
            append: (textInput) => output += textInput,
            removeStart: (countChars) => output = output.slice(countChars),
            removeEnd: (countChars) => output = output.slice(0, output.length - countChars),
            print: () => console.log(output)
        }
    })();

    for (let command1 of commands) {
        let [commandType, args] = command1.split(" ");
        commandCollection[commandType](args);
    }
}

processIt([
    'append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']);
processIt([
    'append 123',
    'append 45',
    'removeStart 2',
    'removeEnd 1',
    'print']);