import _ from 'lodash';

// import a library call 'React' from the node_modules/react
import React, { Component } from 'react';
// ReactDom is used for render HTML from React components
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyClLN4r4vgHYHXDgreDiALGjXE-7FCJNSA';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            // set the state of App call videos a new value that send from the YTSearch API 'videos'
            // this.setState({ videos: videos });
            // if the key is equal to the value
            // for example setState({ videos: videos }) it can be written as setState({ videos }) as syntax sugar
            this.setState({
                videos: videos,
                // the first video will to be the selectedVideo
                selectedVideo: videos[0]
            });
            // console.log('videos from index.js:');
            // console.log(videos);
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 100);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
            </div>
        );
    }
}
// Take this component's generated HTML and put it on the page  ( in the DOM ).
// Use ReactDom to render something in the DOM
// <App /> will create an instance of App and passed through ReactDom to render
ReactDom.render(<App />, document.querySelector('.container'));


// continue in Section 35
// https://www.udemy.com/react-redux/learn/v4/t/lecture/4288086?start=0