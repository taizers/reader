import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './containers/Main/index';
import Login from './containers/Login/index';
import SignUp from './containers/SignUp/index';
import Users from './containers/Users/index';
import PrivateRoute from './router/components/PrivateRoute/index';
import PublicRoute from './router/components/PublicRoute/index';
import { getToken } from './utils/index';

const getUserByToken = (token: string) => {
  console.log(token);
}

function App() {
  useEffect(()=>{
    const token = getToken();
    if (token) {
      getUserByToken(token);
    }
  },[])
  return (
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
          <Route path='/login' element={<PublicRoute component={<Login />}/>} />
          <Route path='/signUp' element={<PublicRoute component={<SignUp />}/>} />
          <Route path='/users' element={<PrivateRoute component={<Users/>}/>} />
        </Route>
      </Routes>
  );
}

export default App;
