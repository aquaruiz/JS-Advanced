let result = (function () {
    let suits = {
        'CLUBS': "\u2663",  // ♣
        'DIAMONDS': "\u2666",  // ♦
        'HEARTS': "\u2665",  // ♥
        'SPADES': "\u2660"   // ♠
    };

    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    class Card {
        constructor(face, suit){
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(f) {
            if (!faces.includes(f)){
                throw new Error("Invalid Face! " + f);
            }

            this._face = f;
        }

        get suit() {
            return this._suit;
        }

        set suit(s) {
            if (!Object.values(suits)
                .includes(s)){
                throw new Error("Invalid Suit! " + s)
            }

            this._suit = s;
        }

        toString() {
            return this._face + this._suit;
        }
    }

    return {
        Suits: suits,
        Card: Card
    }
}());

let Card = result.Card;
let Suits = result.Suits;

let card = new Card("Q", Suits.CLUBS);
console.log(card + "");

card.face = "A";
card.suit = Suits.DIAMONDS;
console.log(card + "");
// let card2 = new Card("1", Suits.DIAMONDS);