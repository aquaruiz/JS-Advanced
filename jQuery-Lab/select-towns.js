function attachEvents() {
    $("#items li").on("click", goSelected);

    $("#showTownsButton").on("click", showSelected);
    let output = []
    function goSelected() {
        if ($(this).attr("data-selected"))
        {
            $(this)
                .removeAttr("data-selected")
                .css("background-color", "");
        } else {
            $(this)
                .attr("data-selected", true)
                .css("background-color", "#DDD");
        }
    }
    
    function showSelected() {
        let selectedLis = $($("#items li[data-selected]"));
        for (let selectedLi of selectedLis) {
            output.push($(selectedLi).text());
        }

        $("#selectedTowns").text(output.join(", "));
    }
}