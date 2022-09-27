import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './screens/Home';
import Main from './screens/Main';

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route element={<Home/>} path='/' />
          <Route element={<Main/>} path='/main' />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
