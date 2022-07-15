import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { AppContainer, MainContent } from './styled';
import Sidebar from '../../../components/Sidebar/index';
import { isToken } from '../../../utils';

type PrivateRouteType = {
  component: React.ReactNode;
};

const PrivateRoute: FC<PrivateRouteType> = (props) => {
  const { component } = props;
  const isAuth = isToken();

  return (
    <AppContainer>
      <Sidebar>
        <MainContent>{isAuth ? component : <Navigate to={'/login'} />}</MainContent>
      </Sidebar>
    </AppContainer>
  );
};

export default PrivateRoute;
