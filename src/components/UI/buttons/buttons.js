import React from 'react';
import './buttons.css'
 import Button from '@material-ui/core/Button';
// https://material-ui.com/api/button/
// https://material-ui.com/demos/buttons/
export default (props)=>{
  return (
    <Button variant="contained" color="primary"
      onClick={props.onClick}
      {...props}
      className={`btn ${props.btnType}`}>{props.children}</Button>
  )
}
