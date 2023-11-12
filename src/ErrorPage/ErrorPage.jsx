import LinkButton from "../LinkButton/LinkButton";
import "./ErrorPage.css"

export default function ErrorPage(){
  return (
    <section className="error-section">
      <div className="text-container">
        <h1>The Page You Were Looking For Doesn't Exist</h1>
        <p>You may have mistyped the address or the page may have moved.</p>
      </div>
      <LinkButton linkPath={"/Home"} linkText={"Go Back To Homepage"} />
    </section>
  );
}