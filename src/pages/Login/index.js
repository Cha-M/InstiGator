// import { Link } from "react-router-dom"
import './index.css';
import logo from "../../Alligator.svg";
import { useState } from "react";
import { Navigate } from 'react-router-dom';
import { createUser, login } from "../../utils";

export const Login = ({user, setUser}) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [bool, setBool] = useState(false);

    //a state and a setter
    //usestate accepts an initial value
  
    const submitHandler = (e) => {
      e.preventDefault();
      // setUser({ username });
      // if (email && email.includes("@")) {
      //   // setUser({username: username, email: email, pass: pass});
      //   createUser(username, email, pass, setUser);
      // }
      // else {}
      if (bool) {
        login(username, pass, setUser);
      }
      else if (email && email.includes("@")) {
        createUser(username, email, pass, setUser)
      }
    };


    return (
        <div className="Login">
            {user && <Navigate to="/Home" />}
                <div className="loginFormContainer">
                    <div className="title">
                        <img src={logo} alt="An alligator" className="logo"/>
                        <h2>InstiGator</h2>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div>
                            <input
                            onChange = {(event) => setUsername(event.target.value)}
                            placeholder="Username">

                            </input>
                        </div>

                        <div>
                            {!bool && (
                                <input onChange = {(event) => setEmail(event.target.value)}
                                placeholder="Email">
                            </input>)}
                        </div>
                        
                        <div>
                            <input
                            onChange = {(event) => setPass(event.target.value)}
                            placeholder="Password">

                            </input>
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                    <button onClick={() => setBool(!bool)}>Login/Signup</button>
                    {/* <h1>Placeholder for the login page.</h1>
                    <Link to="/Home">Homepage</Link> */}
                </div>
            
        </div>
    )
}
