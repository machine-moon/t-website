import "./Footer.css";
import Icons from "../Icons/Icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© {currentYear} Tarek Ibrahim</p>
        <p className="footer-bottom-right">
          <a
            href="https://github.com/machine-moon/t-website"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-on-hover"
          >
            Check out the website source code on GitHub
          </a>
        </p>
        <Icons />
      </div>
    </div>
  );
};

export default Footer;
