import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import CodeIcon from "@mui/icons-material/Code";
import "./Icons.css";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/im-tarek",
    className: "social-icon linkedin",
    icon: <LinkedInIcon />,
  },
  {
    href: "https://github.com/machine-moon/",
    className: "social-icon github",
    icon: <GitHubIcon />,
  },
  {
    href: "mailto:tarekibrahim3@cmail.carleton.ca",
    className: "social-icon email",
    icon: <EmailIcon />,
  },
  {
    href: "https://leetcode.com/u/t-ibra/",
    className: "social-icon leetcode",
    icon: <CodeIcon />,
  },
];

const Icons = () => {
  return (
    <div className="social-icons">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className={link.className}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon}
        </a>
      ))}
    </div>
    
  );
};

export default Icons;
