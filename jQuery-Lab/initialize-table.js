function initializeTable() {
    console.log("beee");
    $("#createLink").on('click', addNewItem);

    let initialInput = {
        Bulgaria: 'Sofia',
        Germany: 'Berlin',
        Russia: 'Moscow'
    };

    for (let country in initialInput) {
        let tr = $("<tr>")
            .append($("<td>").text(country))
            .append($("<td>").text(initialInput[country]))
            .append($("<td>")
                .append($("<a href='#'>[Up]</a>").on('click', goUp))
                .append($("<a href='#'>[Down]</a>").on('click', goDown))
                .append($("<a href='#'>[Delete]</a>").on('click', delIt)))
        tr.appendTo($("#countriesTable"));
        fixFirstAndLast();
    };

    function delIt() {
        $(this).parent().fadeOut(function() {
            $(this).parent().remove();
            fixFirstAndLast();
        });
    };

    function  goUp() {
        let activeRow = $(this).parent().parent();
        let rowAbove = activeRow.prev();
        activeRow.fadeOut(function() {
            activeRow.insertBefore(rowAbove);
            activeRow.fadeIn();
            fixFirstAndLast();
        });
    };

    function goDown() {
        let activeRow = $(this).parent().parent();
        let rowBelow = activeRow.next();
        activeRow.fadeOut(function() {
            activeRow.insertAfter(rowBelow);
            activeRow.fadeIn();
            fixFirstAndLast();
        });
    };

    function fixFirstAndLast() {
        $("tr a").css('display', 'inline');
        let rowsSoFar = $("#countriesTable tr");
        ($(rowsSoFar[2]).find('a:contains("Up")')).css('display', 'none');
        ($(rowsSoFar[rowsSoFar.length - 1]).find("a:contains('Down')")).css('display', 'none');
    }

    function addNewItem() {
        let country = $("#newCountryText").val();
        let capital = $("#newCapitalText").val();

        let tr = $("<tr>");
        $(`<td>${country}</td>`).appendTo(tr);
        $(`<td>${capital}</td>`).appendTo(tr);
        $("<td><a href='#'>[Up]</a> <a href='#'>[Down]</a> <a href='#'>[Delete]</a></td>").appendTo(tr);
        console.log(tr);
        tr.css('display', 'none');
        tr.appendTo($("#countriesTable"));
        tr.fadeIn();
        fixFirstAndLast();

        $("#newCountryText").val('');
        $("#newCapitalText").val('');

        $('a:contains("Delete")').on('click', delIt);
        $('a:contains("Up")').on('click', goUp);
        $('a:contains("Down")').on('click', goDown);
    }
}