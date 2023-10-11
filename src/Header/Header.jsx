import "./Header.css"
import { NavLink } from 'react-router-dom';
import Logo from "./Logo";


export default function Header(){
  const PAGE_NAMES = ["Home","About","Projects"];

  return(<nav>
    <Logo/>
    <ul>
      {PAGE_NAMES.map((pageName) => {
        return( <li key={pageName}><NavLink  to={"/" + pageName} activeclassname="active">{pageName}</NavLink></li> )
      })}
    </ul>
  </nav>)
}