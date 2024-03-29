import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Emps from './components/Emps';
import Depts from './components/Depts';
import Details from './components/Details';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const routing = (
  <Router>

    <div style={  {textAlign : "center"}  }>
      <h3>Routing Implementation in React JS</h3>
      <hr/>
      <Link to="/">Home</Link>  |
      <Link to="/Emps">Employees</Link>  |
      <Link to="/Depts">Departments</Link>  |
      <Link to="/About">About Us</Link>  |
      <Link to="/Contact">Contact Us</Link>  |
      <Link to="/Hello">Invalid</Link>  |
      <hr />
    </div>


    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Emps" element={<Emps />} />
      <Route path="/Depts" element={<Depts />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Details/:id" element={<Details />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    
  </Router>

);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
