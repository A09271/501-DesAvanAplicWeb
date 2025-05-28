import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/A01027920/Home';
import CatGreeting from './class1/A01027920/Welcome';
import Login from './class2/A01027920/LoginPage';
import NewLogin from './class3/A01027920/NewLogin';
import TravelRequestForm from './class5/A01027920/TravelRequestForm';
import DashboardWrapper from './class6/A01027920/DashboardWrapper';
import RealTimeNotifications from './class7/A01027920/RealTimeNotification';
import FormMenu from './class4/A01027920/FormMenuEntry';

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' && (
        <div>
          <div>
            <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
          <Link to="/A01027920">Go to Home</Link>
        </div>
      )}


      <Routes>
        <Route path='/A01027920' element={<Home/>}/>
        <Route path='/class1' element={<CatGreeting/>}/>
        <Route path='/class2' element={<Login />}/>
        <Route path='/class3' element={<NewLogin />}/>
        <Route path='/class4' element={<FormMenu />} />
        <Route path='/class5' element={<TravelRequestForm />}/>
        <Route path='/class6' element={<DashboardWrapper />}/>
        <Route path='/class7' element={<RealTimeNotifications />}/>
      </Routes>
    </>
  )
}

export default App;
