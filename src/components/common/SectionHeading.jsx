import React from "react";

export function SectionHeading({ kicker, title, copy }) {
  return (
    <div className="section-heading">
      <div>
        <div className="kicker">{kicker}</div>
        <h2>{title}</h2>
      </div>
      <p>{copy}</p>
    </div>
  );
}
