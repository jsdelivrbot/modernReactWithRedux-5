import React, { Component } from 'react';

// The { Component } is just like declare
// const Component = React.Component
// So it can be use just lik
// 'class SearchBar extends Component {}'
// instand of 
// 'class SearchBar extends React.Component'

// const SearchBar = () => {
//    return <input />;  
// }

// What's state
// State is a plain JavaScript object that is used to record and react to user events
// each class based components that we defined has its own state object 
// whenever a component state is changed the component immediately renders 
// and also forces all of its children to render as well

// So if SearchBar has some state changed the render function will be rewritten


// Declare a class name as SearchBar
class SearchBar extends Component {

    // initialize state in a class based component
    // All JavaScript classes have a special function call 'constructor'
    // The constructor function is the first and only function call automatically
    // whever a new instance of class is created.
    constructor(props) {
        super(props);

        this.state = { term: 'Starting Value' };
    }

    // every class must have render function
    // and declare what to render after the keyword return
    // or it won't be render on the DOM
    // prop : proper property
    render() {

        // Whenever we update the input element or change the value of it
        // the event handler runs reset the state this.state.term update new value by the input
        // Whenever we set a new value to the input, it will automatically cause the state
        // to rerender and push those all the update information from the render method into the DOM.
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }

    // onInputChange event handler
    // onInputChange(event) {
    //console.log(event.target.value);
    //console.log(event);
    // }
}


export default SearchBar;

