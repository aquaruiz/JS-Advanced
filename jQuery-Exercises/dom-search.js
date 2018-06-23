function domSearch(selector, isCaseSensitive) {
    let container = $(selector)
        .addClass("items-control");

    let  addDiv = $("<div>")
        .addClass("add-controls")
        .appendTo(container);

    let addPart = $("<label>")
        .text("Enter text: ")
        .append($("<input>"))
        .appendTo(addDiv);

    let addAnchor = $("<a>")
        .addClass("button")
        .attr("href", "#")
        .text("Add")
        .css("display", "inline-block")
        .appendTo(addDiv);

    let searchDiv = $("<div>")
        .addClass("search-controls")
        .appendTo(container);

    let searchPart = $("<label>")
        .text("Search: ")
        .append($("<input>"))
        .appendTo(searchDiv);

    let resultDiv = $("<div>")
        .addClass("result-controls")
        .appendTo(container);

    let resultPart = $("<ul>")
        .addClass("items-list")
        .appendTo(resultDiv);

    $(".search-controls label input")
        .on("input", searchIt);

    $($(".button")[0]).on("click", addNewItem);

    function addNewItem() {
        let newItem = $(".add-controls label input").val();
        $(".add-controls label input").val("");

        let xAnchor = $("<a>")
            .addClass("button")
            .attr("href", "#")
            .text("X");

        let strongItem = $("<strong>")
            .text(newItem);

        let newLi = $("<li>")
            .addClass("list-item")
            .append(xAnchor.on("click", deleteIt))
            .append(strongItem)
            .appendTo(resultPart);
    }

    function deleteIt() {
        $(this).parent().remove();
    }

    function searchIt() {
        let findIt = new RegExp($(".search-controls input").val(), "g");
        let lis = $(".list-item strong");

        if (!Boolean(isCaseSensitive)){
            findIt = new RegExp($(this).val(), "gi");
        }

        for (let i = 0; i < lis.length; i++) {
            let item = $(lis[i]).text();

            if (item.match(findIt)) {
                $(lis[i]).parent().css("display", "");
            } else {
                $(lis[i]).parent().css("display", "none");
            }
        }
    }
}