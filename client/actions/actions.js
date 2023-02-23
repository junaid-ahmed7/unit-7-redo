/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from "../constants/actionTypes";

//action for adding a new market, will receive location from the input field, being dispatchedtoprops in marketsContainer file, being passed down from there to marketCreator
export const addMarketLocation = (location) => ({
  type: types.ADD_MARKET,
  payload: location,
});

//action for deleting a market, will receive location from the market element, accesing the market location using props. being dispacthedtoprops in marketsDisplay, and passed down from there to market
export const deleteMarket = (location) => ({
  type: types.DELETE_CARD,
  payload: location,
});

//action for deleting a market, will receive location from the market element, accesing the market location using props. being dispacthedtoprops in marketsDisplay, and passed down from there to market
export const incrementCard = (location) => ({
  type: types.ADD_CARD,
  payload: location,
});

