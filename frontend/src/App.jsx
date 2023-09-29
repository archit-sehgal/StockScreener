import React from 'react';
import './App.css';
import HomeComp from './components/HomeComp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavComp from './components/NavComp';
import SingleStock from './components/SingleStock';
import Explore from './components/Explore';
import TopTen from './components/TopTen';
import Help from "./components/HelpData";
import RouteTransitionLoader from './components/RouteTransitionLoader ';

function App() {
  return (
    <Router>
      <div className="flex main" style={{ flexDirection: 'column', alignItems: 'center' }}>
        <NavComp />
        <RouteTransitionLoader />
        <Routes>
          <Route path="/" element={<HomeComp />} />
          <Route path="/ss" element={<SingleStock />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/topten" element={<TopTen />} />
          <Route path='/help' element={<Help/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
