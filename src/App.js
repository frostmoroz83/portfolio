import React from 'react';
import Header from "./components/Header/Header";
import Resume from "./components/Resume/Resume";
import Copyright from "./components/Copyright/Copyright";
import Portfolio from "./components/Portfolio/Portfolio";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Resume/>
      <Portfolio/>
      <Contacts/>
      <Copyright/>
    </div>
  );
}

export default App;
