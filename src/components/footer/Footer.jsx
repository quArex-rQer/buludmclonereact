import './footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {faFacebookF, faTwitter} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerContainer'>
        <span>Anasayfa | Kullanıcı Sözleşmesi | Gizlilik Sözleşmesi</span>
        <div className='icons'>
          <FontAwesomeIcon icon={faFacebookF} className='icon' />
          <FontAwesomeIcon icon={faTwitter} className='icon' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
