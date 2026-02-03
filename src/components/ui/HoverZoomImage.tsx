import React, { useState } from "react";

interface HoverZoomImageProps {
  src: string;
  alt?: string;
}

const HoverZoomImage: React.FC<HoverZoomImageProps> = ({ src, alt }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className={`relative overflow-hidden rounded-xl transition-all duration-500 ${
        isHovered ? "w-full md:w-1/2" : "w-full"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-auto object-cover transition-transform duration-500 ${
          isHovered ? "scale-125" : "scale-100"
        }`}
      />
    </div>
  );
};

export default HoverZoomImage;
