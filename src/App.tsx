import React, { useEffect, FC } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import Main from './containers/Main/index';
import NotFound from './components/NotFound/index';
import Login from './containers/Login/index';
import SignUp from './containers/SignUp/index';
import Users from './containers/Users/index';
import SingleUser from './containers/SingleUser/index';
import Profile from './containers/Profile/index';
import Books from './containers/Books/index';
import Book from './containers/Book/index';
import { PublicRoute, PrivateRoute, PublicRouteWithSideBar } from './router/components/index';
import { getToken } from './utils/index';
import { checkAuth } from './actions/auth';

type AppType = {
  checkAuth: (history: any) => Promise<any>;
}

const App: FC<AppType> = ({ checkAuth }) => {
  const history = useNavigate();
  let location = useLocation();

  useEffect(()=>{
    const token = getToken();

    if (token) {
      console.log('555');
      checkAuth(history);
    }
  },[])

  return (
    <>
      <Routes>
          <Route path='/login' element={<PublicRoute component={<Login />}/>} />
          <Route path='/signUp' element={<PublicRoute component={<SignUp />}/>} />
          <Route path='/users' element={<PrivateRoute component={<Users />}/>} />
          <Route path='/users/:id' element={<PrivateRoute component={<SingleUser />}/>} />
          <Route path='/profile' element={<PrivateRoute component={<Profile />}/>} />
          <Route path='/books' element={<PrivateRoute component={<Books />}/>} />
          <Route path='/books/:id' element={<PrivateRoute component={<Book />}/>} />
          <Route path='/' element={<PublicRouteWithSideBar component={<Main />}/>} />
          <Route path='*' element={<PublicRouteWithSideBar component={<NotFound />}/>} />
      </Routes>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
    </>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  checkAuth: (history: any) => dispatch(checkAuth(history)),
});

export default connect(null, mapDispatchToProps)(App);
