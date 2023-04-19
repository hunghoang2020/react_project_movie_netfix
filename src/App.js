
import './App.scss';

import { BrowserRouter } from 'react-router-dom';
import Header from './component/header/Header'
import Footer from './component/footer/Footer'
import Router from './config/Router';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Router/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
