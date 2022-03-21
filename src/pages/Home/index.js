import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Photos } from "../../fetchAPI";
import './index.css';
import logo from "../../Alligator.svg";
import cog from "../../Cog.svg";
import head from "../../Head.svg";
import { deleteUser } from '../../utils';

export const Home = ({user, setUser}) => {

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
              <div className="leftHeaderBar">

              </div>
              <div className="centerHeaderBar">
              <img src={logo} alt="An alligator" className="logo"/>
              <h2>InstiGator</h2>

              </div>

              <div className="rightHeaderBar">
                <img src={cog} alt="A cog" className="cog" onClick = {(event) => deleteUser(user, setUser)}/>

              </div>
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
                <div className="friendsBox">
                    <div className="selfBox">
                      <img src={head} alt="A human face logo" className="head"/><h2>{user}</h2>
                    </div>
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

