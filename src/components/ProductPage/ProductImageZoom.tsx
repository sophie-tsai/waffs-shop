import React, { useState, MouseEvent } from "react";

type ProductImageProps = {
  imgSrc: string;
  altText: string | undefined;
  id: string;
};

function ProductImageZoom(props: ProductImageProps) {
  const { imgSrc, altText } = props;
  const [backgroundPosition, setBackgroundPosition] = useState("0% 0%");

  const style = {
    backgroundImage: `url(${imgSrc})`,
    backgroundPosition: `${backgroundPosition}`,
    backgroundSize: "150%",
    cursor: `zoom-in`,
  };

  const handleMouseMove = (e: MouseEvent) => {
    const {
      left,
      top,
      width,
      height,
    } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;

    setBackgroundPosition(`${x}% ${y}%`);
  };

  return (
    <figure
      onMouseMove={handleMouseMove}
      style={style}
      className="product-page-figure"
    >
      <img className="product-page-img" src={imgSrc} alt={altText} />
    </figure>
  );
}

export default ProductImageZoom;
