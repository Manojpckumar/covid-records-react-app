import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import India from './components/India';
import World from './components/World';
import Header from './components/Header';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='container-fluid'>
      <BrowserRouter>
      <Header/>
        <Routes>
          
          <Route exact path="/" element={<India/>}>  </Route>
          <Route exact path="/india" element={<India/>}>  </Route>
          <Route exact path="/world" element={<World/>}>  </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
