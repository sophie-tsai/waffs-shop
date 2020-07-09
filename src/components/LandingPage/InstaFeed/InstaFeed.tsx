import React, { useState } from "react";

function InstaFeed() {
  const [image, setImage] = useState("");

  const fetchImage = fetch(
    "https://api.instagram.com/oembed?url=instagram.com/p/CCYxNrWpgGu/"
  );
  fetchImage
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setImage(data.thumbnail_url);
    });

  return (
    <div className="feed-container">
      <img src={image} />
    </div>
  );
}

export default InstaFeed;
