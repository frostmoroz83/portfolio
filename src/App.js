import React from 'react';
import Header from "./components/Header/Header";
import Resume from "./components/Resume/Resume";
import Copyright from "./components/Copyright/Copyright";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Resume/>
      <Portfolio/>
      <Copyright/>
    </div>
  );
}

export default App;
