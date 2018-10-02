import React, { Fragment } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';


import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {NavigationItems} from '../navigationItems'
import _ from 'lodash'

export default (props)=>{

  const NavigationItemList =[]
   _.each( NavigationItems , (valueObj , itemName)=>{
     if (valueObj.display){
       NavigationItemList.push(
         <ListItem button className="text-right" key={itemName}>
           <ListItemText primary={itemName} />
         </ListItem>
       )
     }
   })

const sideList = (
    <Fragment>
      <List component="nav">
        {
          NavigationItemList
          /*
          listItem with Icon :
           <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          </ListItem>
          <Divider />
        */}


      </List>


    </Fragment>
)


    return (
      <div>
        <Drawer anchor="right" open={props.open} onClose={()=>props.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={()=>props.toggleDrawer( false)}
            onKeyDown={()=>props.toggleDrawer( false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>

    );

}
