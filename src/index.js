import React, { Component } from 'react'; // var React = require('react');
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyBTDqA9Ta0Ya4xOHzYLdXaWKZdoSNnfjSw';

YTSearch({key: API_KEY, term: 'Elon'}, function(data){
  console.log(data);
})

// create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'Elon'}, videos => {
      this.setState({ videos })
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
