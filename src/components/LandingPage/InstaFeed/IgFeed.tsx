import React from "react";
import Iframe from "react-iframe";

function IgFeed() {
  return (
    <div className="ig-feed-container">
      <div className="ig-cta">
        <h1 className="ig-cta-header">hecc with me on instagram</h1>
        <h3 className="ig-cta-tag" style={{ margin: "0" }}>
          @corgowaffles
        </h3>
      </div>

      <Iframe
        url="https://cdn.lightwidget.com/widgets/503e156f37a05d839dfefa13fc297226.html"
        className="ig-iframe"
      />
    </div>
  );
}

export default IgFeed;

// <!-- LightWidget WIDGET --><script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
// <iframe src="https://cdn.lightwidget.com/widgets/503e156f37a05d839dfefa13fc297226.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe>
