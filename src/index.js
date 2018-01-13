import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyCPcYQhXKNEI4eC1ofjGUXAODQN7ONU5wI';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };
        
        YTSearch({key: API_KEY, term: 'Elon Musk'}, (videos) => {
            this.setState({ videos });
            // this.setState({ videos: videos }) works when the key and the value are the same name
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={ this.state.videos } /> 
            </div>
        );   // defining the property videos on the JSX
    }
}


ReactDOM.render(<App />, document.querySelector('.container'), console.log('callback'));
