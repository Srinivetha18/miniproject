import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Cakes from './Components/Cakes';
import Myflavours from './Components/Myflavours';
import Themecakes from './Components/Themecakes';
import MyRelationship from './Components/MyRelationship';
import Dessert from './Components/Dessert';
import Birthday from './Components/Birthday';
import Anniversary from './Components/Anniversary';
import Occasion from './Components/Occasion';
import Customizedcakes from './Components/Customizedcakes';
import Login from './Components/Login';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Cakes />} />
        <Route path='/cakes' element={<Cakes />} />
        <Route path='/myflavour' element={<Myflavours />} />
        <Route path='/themecakes' element={<Themecakes/>} />
        <Route path='/myrelationship' element={<MyRelationship />} />
        <Route path='/dessert' element={<Dessert />} />
        <Route path='/birthday' element={<Birthday />} />
        <Route path='/anniversary' element={<Anniversary />} />
        <Route path='/occasion' element={<Occasion />} />
        <Route path='/customizedcakes' element={<Customizedcakes />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;

