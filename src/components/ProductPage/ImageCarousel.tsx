import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ImageCarousel.scss";

type ImageCarouselProps = {
  images: { node: { altText: string; originalSrc: string } }[];
};

function ImageCarousel(props: ImageCarouselProps) {
  const [displayImages, setDisplayImages] = useState<any>([]);

  useEffect(() => {
    if (props.images) {
      const imageDivs = props.images.map(
        (image: { node: { altText: string; originalSrc: string } }) => (
          <div key={image.node.originalSrc}>
            <img alt={image.node.altText} src={image.node.originalSrc} />
          </div>
        )
      );
      setDisplayImages(imageDivs);
    }
  }, [props.images]);

  return (
    <Carousel
      showArrows={false}
      showThumbs={true}
      showStatus={false}
      dynamicHeight={true}
      useKeyboardArrows={true}
      swipeable={true}
    >
      {displayImages}
    </Carousel>
  );
}

export default ImageCarousel;
