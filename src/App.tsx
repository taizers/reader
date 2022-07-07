import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './containers/Main/index';


function App() {
  return (
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
          <Route path='/hi' element={<div>hi</div>} />
        </Route>
      </Routes>
  );
}

export default App;
