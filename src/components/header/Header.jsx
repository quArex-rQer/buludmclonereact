import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='headerContainer'>
        <div className='headerItem'>
          <div className='imgBox'>
            <img
              src='https://upload.wikimedia.org/wikipedia/tr/0/02/Jumanji_Yeni_Seviye.jpg'
              alt=''
            />
          </div>
          <span>Film</span>
        </div>
        <div className='headerItem'>
          <div className='imgBox'>
            <img
              src='https://upload.wikimedia.org/wikipedia/tr/0/02/The_Witcher_afi%C5%9F.jpg'
              alt=''
            />
          </div>
          <span>Dizi</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
