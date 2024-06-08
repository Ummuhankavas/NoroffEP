import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';

function Sidebar() {
  return (
    <List component="nav" style={{ width: '250px' }}>
      <ListItem component={Link} to="/">
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem component={Link} to="/products">
        <ListItemText primary="Products" />
      </ListItem>
      <ListItem component={Link} to="/brands">
        <ListItemText primary="Brands" />
      </ListItem>
      <ListItem component={Link} to="/orders">
        <ListItemText primary="Orders" />
      </ListItem>
      <ListItem component={Link} to="/users">
        <ListItemText primary="Users" />
      </ListItem>
    </List>
  );
}

export default Sidebar;
