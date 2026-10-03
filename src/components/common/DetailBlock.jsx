import React from "react";

export function DetailBlock({ title, children }) {
  return (
    <div className="detail-block">
      <h4>{title}</h4>
      {children}
    </div>
  );
}
