import React from 'react';
import ReactDOM from 'react-dom';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
// import Drawer from 'material-ui/Drawer';
import MenuItem from '@mui/material/MenuItem';
// import RaisedButton from 'material-ui/RaisedButton';

export default function MagicDrawer(props) {

      return (
        <div>
          <Drawer width={200} openSecondary={true} open={this.props.open} >
            <AppBar title="Tasks" />
            <MenuItem onClick={() => this.props.setDrawerOpen(false)}>Menu Item</MenuItem>
            <MenuItem onClick={() => this.props.setDrawerOpen(false)}>Menu Item 2</MenuItem>
          </Drawer>
        </div>
      )
    }