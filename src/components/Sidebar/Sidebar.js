import React, { useEffect } from 'react';
import cn from 'classnames';
import {Link} from "react-router-dom"
import {Menu, Message} from 'semantic-ui-react'

function Sidebar(props) {

  const classes = cn(
    'ui', 'sidebar', 'overlay', 'left', 'inverted', 'menu', 'animating',
    {'visible' : props.toggleMenu}
  );


  return(
    <div>
        <Menu vertical className={classes}>
          
          <Menu.Item as={Link} name="home" to="/">
            Home
          </Menu.Item>
          <Menu.Item as={Link} name="home" to="/signup">
            Home
          </Menu.Item>
          <Menu.Item link></Menu.Item>
          <Menu.Item >Javascript Link</Menu.Item>
        </Menu>
      </div>
  );
}

export default Sidebar;