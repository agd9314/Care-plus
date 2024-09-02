import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Home from './components/Home';
import LoadingScreen from './components/Loading'; // Import your loading component
import Landingpage from './components/Landingpage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data or performing some asynchronous task
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingScreen /> // Render the loading component if loading is true
      ) : (
        <>

          <Outlet />
        </>
      )}
    </div>
  );
}

export const MainChildren = () => {
  return (
    <>
    <Landingpage/>
      <Home />
    </>
  );
};

export default App;