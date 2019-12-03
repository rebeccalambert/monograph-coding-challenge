import React from 'react';
import './Preview.css';

function Preview({guests, review}) {

  return (
    <section className="preview">
      <div className="preview-label">Preview of your review</div>
      <div className="preview-content">

        <div className="preview-emoji">
          😍
          {/* Your emoji code goes here */}
        </div>

        <div className="preview-feedback">
          {review}
        </div>

        <div className="preview-party">
          {guests} people dined here.
        </div>

      </div>
    </section>
  );
}

export default Preview;
