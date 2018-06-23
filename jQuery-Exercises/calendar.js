function calendar([day, month, year]) {
    let today = new Date(year, month - 1, day);
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let firstDayOfCurrentMonth = new Date(year, month - 1, 1);
    let lastDayOfCurrentMonth = new Date(year, month, 0);

    let table = $("<table>")
        .append($("<caption>")
            .text(`${months[today.getMonth()]} ${year}`))
        .appendTo("#content");

    let body = $("<tbody>")
        .append($("<tr>")
            .append($("<th>").text("Mon"))
            .append($("<th>").text("Tue"))
            .append($("<th>").text("Wed"))
            .append($("<th>").text("Thu"))
            .append($("<th>").text("Fri"))
            .append($("<th>").text("Sat"))
            .append($("<th>").text("Sun")))
        .appendTo(table);

    let firstRow = $("<tr>")
        .appendTo(body);

    for (let i = 0; i < (firstDayOfCurrentMonth.getDay() === 0 ? 7 - 1 : firstDayOfCurrentMonth.getDay() - 1); i++) {
        $("<td>").appendTo(firstRow);
    }

    let startDate = firstDayOfCurrentMonth.getDate();

    for (let i = (firstDayOfCurrentMonth.getDay() === 0 ? 7 - 1 : firstDayOfCurrentMonth.getDay() - 1); i < 7; i++) {
        if (startDate === today.getDate()){
            $("<td>")
                .text(startDate++)
                .addClass("today")
                .appendTo(firstRow);
        } else {
            $("<td>")
                .text(startDate++)
                .appendTo(firstRow);
        }
    }

    for (let i = 0; i < Math.trunc((lastDayOfCurrentMonth.getDate()+ (firstDayOfCurrentMonth.getDay() === 0 ? 7 : firstDayOfCurrentMonth.getDay())) / 7 - 1); i++) {
        let row = $("<tr>");

        for (let j = 0; j < 7; j++) {
            if (startDate === today.getDate()){
                $("<td>")
                    .text(startDate++)
                    .addClass("today")
                    .appendTo(row);
            } else {
                $("<td>")
                    .text(startDate++)
                    .appendTo(row);
            }
        }

        if (i < Math.trunc(lastDayOfCurrentMonth.getDate()+ (firstDayOfCurrentMonth.getDay() === 0 ? 7 : firstDayOfCurrentMonth.getDay())) / 7 - 1){
            row.appendTo(body);
        }
    }

    let lastRow = $("<tr>");

    for (let i = startDate - 1; i < lastDayOfCurrentMonth.getDate(); i++) {
        if (startDate === today.getDate()){
            $("<td>")
                .text(startDate++)
                .addClass("today")
                .appendTo(lastRow);
        } else {
            $("<td>")
            .text(startDate++)
            .appendTo(lastRow);
        }

    }

    for (let i = (lastDayOfCurrentMonth.getDay() === 0 ? 7 : lastDayOfCurrentMonth.getDay()); i < 7; i++) {
        $("<td>")
            .appendTo(lastRow);
    }

    console.log(lastDayOfCurrentMonth.getDay());
    if (lastDayOfCurrentMonth.getDay() !== 0){
        lastRow.appendTo(body)
    }
}