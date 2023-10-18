import './Header.css';
import { NavLink } from 'react-router-dom';
import NameLogo from '../NameLogo/NameLogo';

export default function Header() {
  const PAGE_NAMES = ['Home', 'About', 'Projects'];

  return (
    <nav>
      <NameLogo
        firstInitial="A"
        firstName="Aaron"
        lastInitial="L"
        lastName="Locklear"
      />
      <ul className="header-list">
        {PAGE_NAMES.map((pageName) => (
          <li key={pageName} className="header-link">
            <NavLink to={`/${pageName}`} activeclassname="active">
              {pageName}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
