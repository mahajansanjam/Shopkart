import { useState } from 'react';
import{AppBar,Toolbar,Box,Typography,styled, IconButton, Drawer,List,ListItem} from '@mui/material';
import {Menu} from '@mui/icons-material';

// components
import Search from './Search';
import CustomerButtons from './CustomerButtons';

import {Link} from'react-router-dom';

const StyledHeader=styled(AppBar)`
background:#9c27b0;
heigh:500px;
`;
const Component=styled(Link)`
margin-left:100px;
line-height:0;
text-decoration:none;
color:inherit;
`;

const SubHeading=styled(Typography)`
font-size:10px;
font-style:italic;
margin-left:5px;
`;

 const CustomerButtonsWrapper= styled(Box)(({theme})=>({
  margin:'0 5% 0 auto ',
  [theme.breakpoints.down('md')]: {
      display:'none'
  }
 }));

 const MenuButton = styled(IconButton)(({theme}) => ({
  display:'none',
  [theme.breakpoints.down('md')]:{
    display:'block'
  }

 }));

const Header = () => {

  const [open,setOpen] = useState(false);

  const handleOpen =()=> {
   setOpen(true);
  }
  const handleClose =()=>{
  setOpen(false);
  }

  const list =() =>(
    <Box style={{width:200}} onClick={handleClose}>
      <List>
        <ListItem Button>
            <customButtons/>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <div>
<StyledHeader>
    <Toolbar style={{minHeight:55}}>
      <MenuButton color ="inherit" onClick={handleOpen}>
        <Menu/>

      </MenuButton>
      <Drawer open={open} onClose={handleClose}>
      {list()}
      </Drawer>
         
      
             
      <Component to='/'/>
            
            <Component>
            <img src="https://www.bing.com/th?id=OIP.cgE7O2g7-DrIiVQ2DWBisQHaF0&w=281&h=221&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"height="20px"/>
        
        
          <Box>
            <SubHeading>Shop&nbsp;
              <Box component="span" style={{color:"#9c27b0"}}>kart</Box>

            </SubHeading>
           
            </Box>
           
            </Component>
            <Search/>
             <CustomerButtonsWrapper>
              <CustomerButtons/>
             </CustomerButtonsWrapper>
           </Toolbar>
</StyledHeader>
    </div>
  )
}

export default Header;
