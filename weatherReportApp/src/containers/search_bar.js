import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index.js';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
        // if a call back reference to 'this', it will need to do the setting like the variable set below
        // this.onInputChange.bind(this)
        // in this case
        // this is SearchBar
        // it can be express as :
        // SeachBar.onInputChange.bind(SearchBar) and set it to => SearchBar.onInputChange
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        // event.target.value is to get what the value from the input
        // console.log(event.target.value);
        // component state ({ term: event.target.value })
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        // tails browser don't submit the form as default
        event.preventDefault();

        // We need to go and fetch weather data
        // action creator
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    className="form-control"
                    placeholder="Get a five day forecast for your favorite cities."
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);