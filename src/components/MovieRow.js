import React, { useState } from "react";
import "./MovieRow.css";

export default ({ title, items }) => {
  return (
    <div>
      
        <h1>{title}</h1>
      
      <div className="movieRow--listarea">
        <div className="movieRow--list">
          {items.results.length > 0 &&
            items.results.map((item, key) => (
                <div key={key} className="movieRow--item">
                <img
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
