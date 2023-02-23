/**
 * ************************************
 *
 * @module  MarketsDisplay
 * @author
 * @date
 * @description presentation component that renders n Market components
 *
 * ************************************
 */

import React from "react";
import { deleteMarket } from "../actions/actions.js";
import { connect } from "react-redux";
import Market from "./Market.jsx";
import * as actions from "../actions/actions";
import TotalsDisplay from "./TotalsDisplay.jsx";

const mapDispatchToProps = (dispatch) => ({
  
  deleteMarket: (location) => {
    dispatch(actions.deleteMarket(location));
  },
  incrementCard: (location) => {
    dispatch(actions.incrementCard(location));
  },
});

const MarketsDisplay = (props) => {
  const marketCards = [];
  for (let i = 0; i < props.newMarket.marketList.length; i++) {
    marketCards.push(
      <Market
        key={i}
        newMarket={props.newMarket.marketList[i]}
        onDeleteClick={props.deleteMarket}
        onIncrementClick={props.incrementCard}
      />
    );
  }
  return (
    <div className="displayBox">
      <h4>Markets</h4>
      {marketCards}
    </div>
  );
};

export default connect(null, mapDispatchToProps)(MarketsDisplay);
