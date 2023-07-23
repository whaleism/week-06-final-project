class Player { // players (2) in game, have a hand (array of cards), and points start at 0
    constructor(name, hand = []) {
        this.name = name;
        this.hand = hand;
        this.points = 0;
    }
}

class Card { // a single card
    constructor(rank, suit, value) {
    this.rank = rank;
    this.suit = suit;
    this.value = value;
    }
}

class Deck { // represents 52 playing cards and have methods to shuffle the deck and deal cards
    constructor() {
        this.cards = []; // array
    }
      buildDeck() { // method 
        const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
        const ranks = ["Ace", "2", "3,", "4" , "5", "6", "7", "8", "9", "10", "Jack", "King", "Queen"];
    
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                let card = new Card(ranks[j], suits[i], j + 1);
                this.cards.push(card);
            }
        }
    }
    
     shuffle() { // random shuffle in array (fisher yates)
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
    
     dealCard() { // dealing cards
        return this.cards.pop();
    }
}

class Game { // game is being played
    playWarGame () { // 
        const player1 = new Player("Player 1: Beep");
        const player2 = new Player("Player 2: Boop");
        const deck = new Deck();

        deck.buildDeck();
        deck.shuffle();
    
        for (let i = 0; i < 26; i++) { // dealing cards to player, each player has 26 cards
            player1.hand.push(deck.dealCard());
            player2.hand.push(deck.dealCard());
        }

        console.log("Player 1 Beep's inital points are: " + player1.points);
        console.log("Player 2 Boop's inipoints are " + player2.points);
        let rounds = 26; // number of rounds to plaaaaaaaaaaaaay

        for (let round = 1; round <= rounds; round++) {
            console.log("Round " + round + ": ");

            if (player1.hand.length === 0 || player2.hand.length === 0) {
                console.log("Someone ran out of cards, oh no!");
            }

            let card1 = player1.hand.pop(); // player 1 plays a card
            let card2 = player2.hand.pop(); // player 2 plays a card

            console.log("Player 1 (Beep) plays: " + card1.rank + " of " + card1.suit);
            console.log("Player 2 (Boop) plays: " + card2.rank + " of " + card2.suit);

        if (card1.value > card2.value) {
            player1.points++;
            console.log("Player 1: Beep wins this round!");
        } else if (card2.value > card1.value) {
            player2.points++;
            console.log("Player 2: Boop wins this round!");
        } else {
            console.log("Both players are tied!")
        }
        }

        console.log("Final scores: "); // console log the final points
        console.log("Player 1: Beep's points are " + player1.points);
        console.log("Player 2: Boop's points are " + player2.points);
    
        let winner; // console log who is the final winner : )
        if (player1.points > player2.points) {
            winner = player1;
            console.log("Winner is player 1: Beep!");
        } else if (player2.points > player1.points) {
            winner = player2;
            console.log("Winner is player 2: Boop!");
        } else {
            console.log("Sadly neither players are winners");
        }
    }
}

const game = new Game();
game.playWarGame(); // execute game