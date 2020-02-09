import React from 'react';
import './tattoo-details-modal.css';

const TattooDetailsModal = ({show, children, url}) => (
    show ? <div className="tattoo-details-modal-wrapper" style={{ backgroundImage: `url(${url})` }} id="tattoo-modal">{children}</div> : ""
);

export default TattooDetailsModal;