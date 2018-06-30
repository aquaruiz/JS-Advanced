let solution = (function (instructString) {
    let storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let recipies = {
        apple: {
          protein: 0,
          carbohydrate: 1,
          fat: 0,
          flavour: 2
        },
        coke:{
            protein: 0,
            carbohydrate: 10,
            fat: 0,
            flavour: 20
        },
        burger:{
            protein: 0,
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        omelet: {
            protein: 5,
            carbohydrate: 0,
            fat: 1,
            flavour: 1
        },
        cheverme: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };

    function restockIt(ingedient, qnty) {
        storage[ingedient] += Number(qnty);
        // console.log("Success");
        return "Success";
    }

    function prepareIt(product, qnty) {
        if (recipies.hasOwnProperty(product)){
            let ingredients = recipies[product];

            for (let ingredient in ingredients) {
                if (storage[ingredient] < ingredients[ingredient] * qnty) {
                    // console.log(`Error: not enough ${ingredient} in stock`);
                    return `Error: not enough ${ingredient} in stock`;
                }
            }

            for (let ingredient in ingredients){
                storage[ingredient] -= ingredients[ingredient] * qnty;
            }

            // console.log("Success");
            return "Success";
        }
    }

    function reportIt() {
        let report = `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
        // console.log(report);
        return report;
    }

    return function readInstruction(instructString) {
        if (instructString === "report"){
            return reportIt();
        } else {
            let coms = instructString.split(" ");
            let command = coms[0];
            let product = coms[1];
            let qnty = coms[2];

            if (command === "restock") {
                return restockIt(product, qnty);
            } else  if (command === "prepare"){
                return prepareIt(product,qnty);
            }
        }
    }
})();

let manager = solution;
//
// manager("restock flavour 50"); // Success
// manager("prepare coke 4");
// console.log(manager("report"));

// manager("restock carbohydrate 10");
// manager("restock flavour 10");
// manager("prepare apple 1");
// manager("restock fat 10");
// manager("prepare burger 1");
//
// manager("report");

// manager("prepare cheverme 1");
// manager("restock protein 10");
// manager("prepare cheverme 1");
// manager("restock carbohydrate 10");
// manager("prepare cheverme 1");
// manager("restock fat 10");
// manager("prepare cheverme 1");
// manager("restock flavour 10");
// manager("prepare cheverme 1");
// manager("report");

manager('restock flavour 50');
manager('prepare coke 4');