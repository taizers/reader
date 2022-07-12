import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './containers/Main/index';
import Login from './containers/Login/index';
import SignUp from './containers/SignUp/index';


function App() {
  return (
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />
        </Route>
      </Routes>
  );
}

export default App;
