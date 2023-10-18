import { Link } from 'react-router-dom';
import './LinkButton.css';

export default function LinkButton({ linkText, linkPath }) {
  return (
    <Link to={linkPath} className="link-button-link">
      {linkText}
    </Link>
  );
}
