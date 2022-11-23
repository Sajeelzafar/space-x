import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbars from './Navbar/Navbar';
import Rockets from './pages/Rockets/Rockets';
import Missions from './pages/Missions/Missions';
import Profile from './pages/myprofile/Profile';

function App() {
  return (
    <Router>
      <Navbars />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
