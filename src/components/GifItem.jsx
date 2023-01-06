import React from 'react';

export const GifItem = ({ title, url, id }) => {
  return (
    <div className="card">
        <figure>
            <img src={url} alt={title} />
            <figcaption>{title}</figcaption>
        </figure>
    </div>
  )
}
