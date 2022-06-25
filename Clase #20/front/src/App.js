import React, { useEffect } from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import ProjectList from "./components/Projects/ProjectsList";
import ProjectView from "./Pages/ProjectView";
import PageNotFound from './Pages/PageNotFound';
import PageLogin from './Pages/PageLogin';

function App() {
  let navigate = useNavigate();

  useEffect(
    () => {
      const token = localStorage.getItem('token');
      if (!token) { 
        navigate('/login', { replace: true });
      }
    }, [])

    function onLogin(user, token){
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
      navigate('/', { replace: true });
    }

  return (
    <>
      <h1>Esta es mi web</h1>
      <Routes>
        <Route path="/login" element={<PageLogin onLogin={onLogin} />} />
        <Route path="/" element={<ProjectList/>} />
        <Route path="/projects/:idProject" element={<ProjectView/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </>
  );
}

export default App;
