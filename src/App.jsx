// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Player from './pages/Player';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:animeId" element={<Detail />} />
        <Route path="/player" element={<Player />} />
      </Routes>
    </Router>
  );
};

export default App;
