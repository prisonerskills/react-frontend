import React from 'react'
import { Tab, Menu, Icon } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";



const Nav = props => (
	<NavLink
		exact
		{...props}
		activeClassName="active"
	/>
);

const createLabel = (iconName, labelText) => <span><Icon name={iconName} />{labelText}</span>

const welcomeLabel = createLabel("home", "Prison 1")
const prisonLabel = createLabel("users", "Login")
const locationLabel = createLabel("users", "Register")
const episodeLabel = createLabel("users", "Prison 4")

const panes = [
  { menuItem: <Menu.Item key='home' as={Nav} to={`/`} content={welcomeLabel} /> },
  { menuItem: <Menu.Item key='loginpage' as={Nav} to={`/loginpage`} content={prisonLabel} /> },
  { menuItem: <Menu.Item key='locations' as={Nav} to={`/locations`} content={locationLabel} /> },
  { menuItem: <Menu.Item key='talent' as={Nav} to={`/talent`} content={episodeLabel} /> }

]

const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />

export default TabNav
