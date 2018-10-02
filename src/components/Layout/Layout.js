import React from 'react';
import './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

export default (props)=>{
    return (
      <Toolbar/>
      {props.children}
    )
}
