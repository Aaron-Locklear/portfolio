import "./LinkButton.css"

export default function LinkButton({linkText, linkPath}){
  return (<a href={linkPath} className="link-button-link">{linkText}</a>);
}