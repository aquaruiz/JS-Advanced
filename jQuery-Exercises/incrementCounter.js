function increment(selector) {
    let mainDiv = $(selector);
    let textArea = $("<textarea>");
    let incrementBtn = $("<button>");
    let addBtn = $("<button>");
    let unList = $("<ul>");

    mainDiv
        .append(textArea)
        .append(incrementBtn)
        .append(addBtn)
        .append(unList);

    textArea
        .addClass("counter")
        .attr("value", "0")
        .attr("disabled", true)
        .text("0");

    incrementBtn
        .addClass("btn")
        .attr("id", "incrementBtn")
        .text("Increment")
        .on("click", increment);

    addBtn
        .addClass("btn")
        .attr("id", "addBtn")
        .text("Add")
        .on("click", add);

    unList.addClass("results");

    function increment() {
        let first = ($(($(".counter"))[0])).val();
        $(($(".counter"))[0]).val(++first);
    }
    
    function add() {
        let first = ($(($(".counter"))[0])).val();

        $("<li>")
            .text(first)
            .appendTo(unList)
    }
}