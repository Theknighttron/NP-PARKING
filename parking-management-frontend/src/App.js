import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import Layout from './component/shared/Layout';
import LandingPage from './LandingPage';
import Homepage from './Homepage';
import './index.css';
import Features from './Features';
import Contact from './Contact';
import About from './About';
import GridStats from '../src/component/shared/GridStats'
import ReservationForm from './ReservationForm';


const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/map" element={<Layout />}>
                <Route index element={<Dashboard />} />
            </Route>
            <Route path="/" element={<Homepage />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/stats" element={<GridStats />} />
        </Routes>
    </Router>
  )
}

export default App