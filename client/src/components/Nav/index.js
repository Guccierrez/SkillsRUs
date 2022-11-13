import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import {
  Button,
  Icon,
  Message,
  Label,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from "semantic-ui-react";


function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (

  

        
        <ul className="flex-row">
          <li className="mx-1">
            <a href="/me">
              <Button inverted color="blue">
                Profile
                </Button>
            </a>
          </li>

          
          <li className="mx-1">
            <a href="/orderHistory">
              <Button inverted color="red" >
                view cart
                </Button>
            </a>
          </li>

          <li className="mx-1">
            <Link to="/orderHistory">
              <Button inverted color="yellow">
                Order History
                </Button>
           </Link>
          </li>
          <li className="mx-1" position="right">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              <Button  inverted color="red">
              Logout
              </Button>
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag">
            💰
          </span>
          SkillsRUs
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
