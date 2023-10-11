import Header from "../Header/Header";
import TransformLink from "../TransformLink/TransformLink";
import useTypingEffect from "../typing-effect";
import "./Home.css"

export default function Home(){
  const typedName = useTypingEffect("Aaron", 500);

  return <section>
    <div className="container">
      <p>Hello, I'm <span className="name">{typedName}</span></p>
      <p>I'm a front-end developer</p>
      <TransformLink>Find out more about me</TransformLink>
    </div>
  </section>
}