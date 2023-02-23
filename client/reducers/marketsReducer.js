/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

import * as types from "../constants/actionTypes";

const initialState = {
  totalMarkets: 0,
  totalCards: 0,
  marketList: [],
  lastMarketId: 10000,
  newLocation: "",
};

const marketsReducer = (state = initialState, action) => {
  //creating variables that we use for constant reassignment in each switch case, so we dont have to delcare each time
  //new state object we return when state is changed
  let newState;
  //new arr to make slices of the market list array in the state
  let newArr;
  //instead of doing math on the cards each time, just created a cards var to store the value
  let cards;
  //this one is for the current card count on the element bieng looked at, the other one is for the total cards
  let currCards;
  //since we calculate percent changes alot, also stored that here to avoid reassigning
  let pct = 0;

  switch (action.type) {
    //logic for adding a market
    case types.ADD_MARKET:
      //shallow copy of the marketlist array
      newArr = state.marketList.slice();

      //loop through all element in the market list, since i added some functionality to add a card when add market is called with the same market
      //this whole loop is just for the purpose of incrementing the card count if the same inout is passed back in to the createmarket textbox
      for (let i = 0; i < newArr.length; i++) {
        //var to store currently iterated elem
        const currentMarket = state.marketList[i];

        //check if the current iterated elem is the elem passed in the payload, cuz then we dont want to create a new market, we will just add a card to the market
        if (currentMarket.newLocation === action.payload) {
          //incrementing current cards
          currCards = currentMarket.marketCards + 1;

          //recalculating pct
          pct = Math.floor((currCards / (state.totalCards + 1)) * 100);

          //newmarket obj to store the updated market, after changing the card count and with the new percentage. the other keys and values are all spreaded as they stay the same
          const newMarket = {
            ...currentMarket,
            marketCards: currCards,
            pctOfTotal: pct,
          };

          //overwriting the oldmarket to the new updated market in the array
          newArr[i] = newMarket;

          //creating the new state, spreading everything except the totalcards, and the market list which are the only thing being changed here
          newState = {
            ...state,
            totalCards: state.totalCards + 1,
            marketList: newArr,
          };

          //returning the newstate
          return newState;
        }
      }

      //now all this logic is for if the market doesnt already exist
      const newMarket = {
        marketId: state.lastMarketId + 1,
        marketCards: 0,
        newLocation: action.payload,
        pctOfTotal: pct,
      };

      //create a copy of the marketlist to avoid mutating the state directly
      newArr = state.marketList.slice();
      //add newly created market to our newarr
      newArr.push(newMarket);

      //creating a new state object, spreading everyting from the previous state except for the three values that we need to change
      newState = {
        ...state,
        totalMarkets: state.totalMarkets + 1,
        marketList: newArr,
        lastMarketId: state.lastMarketId + 1,
      };

      //return updated state
      return newState;

    //logic for adding a card
    case types.ADD_CARD:
      //var to store a copy of the marketlist, and the total cards after incrementing, so we dont have to type out the full name everytime
      newArr = state.marketList.slice();
      cards = state.totalCards + 1;

      //loop through new arr
      for (let i = 0; i < newArr.length; i++) {
        //assign currently iterated market to a var for readability
        const currentMarket = newArr[i];

        //if currently iterated elem location is the same as the passed in action payload
        if (currentMarket.newLocation === action.payload) {
          currCards = newArr[i].marketCards + 1;
          pct = Math.floor((currCards / cards) * 100);

          const newMarket = {
            ...newArr[i],
            marketCards: currCards,
            pctOfTotal: pct,
          };

          newArr[i] = newMarket;
        } else {
          currCards = newArr[i].marketCards;

          if (!currCards) {
            pct = 0;
          } else {
            pct = Math.floor((currCards / cards) * 100);
          }

          const newMarket = {
            ...newArr[i],
            pctOfTotal: pct,
          };
          newArr[i] = newMarket;
        }
      }
      newState = {
        ...state,
        totalCards: cards,
        marketList: newArr,
      };
      return newState;

    case types.DELETE_CARD:
      //var to store a copy of the marketlist, and the total cards after incrementing, so we dont have to type out the full name everytime
      newArr = state.marketList.slice();
      cards = state.totalCards - 1;

      for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].newLocation === action.payload) {
          currCards = newArr[i].marketCards - 1;

          if (currCards < 0) {
            return state;
          } else {
            if (!currCards) {
              pct = 0;
            } else {
              pct = Math.floor((currCards / cards) * 100);
            }
            const newMarket = {
              ...newArr[i],
              marketCards: currCards,
              pctOfTotal: pct,
            };
            newArr[i] = newMarket;
          }
        } else {
          if (cards) {
            currCards = newArr[i].marketCards;
            pct = Math.floor((currCards / cards) * 100);
            const newMarket = {
              ...newArr[i],
              pctOfTotal: pct,
            };
            newArr[i] = newMarket;
          }
        }
      }
      newState = {
        ...state,
        totalCards: cards,
        marketList: newArr,
      };
      return newState;

    default: {
      return state;
    }
  }
};

export default marketsReducer;
