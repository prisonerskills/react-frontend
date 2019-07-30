import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom';
import TalentList from './Talent/TalentList';
import LoginPage from './LoginPage';
import PrisonList from './Prison/PrisonList';


export default function AppRouter() {
  return <div className="page-view ui bottom attached segment active tab">
    <Switch>
    <Route exact path='/' component={PrisonList} />
    <Route path='/loginpage' component={LoginPage}/>
    <Route path='/talentlist' component={TalentList}/> 
    </Switch>
  </div>
}
