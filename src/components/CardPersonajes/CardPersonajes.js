import React from "react";

export default function CardPersonajes(props) {
  return (
    <div>
      <div className="card">
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.species}</p>
          <a href={props.url} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
