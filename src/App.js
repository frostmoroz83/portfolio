import React from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Resume/>
      <Footer/>
    </div>
  );
}

export default App;
