import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='logo'>
          <span>BulutMD</span>
        </div>
        <div className='nav-buttons'>
          <span>Giriş</span>
          <button>Deneme Başlat</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
