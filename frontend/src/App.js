import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Home from './Home';         // Import the Home component
import Exchange from './Exchange'; // Import the Exchange component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for the root path */}
          <Route path="/" element={<Home />} />

          {/* Route for the /exchange path */}
          <Route path="/exchange" element={<Exchange />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
