import "./FadeImage.css"

export default function FadeImage({title, description, backgroundImgURL}) {
  return (
    <div className="hover-container" style={{ backgroundImage: `url(${backgroundImgURL})` }}>
      <div className="blur-layer"></div>
      <div className="overlay"></div>
      <h1>{title}</h1>
      <div className="hover-text">
        <p>{description}</p>
        <p>(click for more)</p>
      </div>
    </div>
  );
}
