function attachEvents() {
    $(".button").on("click", goChecked);

    function goChecked() {
        $(".button").removeClass("selected");
        $(this).addClass("selected");
    }
}