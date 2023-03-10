/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders TotalsDisplay and MarketsContainer
 *
 * ************************************
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import TotalsDisplay from "../components/TotalsDisplay.jsx";
import MarketsContainer from "./MarketsContainer.jsx";

const mapStateToProps = (state) => {
  const { totalCards, totalMarkets } = state.markets;
  return { totalCards, totalMarkets };
};

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="outerBox">
          <h1 id="header">MegaMarket Loyalty Cards</h1>
          <TotalsDisplay
            totalCards={this.props.totalCards}
            totalMarkets={this.props.totalMarkets}
          />
          <MarketsContainer />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(MainContainer);
