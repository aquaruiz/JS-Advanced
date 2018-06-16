function attachEventsListeners() {
    document.getElementById("convert").addEventListener("click", convertDistance)

    function convertDistance(){
        let inputVal = Number(document.getElementById("inputDistance").value)
        let inputUnit = document.getElementById("inputUnits").value
        let outputUnit = document.getElementById("outputUnits").value
        console.log(inputUnit, outputUnit, inputVal * 5);
        
        let outputVal = 0

        switch (inputUnit) {
            case "km":
                outputVal = inputVal * 1000
                console.log(outputVal);
                break
            case "m":
                outputVal = inputVal
                break
            case "cm":
                outputVal = inputVal * 0.01
                break
            case "mm":
                outputVal = inputVal * 0.001
                break
            case "mi":
                outputVal = inputVal * 1609.34
                break
            case "yrd":
                outputVal = inputVal * 0.9144
                break
            case "ft":
                outputVal = inputVal * 0.3048
                break
            case "in":
                outputVal = inputVal * 0.0254
                break
        }

        console.log(outputVal);
        
        switch (outputUnit) {
            case "km":
                outputVal = outputVal / 1000
                break
            case "m":
                outputVal = outputVal
                break
            case "cm":
                outputVal = outputVal / 0.01
                break
            case "mm":
                outputVal = outputVal / 0.001
                break
            case "mi":
                outputVal = outputVal / 1609.34
                break
            case "yrd":
                outputVal = outputVal / 0.9144
                break
            case "ft":
                outputVal = outputVal / 0.3048
                break
            case "in":
                outputVal = outputVal / 0.0254
                break
        }

        document.getElementById("outputDistance").value = outputVal
    }
}

// 1 km = 1000 m
// 1 m = 1 m
// 1 cm = 0.01 m
// 1 mm = 0.001 m
// 1 mi = 1609.34 m
// 1 yrd = 0.9144 m
// 1 ft = 0.3048 m
// 1 in = 0.0254 m