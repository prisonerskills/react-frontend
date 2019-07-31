import { Dropdown, Menu, Icon, Segment } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";
import TalentList from "./Talent/TalentList";
import PrisonList from "./Prison/PrisonList";

import React from "react";

// TODO: Update <Search> usage after its will be implemented

const MenuExampleAttached = props => {
  console.log("!!!!", props);
  return (
    <div>
      <Menu attached="top">
        <Dropdown item icon="bars" simple>
          <Dropdown.Menu>
            <Dropdown.Item />
            <Dropdown.Item href="/">Home</Dropdown.Item>
            <Dropdown.Item href="/loginpage">Login/Register</Dropdown.Item>
            <Dropdown.Item href="https://mystifying-goldstine-47782b.netlify.com/about.html">
              About Us
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Menu position="right">
          <div className="ui right aligned category search item">
            <div className="ui transparent icon input">
              <input
                className="prompt"
                type="text"
                placeholder="Search site..."
              />
              <i className="search link icon" />
            </div>
            <div className="results" />
          </div>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default MenuExampleAttached;
