import React from 'react';
import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import AppRouter from './components/AppRouter';
import Login from './components/Login.js';
import MenuExampleAttached from './components/NavBarVertical.js';

export default function App(props) {

  return <main>
    <Header />
    <MenuExampleAttached {...props}/> 
    <AppRouter />
  </main>
}