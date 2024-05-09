import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import '../styles/Footer.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="socialMedia">
        <InstagramIcon />  <LinkedInIcon />  <GitHubIcon />
      </div>
      <p>&copy; 2024 Ygor Machado</p>
    </footer>
  );
}

export default Footer;