import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom';
import TalentList from './Talent/TalentList';
import LoginPage from './LoginPage';
import PrisonList from './Prison/PrisonList';
import Dashboard from './Users/Dashboard';
import PrisonById from './Prison/PrisonById.js';
import RegisterationPage from './RegisterationPage';
export default function AppRouter() {
  return <div className="page-view ui bottom attached segment active tab">
    <Switch>

    {/* <Route exact path='/' component={TalentList} /> */}
    <Route path='/loginpage' render={props=><LoginPage {...props}/>} /> 
    <Route exact path='/' component={PrisonList} />
    <Route path='/talentlist' component={TalentList}/> 
    <Route path='/registerationpage' component={RegisterationPage}/>
    <Route path='/dashboard' component={Dashboard}/>
    <Route path="/talent/:id" component={PrisonById} />
    </Switch>
  </div>
}
