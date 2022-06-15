import './home.css';
import Navbar from '../components/navbar/Navbar';
import Popularheader from '../components/popular-headers/Popularheader';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Popularheader />
      <Header />
    </div>
  );
};

export default Home;
