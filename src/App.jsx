import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import { Dashboard, Auth } from "@/layouts";
import Loader from "./components/Loader";
import useTitle from "./hooks/useTitle";
import { routeTitles } from "./data";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  const currentTitle = routeTitles[location.pathname] || routeTitles['*'];
  useTitle(currentTitle);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Routes>
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/account/*" element={<Auth />} />
            <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
