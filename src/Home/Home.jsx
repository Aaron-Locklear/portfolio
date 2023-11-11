import Header from '../Header/Header';
import useTypingEffect from '../typing-effect';
import LinkButton from '../LinkButton/LinkButton';
import './Home.css';

export default function Home() {
  const typedName = useTypingEffect('Aaron', 500);

  return (
    <section>
      <div className="container">
        <p>
          Hello, I'm
          <span className="name">{` ${typedName}`}</span>
        </p>
        <p>I'm a full-stack developer</p>
        <LinkButton linkText="Find out more about me!" linkPath="/About" />
      </div>
    </section>
  );
}
