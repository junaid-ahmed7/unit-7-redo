/**
 * ************************************
 *
 * @module  MarketCreator
 * @author
 * @date
 * @description presentation component that takes user input for new market creation
 *
 * ************************************
 */

import React from "react";

const MarketCreator = (props) => {
  return (
    <div>
      <h4>Create New Market:</h4>
      <input type="text" id="enteredMarket"></input>
      <button
        onClick={() =>
          props.marketClickHandler(
            document.querySelector("#enteredMarket").value
          )
        }
      >
        Add Market
      </button>
    </div>
  );
  // how do we create the circuit between the store and an input field?
  // how do we update the store from a presentation component?
};

export default MarketCreator;
