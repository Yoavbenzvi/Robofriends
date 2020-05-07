import React, { Component } from "react";
import { connect } from "react-redux";
import MainPage from "../components/MainPage/MainPage";

import { setSearchField, requestRobots } from "../actions";

const mapStateToProps = (state) => ({
	searchField: state.searchRobots.searchField,
	robots: state.requestRobots.robots,
	isPending: state.requestRobots.isPending,
	error: state.requestRobots.error,
});

const mapDispatchToProps = {
	onSearchChange: (event) => setSearchField(event.target.value),
	onRequestRobots: () => requestRobots(),
};

class App extends Component {
	render() {
		return <MainPage {...this.props} />;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
