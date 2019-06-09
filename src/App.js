import React from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Resume from "./components/Resume/Resume";
import Copyright from "./components/Copyright/Copyright";

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Resume/>
      <Footer/>
      <Copyright/>
    </div>
  );
}

export default App;
