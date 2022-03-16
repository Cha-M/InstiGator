import { ReactDOM, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Photos } from "./fetchAPI";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { tokenLogin } from "./utils";
import './App.css';
import logo from "./Alligator.svg";

const App = () => {
  const [user, setUser] = useState();
  
  useEffect(() => {
    tokenLogin(setUser);
  },[]);

  return (
    <BrowserRouter>
      {/* {!userIn ? <Navigate to ="/Home" /> : <Navigate to = "/" />} */}
      {!user ? <Navigate to ="/" /> : <Navigate to = "/Home" />}
    
      <Routes>
        <Route path = "/" element = {<Login setUser={setUser}/>}/>
        <Route path = "/Home" element = {<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}




export default App;
// function App() {
//   return (
//     <div className="App">
//       <header>
//         {/* <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//         <img src={logo} alt="An alligator" className="logo"/>
//         <p>InstiGator</p>
//       </header>
//       <div className="mainContainer">
//         <div className="leftColumn">
//           <div className="friendsBox">

//             <div className="friendsEmptySpace"></div>
//             <div className="friendsHeadlineContainer">
//               {/* <div className="friendsElementBox"></div> */}
//               <Photos />
//             </div>
//           </div>

//           <div className="feedBox">
//             {/* <p>feedBox</p> */}
            
//             <div className="feedEmptySpace">
//             </div>

//             <div>
//               {/* only meant to be for one element but testing out */}
//               <Photos size={"large"}/>
//             </div>
//           </div>
//         </div>
        
//         <div className="rightColumn">
//           <div className="selfBox">
//             <p>selfBox</p>
//           </div>
//           <div className="suggestionsBox">
//             <p>suggestionsBox</p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

