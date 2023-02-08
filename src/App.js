import { ShoppingCartOutlined } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import './App.css';
import Feed from './components/feed';
import Navbar from './components/navbar';

function App() {
  
  const cart = useSelector(state=>state);

  
  return (
    <div className="App">

      <div className='topnav'>
        <div className="logo">E-Commerce</div>
        <div className="navcart"><ShoppingCartOutlined/> {cart.cart.length}</div>
      </div>
      <div className='flex'>
        <div className='nav'><Navbar/></div>
        <div className='feed'><Feed/></div>
      </div>

    </div>
  );
}

export default App;
