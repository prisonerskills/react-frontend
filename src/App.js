import React from 'react';
import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import AppRouter from './components/AppRouter';
import Login from './components/Login.js';

export default function App() {
  return <main>
    <Header />
    <Login />
    <TabNav />
    <AppRouter />
  </main>
}