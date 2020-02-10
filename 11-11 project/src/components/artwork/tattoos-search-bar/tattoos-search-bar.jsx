import React, { Component } from "react";
import Dropdown from "react-dropdown";
import axios from "axios";
import "./tattoos-search-bar.css";

class TattoosSearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      styles: [
        { value: "neo-traditional", label: "Neo traditional" },
        { value: "polynesian", label: "Polynesian" },
        { value: "japanese-traditional", label: "Japanese Traditional" },
        { value: "realistic", label: "Realistic" },
        { value: "cartoon", label: "Cartoon" },
        { value: "all", label: "all" }
      ],
      dates: [
        { value: "desc", label: "Oldest" },
        { value: "asc", label: "Newest" }
      ],
      selectedStyle: "",
      selectedDate: ""
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.onSearchClick(e);
    
    let _this = this;
    if (this.state.selectedStyle) {
      axios
        .get(`http://localhost:8000/tattoos/${this.state.selectedStyle}`)
        .then(function(res) {
          let resTattoos = _this.sortArrayByDate(res.data);

          _this.props.onDataGot(resTattoos);
        });
    } else {
      axios.get(`http://localhost:8000/tattoos/all`).then(function(res) {
        let resTattoos = _this.sortArrayByDate(res.data);

        _this.props.onDataGot(resTattoos);
      });
    }
    
  }

  onSelect = (e) => {
    let value = e.value;
    if (value === "desc" || value === "asc") {
      this.setState({ selectedDate: value });
    } else {
      this.setState({ selectedStyle: value });
    }
    
  }

  sortArrayByDate(array) {
    let descArray = array.sort(function(a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    if (this.state.selectedDate) {
      if (this.state.selectedDate === "asc") {
        descArray.reverse();
      }
    }
    
    return descArray;
  }

  render() {
    return (
      <form className="tattoos-search-form" method="get">
        <div className="dropdowns">
          <Dropdown
            className="dropdown"
            options={this.state.dates}
            onChange={this.onSelect}
            value={this.state.selectedDate}
            menuClassName="dropdown-items"
            arrowClassName="dropdown-arrow"
            placeholder="date... "
          ></Dropdown>

          <Dropdown
            className="dropdown"
            options={this.state.styles}
            onChange={this.onSelect}
            value={this.state.selectedStyle}
            menuClassName="dropdown-items"
            arrowClassName="dropdown-arrow"
            placeholder="styles... "
          ></Dropdown>
        </div>

        <button
          type="submit"
          className="search-tattoos-button"
          onClick={this.handleClick}
        >
          <i className="fas fa-search"></i>
        </button>
      </form>
    );
  }
}

export default TattoosSearchBar;
