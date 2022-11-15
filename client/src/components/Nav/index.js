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
const styles = {
  logout: {
    display: "flex",
    justifyContent: "flex-end",
  },
};

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <a href="/me">
              <Button inverted color="blue">
                <Icon name="user"/>
                Profile
                <Icon/>
              </Button>
            </a>
          </li>

          <li className="mx-1">
            <a href="/orderHistory">
              <Button inverted color="olive">
                {/* <Icon name="shopping cart"/> */}
                view cart
                {/* <Icon/> */}
              </Button>
            </a>
          </li>

          <li className="mx-1">
            <Link to="/orderHistory">
              <Button inverted color="yellow" position="right">
                <Icon name="ordered list"/>
                Order History
                <Icon/>
              </Button>
            </Link>
          </li>
          <li style={styles.logout}>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              <Button inverted color="red" >
                <Icon name="log out"/>
                Logout
                <Icon />
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
          <Button inverted color="teal" size="large">
            <Icon name="home" size="large" />
            SkillsRUs
            <Icon />
          </Button>
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
