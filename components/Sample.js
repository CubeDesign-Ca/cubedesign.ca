import React, { useState } from 'react';

const EnlargingImage = () => {
  const [enlarged, setEnlarged] = useState(false);

  const toggleEnlarged = () => {
    setEnlarged(!enlarged);
  };

  return (
    <div className="image-container">
      <img
        className={`enlargable-image ${enlarged ? 'enlarged' : ''}`}
        src="/images/offline-service-installation-click.jpg"
        alt="Enlarging Image"
        onClick={toggleEnlarged}
      />
    </div>
  );
};

export default EnlargingImage;