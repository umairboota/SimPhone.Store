import React from "react";

export default function Cards({ title, image }) {
  //  //https://i.redd.it/b3esnz5ra34y.jpg link
  return (
    <div className="cards-list  mt-10 mb-10">
      <div className="card bg-gray-100">
        <div className="card_image">
          <img src= {image} alt="Loading.."/> 
        </div>
        <div className="card_title title-white">
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}
