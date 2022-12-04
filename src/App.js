import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './screens/Dashboard';
import Home from './screens/Home';
import Login from './screens/Login';
import Main from './screens/Main';
import Recommendation from './screens/Recommendation';
import Registration from './screens/Registration';
import Train from './screens/Train';
import Trained from './screens/Trained';

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route element={<Home/>} path='/' />
          <Route element={<Main/>} path='/main' />
          <Route element={<Login/>} path='/login' />
          <Route element={<Registration/>} path='/registration' />
          <Route element={<Train/>} path='/train' />
          <Route element={<Trained/>} path='/trained' />
          <Route element={<Dashboard/>} path='/dashboard' />
          <Route element={<Recommendation/>} path='/recommendation' />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
