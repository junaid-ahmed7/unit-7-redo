/**
 * ************************************
 *
 * @module  MarketsContainer
 * @author
 * @date
 * @description stateful component that renders MarketCreator and MarketsDisplay
 *
 * ************************************
 */

import React, { Component } from "react";
import { connect } from "react-redux";
// import actions from action creators file
import * as actions from "../actions/actions";
import MarketCreator from "../components/MarketCreator.jsx";
import MarketsDisplay from "../components/MarketsDisplay.jsx";
// import child components...

const mapStateToProps = (state) => ({
  newMarket: state.markets,
});

const mapDispatchToProps = (dispatch) => ({
  marketClickHandler: (location) => {
    if (!location.length) {
      return;
    };
    document.querySelector("#enteredMarket").value = "";
    dispatch(actions.addMarketLocation(location));
  },
});

class MarketsContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="innerbox">
        <MarketCreator marketClickHandler={this.props.marketClickHandler} />
        <MarketsDisplay newMarket={this.props.newMarket} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketsContainer);
