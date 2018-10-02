import React ,{Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton';
import {Typography ,Toolbar ,Button} from '@material-ui/core'
import Menu from '@material-ui/icons/Menu';
import classes from './Toolbar.css'
import LogoImage from '../../../assets/images/shinaweb.jpg'
import Hidden from '@material-ui/core/Hidden';
import SideDrawer from '../sideDrawer/sideDrawer'
import {NavigationItems} from '../navigationItems'
import _ from 'lodash'

class  NavBar  extends Component {
  state = {
    displayDrawer: false
  }

  //sideDrawer
  toggleDrawer = (open) => {
     this.setState({
       displayDrawer: open,
     });
   };


  render(){
    const NavigationItemList =[]
     _.each( NavigationItems , (valueObj , itemName)=>{
       if (valueObj.display){
         NavigationItemList.push(
           <Button color="inherit" key={itemName} >
             {itemName}
           </Button>
         )
       }
     })

    return(
        <div>
          <SideDrawer open={this.state.displayDrawer} toggleDrawer={this.toggleDrawer}/>
          <AppBar position="static"  >
            <Toolbar>

              <img src={LogoImage} height="45"/>
              <Hidden smUp>
                <IconButton onClick={()=>this.toggleDrawer(true)} className="pull-right"  color="inherit" aria-label="Menu">
                  <Menu  />
                </IconButton>
              </Hidden>

              <Hidden xsDown>
                {NavigationItemList}
              </Hidden>

              <Button color="inherit" className={classes.Items}>Login</Button>


            </Toolbar>
          </AppBar>
        </div>
    )
}
}

export default NavBar;
