import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';





function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        
        <main style={{ flexGrow: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/users" element={<Users />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
