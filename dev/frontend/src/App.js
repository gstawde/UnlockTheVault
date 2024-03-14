import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/SignUp';
import LoginPage from './pages/Login';
import UserDashboardPage from './pages/UserDashboard';
import SettingsPage from './pages/Settings';
import GamePage from './pages/GamePage';

function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path='login' element={<LoginPage/>} />
            <Route path='signup' element={<SignUpPage/>} />
            <Route path='user-dashboard' element={<UserDashboardPage/>} />
            <Route path='settings' element={<SettingsPage/>} />
            <Route path='game' element={<GamePage/>} />
        </Routes>
      </Router>
  );
}

export default App;
