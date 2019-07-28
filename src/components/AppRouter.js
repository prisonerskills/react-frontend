import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom';
import TalentList from './Talent/TalentList';


export default function AppRouter() {
  return <div className="page-view ui bottom attached segment active tab">
    <Switch>
    <Route path='/talent' component={TalentList} />
     
    </Switch>
  </div>
}
