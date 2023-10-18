import './TechIcon.css';

export default function TechIcon({ label, altText, imgSource }) {
  return (
    <div className="grid-item">
      <img src={imgSource} alt={altText} />
      <span>{label}</span>
    </div>
  );
}
