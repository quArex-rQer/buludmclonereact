import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
