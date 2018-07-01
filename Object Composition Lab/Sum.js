// $(function () {
    // let model = getModel();
    // model.init("#num1", "#num2", "#result");
    // $("#sumButton").click(model.add);
    // $("substractButton").click(model.subtract);

    // // With Model Pattern
    //
    // function getModel() {
    //     let model = {
    //         init: function(num1Selector, num2Selector, resultSelector){
    //             model.num1 = $(num1Selector);
    //             model.num2= $(num2Selector);
    //             model.result = $(resultSelector);
    //         },
    //         add: () => model.action((a, b) => a + b),
    //         subtract: () => model.action((a, b) => a- b),
    //         action: function (operation) {
    //             let num1 = Number(model.num1.val());
    //             let num2 = Number(model.num2.val());
    //             model.result.val(operation(num1, num2));
    //         }
    //     };
    //
    //     return model;
    // }
// });

$(function () {
    let model = getModel();
    model.init("#num1", "#num2", "#result");
    $("#sumButton").click(model.add);
    $("substractButton").click(model.subtract);

    // With Revealing Model Pattern

    function getModel() {
        let num1, num2, result;
        function init(num1Selector, num2Selector, resultSelector) {
            num1 = $(num1Selector);
            num2 = $(num2Selector);
            result = $(resultSelector);
        }
        
        function add() {
            action((a, b) => a + b);
        }

        function subtract() {
            action((a, b) => a - b);
        }

        function action(operationExpresssion) {
            let val1 = Number(num1.val());
            let val2 = Number(num2.val());
            result.val(operationExpresssion(val1, val2));
        }

        return {init, add, subtract};
    }
});