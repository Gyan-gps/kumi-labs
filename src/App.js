import { ShoppingCartOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import './App.css';
import Feed from './components/feed';
import Navbar from './components/navbar';

function App() {
  const cart = useSelector(state=>state);
  return (
    <div className="App">
      <div className='top-nav' >
        <Box className="logo">E-Commerce</Box>
        <Box className="navcart"><ShoppingCartOutlined/> {cart.cart.length}</Box>
      </div>
      <Box
      sx={{display:'flex',flexDirection:{sm:"column",md:"row"}}}
      >
        <Navbar/>
        <Feed/>
      </Box>
    </div>
  );
}

export default App;
