import React, { Component } from 'react';
import AllTattoos from './all-tattoos';
import LoadingSpinner from '../../shared/loading-spinner/loading-spinner'
import TattoosSearchBar from './tattoos-search-bar/tattoos-search-bar'

import './artwork.css';
import "../../shared/styles/description.css";

class Artwork extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tattoos: [],
      loading: false
    }
  }
  
  onDataGot = function(data) {
    let _this = this;

    setInterval(function(){
      _this.setState({ tattoos: data, loading: false })
    }, 0)
  }

  onSearchClick = function(e) {
    this.setState({ loading: true })
  }

  render() {
    const { tattoos, loading } = this.state;

    return (
      <div className="artowrk">
        <TattoosSearchBar onDataGot={this.onDataGot.bind(this)} onSearchClick={this.onSearchClick.bind(this)} />
        <div className="artowrk-content">
          {loading ? <LoadingSpinner /> : <AllTattoos tattoos={tattoos} />}
        </div>
      </div>
    );
  }
  
}

export default Artwork;