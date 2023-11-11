import { Link } from 'react-router-dom';
import './LinkButton.css';

export default function LinkButton({ linkText, linkPath, href}) {
  return !href ? (
    <Link to={linkPath} className="link-button-link">
      {linkText}
    </Link>
  ) : (
    <a href={href} target="_blank" className="link-button-link">{linkText} </a>
  );
}
