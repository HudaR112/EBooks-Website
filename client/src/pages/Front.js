import React from "react";
import {Link} from "react-router-dom";
import Logo from '../Photos/liblogo.png';
import bg from "../Photos/libbg.jpeg";
import "../Styles/Front.css";

const Front=() =>{

    return(
        <div className="container" style={{ backgroundImage: `url(${bg})` }}>
        <div className="login-content">
          <h2 className="title"> Welcome to E-Books</h2>
          <img src={Logo} />
          <h3 className="subtitle"><b>Continue As:</b></h3>
          <Link to="/ViewerMenu"><button className="Viewerbtn">Viewer</button></Link>
          <b>-OR-</b>
          <Link to="/login">
          <button className="Adminbtn">Admin</button>
          </Link>
        </div>
      </div>
    );

};

export default Front;