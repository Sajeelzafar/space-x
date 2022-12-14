import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { fetchMissions } from '../redux/missions/missions';
import Navbars from './Navbar/Navbar';
import Rockets from './pages/Rockets/Rockets';
import Missions from './pages/Missions/Missions';
import Profile from './pages/myprofile/Profile';
import { fetchRockets } from '../redux/rockets/rockets';

function App() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  useEffect(() => {
    if (dataFetchedRef.current);
    else {
      dataFetchedRef.current = true;
      dispatch(fetchRockets());
    }
  }, [rockets]);
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
