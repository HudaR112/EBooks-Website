 import React from 'react';
 import BannerImg from '../Photos/libbanner.jpg';
 import '../Styles/Home.css';

 function Home(){
    return (
        <div  className="home"  style={{ backgroundImage: `url(${BannerImg})` }}>
        <div className="headerContainer">
        <h1> E-BOOKS </h1>
        <p> INFORMATION AT YOUR FINGERTIPS</p>
      </div>
        </div>
    );
 }
 export default Home;