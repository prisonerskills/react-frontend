import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom';
import TalentList from './Talent/TalentList';
import LoginPage from './LoginPage';


export default function AppRouter() {
  return <div className="page-view ui bottom attached segment active tab">
    <Switch>
    <Route exact path='/' component={TalentList} />
    <Route path='/loginpage' component={LoginPage}/> 
    </Switch>
  </div>
}
