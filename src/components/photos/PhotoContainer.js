import React from 'react';

import Photo from './Photo';
import NoPhotos from './NoPhotos';

const PhotoContainer = props => {

  const results = props.photos;
  let photos;
  let title = <h2>{props.title}</h2>;

  // if there are photo/s to display
  if (results.length > 0) {
    photos = results.map(photo => 
      <Photo 
        key={photo.id}
        id={photo.id}
        farm={photo.farm}
        server={photo.server}
        secret={photo.secret}
      />
    );

  // if there are no photos to display
  } else {
    photos = <NoPhotos />;
    title = null;
  }

  return (
    <div className="photo-container">
      {title}
      <ul>
        {photos}
      </ul>
    </div>
  );
}

export default PhotoContainer;