import "./Hero.scss";
import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {


  function LoginButton(props) {
    return (
      <a href='#' classname="loginbutton" onClick={props.onClick}>
        <p id="lgndash">Login</p>
      </a>
    );
  }
  function Dashboard(){
    return(
      //  <Link to="/dashboard">
       <p id="lgndash">Dashboard</p>
      //  </Link>
    );
  }

  class LogStatus extends React.Component{
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
      console.log("logged in");
    }

    render(){
      const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <Dashboard/>;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
      return(
        <div>
        {button}
      </div>
      )
    }
  } 


  return (
    <>
      <div className="hero">
        <div className="hero__top">
          <div className="hero__top__spacer"></div>
          <div className="hero__top__center">
          </div>
          <div className="hero__top__dashboard">
            
            <div className="hero__top__dashboard__img"><LogStatus/></div>
          </div>
        </div>

        <div className="hero__middle">
          <div className="hero__middle__logo"></div>
          <div className="hero__middle__card"></div>
        </div>
        <div className="hero__bottom">
          <div className="hero__bottom__navbar"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
