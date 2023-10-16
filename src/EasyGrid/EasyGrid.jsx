import React from "react";

export default function EasyGrid({ spacing, minWidth, children }) {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}px, 1fr))`,
    padding: `${spacing}px`,
    gap: `${spacing}px`,
  };

  return (
    <div className="grid-container" style={gridStyle}>
      {children}
    </div>
  );
}
