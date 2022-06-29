import facebookLogo from '../../assets/icon-facebook.svg';
import twitterLogo from '../../assets/icon-twitter.svg';
import instagramLogo from '../../assets/icon-instagram.svg';
import siteLogo from '../../assets/logo.svg';

import '../../css/footer.css'

function Footer() {
    return ( 
    <footer className="footer">
        <div className="footer__logo-container">
            <img src={siteLogo} alt="Suite"/>
        </div>
        <div className="footer__copyright">
            <p>Copyright - Suite</p>
        </div>
        <div className="footer__social-block">
            <img src={facebookLogo} alt="facebook"/>
            <img src={twitterLogo} alt="twitter"/>
            <img src={instagramLogo} alt="instagram"/>
        </div>
    </footer> 
    );
}

export default Footer;