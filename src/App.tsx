import "./App";
//import './App.css';
import Header from "../../tssk_react_hp_ts/src/components/Header";
import Footer from "../../tssk_react_hp_ts/src/components/Footer";
import React from "react";

const App:React.FC=()=>{
  return (
      <div className="App">
        <Header />
        <Footer />
      </div>
  );
};

export default App;