import React from "react";

export default function EasyGrid({ spacing, minWidth, maxWidth, children }) {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}, ${maxWidth}))`,
    padding: `${spacing}px`,
    gap: `${spacing}px`,
  };

  return (
    <div className="grid-container" style={gridStyle}>
      {children}
    </div>
  );
}
