import logo from './logo.svg';
import './style.scss'
import { Outlet } from 'react-router-dom';
import Approutes from './Approutes';
import Footer from './Footer/Footer';


function App() {
  return (
    <>
      <Outlet/>
      <Approutes/>
      <Footer/>
    </>
  );
}

export default App;
