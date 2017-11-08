
import _ from "lodash";
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

// Components
import SearchBar from './Components/SearchBar';
import VideoList from './Components/VideoList';
import VideoDeets from './Components/VideoDeets';

// Styles
import './App.css';

// Misc
const API_KEY = 'AIzaSyBRD15sy4HJ49Dg45xLquTxWN7YN8M8z7U';
const DEFAULT_TERM = 'les twins';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      videos: [],
      selectedVideo: null,
      isLoading: true
    };

    this.videoSearch();
  }

  videoSearch(term = DEFAULT_TERM) {
    this.setState({ isLoading: true });
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({ 
        videos,
        isLoading: false,
        selectedVideo: videos[0]
      });
    });
  }
  
  render() {
    const videoSearch = _.debounce(term => this.videoSearch(term), 300);

    return (
      <div className="App">

        <SearchBar onSearchTermChange={term => videoSearch(term)} />
  
        <main className="main pure-g">
          <section className="pure-u-1 pure-u-md-2-3">
            <VideoDeets 
              noResults={this.state.videos.length === 0 && !this.state.isLoading}
              video={this.state.selectedVideo} />
          </section>

          <aside className="pure-u-1 pure-u-md-1-3">
            <VideoList 
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos} />
          </aside>
        </main>

      </div>
    );
  }
}

export default App;
