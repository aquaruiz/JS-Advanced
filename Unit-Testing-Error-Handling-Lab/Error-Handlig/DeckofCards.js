function printDeckOfCards(cards) {
    function makeCard (face, suit){
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = ['S', 'H', 'D', 'C'];

        if (!validFaces.includes(face))
        {
            throw new Error("Invalid card face: " + face);
        }

        if (!validSuits.includes(suit))
        {
            throw new Error("Invalid card suit: " + suit);
        }

        let card = {
            face: face,
            suit: suit,
            toString: () => {
                let suitToChar = {
                    'S':  "\u2660",
                    'H': "\u2665",
                    'D': "\u2666",
                    'C': "\u2663"
                };

                return card.face + suitToChar[card.suit];
            }
        };

        return card.toString();
    }

    let output = [];

    for (let card of cards) {
        let suit = card.substr(card.length - 1, 1);
        let face = card.substring(0, card.length - 1);

        try {
            output.push(makeCard(face, suit));
        } catch (e) {
            console.log("Invalid card: " + card);
            return;
        }
    }

    console.log(output.join(" "));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);