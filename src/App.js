import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Selected} from './pages/Selected'
import { Home } from './pages/Home'
import {magicDrawer} from './components/Drawer'


function App() {

  const [open,setOpen] = useState(false);

  

  return (
    <div>
    <magicDrawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
    </magicDrawer>
    <BrowserRouter>
      <div className="App">
        <h1>NYT Movie App</h1>
        
        <Routes>
          <Route exact path="/FinalProject" element={<Home />} />
          <Route exact path="/selected/:id" element={<Selected />} />
        </Routes>
      </div>
    </BrowserRouter>
    </div>

  );
}

export default App;
