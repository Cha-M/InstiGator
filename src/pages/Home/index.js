import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Photos } from "../../fetchAPI";
import './index.css';
import logo from "../../Alligator.svg";

export const Home = ({user}) => {

    if (!user) {
    // if (false) {
        console.log("hello2");
        return (
            <Navigate to="/"/>
        )
    }

    else {
        return (
          <div className="Home">
            <header>
              {/* <img src={logo} className="Home-logo" alt="logo" />
              <p>
                Edit <code>src/Home.js</code> and save to reload.
              </p>
              <a
                className="Home-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a> */}
              <img src={logo} alt="An alligator" className="logo"/>
              <p>InstiGator</p>
            </header>
            <div className="mainContainer">
              <div className="leftColumn">
                <div className="friendsBox">
      
                  <div className="friendsEmptySpace"></div>
                  <div className="friendsHeadlineContainer">
                    {/* <div className="friendsElementBox"></div> */}
                    <Photos />
                  </div>
                </div>
      
                <div className="feedBox">
                  {/* <p>feedBox</p> */}
                  
                  <div className="feedEmptySpace">
                  </div>
      
                  <div>
                    {/* only meant to be for one element but testing out */}
                    <Photos size={"large"}/>
                  </div>
                </div>
              </div>
              
              <div className="rightColumn">
                <div className="selfBox">
                  <p>User is {user}</p>
                </div>
                <div className="suggestionsBox">
                  <p>suggestionsBox</p>
                </div>
              </div>
      
            </div>
          </div>
        );

    }
}

