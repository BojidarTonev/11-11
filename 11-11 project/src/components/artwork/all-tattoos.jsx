import React from 'react';
import Tattoo from './tattoo/tattoo'

function AllTattoos(props) {
  let tattoos = props.tattoos.map(tattoo => (
    <Tattoo
      key={tattoo._id}
      date={tattoo.date}
      description={tattoo.description}
      style={tattoo.style}
      imageUrl={tattoo.imageUrl}
    ></Tattoo>
))

return tattoos
}

export default AllTattoos;