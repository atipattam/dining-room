import React from 'react'
import './Nav.css';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
import { auth} from './firebase';
function Nav ({username}) {
  
    return (
        <div>
            <nav className="nav">
        <ul className="menu">

            <li className="logo">
                {/* <img className = "logo1" src="https://i.postimg.cc/nrTyvXVM/logo-DR.png"  /> */}
                <img className = "logo1" src="https://i.postimg.cc/h45grJQQ/logo-text.png" /> 

            </li>
            
    <h1>{username}</h1> 
           
            <li className="item button secondary"><Link to ="/signin">
          <Button onClick={() => auth.signOut()}>Logout</Button>
      </Link>     </li>
      
      <li className="item button secondary"><Link to ="/chat">
          <Button> go tochat</Button>
      </Link>     </li>
        </ul>
    </nav>


        </div>
    )
}

export default Nav
