import {Outlet, Link } from "react-router-dom"
import { Fragment } from "react";

import {ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import './navigation.styles.scss'


const Navigation =()=>{
    return(
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to="/">
                <CrwnLogo className="logo"/>
            </Link>
            
            <div className="nav-Links-container">
                <Link className="nav-Link" to="/shop">
                    Shop
                </Link>
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;