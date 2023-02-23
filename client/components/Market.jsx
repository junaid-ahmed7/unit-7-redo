/**
 * ************************************
 *
 * @module  Market
 * @author
 * @date
 * @description presentation component that renders a single box for each market
 *
 * ************************************
 */

import React from "react";

//component to render individual markets
const Market = (props) => {
  
  //two helper funcs to allow for incrementing market cards. needed to add these to access the value of the location of the market.
  const incrementer = () => {
    const whatToIncrement = props.newMarket.newLocation;
    props.onIncrementClick(whatToIncrement);
  };
  const deleter = () => {
    const whatToDelete = props.newMarket.newLocation;
    props.onDeleteClick(whatToDelete);
  };

  return (
    <div className="marketBox">
      <p>
        <b>Market ID:</b> {props.newMarket.marketId}
      </p>
      <p id="delMarketLocation">
        <b>Location:</b> {props.newMarket.newLocation}
      </p>
      <p>Cards: {props.newMarket.marketCards}</p>
      <p>Percent of total: {props.newMarket.pctOfTotal}%</p>
      <button onClick={deleter}>Delete</button>
      <button onClick={incrementer}>Increment</button>
    </div>
  );
};

export default Market;
