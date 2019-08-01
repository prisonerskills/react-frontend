import React from "react";

import Header from "./components/Header.js";
import AppRouter from "./components/AppRouter";
import MenuExampleAttached from "./components/NavBarVertical.js";

export default function App(props) {
  return (
    <main>
      <Header />
      <MenuExampleAttached {...props} />
      <AppRouter />
    </main>
  );
}
