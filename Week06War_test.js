const chai = require("chai");
const expect = chai.expect;


describe('Card', () => {
  describe('#constructor', () => {
    it ('should take a new card with a suit and value', () => { // arranging
        const suits = 'Spade';
        const value = 10;

        const card = new Card(suit, value); // invoking

        expect(card.suit).to.equal(suit); // asserting
        expect(card.value).to.equal(value);
      
    });

    it ('should throw Error if no parameters are provided', () => {
      const createCardWithNoParameters = () => new Card();

      expect(createCardWithNoParameters).to.throw(Error, 'Suit and value needs to be provided!')
    });

  });
  });


