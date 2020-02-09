import React, { Component } from "react";
import Link from "../../../shared/link/link";
import TattooDetailsModal from "../../modals/tattoo-details-modal/tattoo-details-modal";
import "./tattoo.css";

class Tattoo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
  }

  openModal() {
    if (!this.state.showModal) {
      this.setState({ showModal: true });
      document.getElementsByTagName("html")[0].classList.add("modalIsOpen");
    } else {
      this.closeModal();
    }
  }
  closeModal() {
    if (this.state.showModal) {
      this.setState({ showModal: false });
      document.getElementsByTagName("html")[0].classList.remove("modalIsOpen");
    }
  }

  render() {
    var { style, date, imageUrl } = this.props;
    date = date.split("T")[0];

    return (
      <div className="tattoo-card" onClick={this.openModal.bind(this)}>
        <Link to="#">
          <span>
            <img src={imageUrl} alt="" />
          </span>
          <strong>
            <br /> Date: {date}
            <br />
            Click to see details
          </strong>
        </Link>

        <TattooDetailsModal show={this.state.showModal} url={imageUrl}>
          <div className="modal-description">
            <h3>{style}</h3>
            <h4>{date}</h4>
            <small>Just click on the window to close it.</small>
          </div>
        </TattooDetailsModal>
      </div>
    );
  }
}

export default Tattoo;
