import React, { useState, useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Spinner from './Spinner';

function RouteTransitionLoader() {
  const [loading, setLoading] = useState(true); 
  const location = useLocation();

  useEffect(() => {
    setLoading(true); 
    const timeout = setTimeout(() => setLoading(false), 2000); 

    return () => clearTimeout(timeout); 
  }, [location]);

  return (
    <>
      {loading ? (
        <div className="spinner-overlay">
          <Spinner />
        </div>
      ) : (
        <Outlet /> 
      )}
    </>
  );
}

export default RouteTransitionLoader;
