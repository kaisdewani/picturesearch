import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit(term){
    axios.get('https://api.unsplash.com/search/photos', {
      params: {query: term } ,
      headers: {
        Authorization: 'Client-ID ef77b65c8a272dc70f7ee57fe66275cfcd4d02fd697ba5d11905e8c594043534'
      }
    });
  }
  render () {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    )
  }
}

export default App