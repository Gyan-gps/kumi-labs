import { ShoppingCartOutlined } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Feed from './components/feed';
import Navbar from './components/navbar';

function App() {
  
  const cart = useSelector(state=>state);

  
  return (
    <div className="App">
      <div className='top-nav'  >
        <Box className="logo">E-Commerce</Box>
        <Box className="navcart"><ShoppingCartOutlined/> {cart.cart.length}</Box>
      </div>
      <Grid
      container spacing={2}
      >
        <Grid item xs={12} md={2}><Navbar/></Grid>
        <Grid item xs={12} md={10}><Feed/></Grid>
        
      </Grid>
    </div>
  );
}

export default App;
