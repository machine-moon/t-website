import "./Footer.css";
import Icons from "../Icons/Icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© {currentYear} Tarek Ibrahim</p>
        <Icons />
      </div>
    </div>
  );
};

export default Footer;
