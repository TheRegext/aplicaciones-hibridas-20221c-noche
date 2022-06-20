import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProjectList from "./components/Projects/ProjectsList";
import ProjectView from "./Pages/ProjectView";
import PageNotFound from './Pages/PageNotFound';
function App() {

  return (
    <BrowserRouter>
      <h1>Esta es mi web</h1>
      <Routes>
        <Route path="/" element={<ProjectList/>} />
        <Route path="/projects/:idProject" element={<ProjectView/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
