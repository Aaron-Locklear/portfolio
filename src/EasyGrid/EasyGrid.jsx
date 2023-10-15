export default function EasyGrid({ spacing, minWidth, maxWidth, children }){
  const gridStyle = {
    gridTemplateColumns: repeat(auto-fill, minmax(`${minWidth}px`,`${maxWidth}px`)),
    padding:`${spacing}px`,
    gap:`${spacing}px`
  }

  return (
    <div className="grid-container" style={gridStyle}>
      {children}
    </div>
  );
}