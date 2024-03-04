import './App.css';
import Home from './pages/homepage/home';
import {Route, BrowserRouter, Routes } from 'react-router-dom'
import About from './pages/aboutpage/about';
import Countries from './pages/countriespage/countries';

function App() {
  return (
    <>
    <div className='App'>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/countries' element={<Countries />}></Route>

      </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
