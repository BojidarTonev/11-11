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
  
  onDataGot = (data) => {
    let _this = this;

    let timeout = setTimeout(function(){
      _this.setState({ tattoos: data, loading: false })

      clearTimeout(timeout)
    }, 2000)
  }

  onSearchClick = () => {
    this.setState({ loading: true })
  }

  render() {
    const { tattoos, loading } = this.state;

    return (
      <div className="artowrk">
        <TattoosSearchBar onDataGot={this.onDataGot} onSearchClick={this.onSearchClick} />
        <div className="artowrk-content">
          {loading ? <LoadingSpinner /> : <AllTattoos tattoos={tattoos} />}
        </div>
      </div>
    );
  }
  
}

export default Artwork;