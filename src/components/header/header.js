import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import flag from "../../assets/Drapeau-Tunis.jpg";
import minlogo from "../../assets/minlogo.jpg"
import ooesco from "../../assets/ooesco.jpg"
import "./header.css"
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color='' >
      <Container maxWidth="xl" >
        <Toolbar style={{height:"15vh"}}>
          <Typography

            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
                        

          </Typography>
          <div className='divlogo' ><img  style={{height:"15vh"}} src={ooesco}/></div>


          
          <Box className='title'  sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
              <h1>بوابة الحدائق البيداغوجية في تونس</h1>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <ul>
              <li>
          <p className='text-header'>
          الجمهورية التونسية 
          </p> 
          <div >          <img  style={{height:"20px",width:"33px",marginRight:"1vh"}} src={flag}/></div>
          </li>
          <li>
          <p className='text-header'>
          وزارة التربية          </p> 
          <div >          <img  style={{height:"60px",width:"50px"}} src={minlogo}/></div>
          </li>
          </ul>
          </Box>
          

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
