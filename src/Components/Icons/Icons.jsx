import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import './Icons.css';

const Icons = () => {
    return (
        <div className="social-icons">
            <a href="https://www.linkedin.com/in/im-tarek" className="social-icon linkedin" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
            </a>
            <a href="https://github.com/machine-moon/" className="social-icon github" target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
            </a>
            <a href="mailto:tarekibrahim3@cmail.carleton.ca" className="social-icon email" target="_blank" rel="noopener noreferrer">
                <EmailIcon />
            </a>
            <a href="https://leetcode.com/u/machine-moon/" className="social-icon leetcode" target="_blank" rel="noopener noreferrer">
                <CodeIcon />
            </a>
        </div>
    );
}

export default Icons;