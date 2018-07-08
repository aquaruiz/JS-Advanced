function sortTickets(input, criteria){
    class Ticket {
        constructor(destinationName, price, status){
            this.destination = destinationName;
            this.price = price;
            this.status = status;
        }
    }

    let output = [];

    for (let row of input) {
        let [destination, price, status] = row.split("|");
        price = Number(price);
        let ticket = new Ticket(destination, price, status);
        output.push(ticket);
    }

    if (criteria === "price"){
        output.sort((a, b) => a[criteria] - (b[criteria]));
    } else {
        output.sort((a, b) => a[criteria].localeCompare(b[criteria]));
    }

    return output;
}


sortTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination');
sortTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status');