import React from 'react';

const ResponsiveImages = ({ images }) => {
  return (
    <div className="flex justify-center items-center overflow-hidden h-[292px] mt-10">
      <div className="flex flex-nowrap">
        {images.slice(0, 5).map((image, index) => (
          <img
            className="flex-shrink-0 w-1/5 min-h-full bg-cover"
            src={image}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveImages;
