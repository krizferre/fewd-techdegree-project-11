import React from 'react';

const Photo = props => {
  // the src for img using Flickr's farm, server, id and secret info
  const src = `https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`;
  return (
    <li>
      <img src={src} alt="" />
    </li>
  );
}

export default Photo;