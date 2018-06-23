function createBook(container, book, author, isbn) {
    let theFckIife = (function () {
        let id = 0;
        
        return function (container, book, author, isbn) {
            let bookId = "book" + ++id;

            let newDiv = $("<div>")
                .attr("id", bookId);

            let titleP = $("<p>")
                .addClass("title")
                .text(book)
                .appendTo(newDiv);
            let authorP = $("<p>")
                .addClass("author")
                .text(author)
                .appendTo(newDiv);
            let isbnP = $("<p>")
                .addClass("isbn")
                .text(isbn)
                .appendTo(newDiv);
            let selectBtn = $("<button>")
                .text("Select")
                .appendTo(newDiv);
            let deselectBtn = $("<button>")
                .text("Deselect")
                .appendTo(newDiv);

            newDiv.appendTo(container);

            selectBtn.on("click", goSelected);
            deselectBtn.on("click", goDeselcted);


            function goSelected() {
                $(this).parent()
                    .css("border", "2px solid blue");
            }

            function goDeselcted() {
                $(this).parent()
                    .css("border", "none");
            }
        }
    })();

    theFckIife(container, book, author, isbn);
}