import './Footer.css';
import githubLogo from "src/assets/github.svg";
import "src/assets/instagram.svg";

export default function Footer() {
  return (
    <footer>
      <img src={githubLogo} alt="Github Logo" />
      <img src="../assets/instagram.svg" alt="Instagram Logo" />
      <img src="../assets/linkedin.svg" alt="LinkedIn Logo" />
      <img src="../assets/mail.svg" alt="Email Logo" />
    </footer>
  );
}
