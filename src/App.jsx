import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HelpAndSupport from './components/helpandsupport'
import Chatwithus from './pages/chatwithus'
import AboutUs from './pages/aboutus'
import Improvehelp from './pages/improvehelp' // updated import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HelpAndSupport />} />
        <Route path="/improvehelp" element={<Improvehelp />} /> {/* updated route */}
        <Route path="/chat" element={<Chatwithus />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}


export default App
