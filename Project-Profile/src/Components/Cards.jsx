import React from "react";

export function Cards(props) {
  return (
    <div className="card">
      <img className="img-profile" src={props.img} alt={props.img} srcset="" />
      <h3>{props.fullname}</h3>
      <p>{props.email}</p>
      <p>{props.address}</p>
      <p>{props.phone}</p>
    </div>
  );
}
