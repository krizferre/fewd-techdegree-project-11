import React, { Component } from 'react';
import axios from 'axios';

import apiKey from '../config';

import Header from './header';
import PhotoContainer from './photos/PhotoContainer';

export default class Container extends Component {

  state = {
    photos: [],
    loading: true,
    keyword: ''
  }

  // initially perform search function when component is mounted
  componentDidMount() {
    this.performSearch();
  }

  performSearch = (keyword = 'cats', programmaticallyCalled = false) => {

    // this.props.keyword is passed later than performSearch()
    // so when executed programmatically, use the passed keyword argument from function call
    if (!programmaticallyCalled) {
      keyword = this.props.keyword;
    }

    // for every search, reset loading and keyword states
    this.setState({
      loading: true,
      keyword: keyword
    });

    const numberOfRecords = 16;
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${keyword}&per_page=${numberOfRecords}&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo, // save the retrieved photos to state
          loading: false, // loading is done
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    this.keyword = keyword; // to be used for search results title
  }

  render() {
    let title = this.props.title;
    if (this.props.title === 'Results for ') {
      title += `'${this.keyword}'`;
    }

    return (
      <div className="container">    
        <Header performSearch={this.performSearch} />  
        {
          (this.state.loading) // if loading images in progress
          ? <p><em>Loading...</em></p>
          : <PhotoContainer photos={this.state.photos} title={title} />
        }
      </div>
    );
  }
}