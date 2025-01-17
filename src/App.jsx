import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Component/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:nickname" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
