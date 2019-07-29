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
const prisonLabel = createLabel("users", "Prison 2")
const locationLabel = createLabel("users", "Prison 3")
const episodeLabel = createLabel("users", "Prison 4")

const panes = [
  { menuItem: <Menu.Item key='home' as={Nav} to={`/`} content={welcomeLabel} /> },
  { menuItem: <Menu.Item key='talent' as={Nav} to={`/talent`} content={prisonLabel} /> },
  { menuItem: <Menu.Item key='locations' as={Nav} to={`/locations`} content={locationLabel} /> },
  { menuItem: <Menu.Item key='episodes' as={Nav} to={`/episodes`} content={episodeLabel} /> }

]

const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />

export default TabNav
