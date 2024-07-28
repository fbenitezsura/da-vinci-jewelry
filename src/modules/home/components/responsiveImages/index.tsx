import React from 'react';

const ResponsiveImages = ({ images }) => {
  return (
    <div className="flex justify-center items-center overflow-hidden h-[292px]">
      <div className="flex flex-nowrap space-x-2">
        {images.slice(0, 5).map((image, index) => (
          <img
            className="flex-shrink-0 w-1/5 h-full bg-cover bg-center"
            src={image}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveImages;
