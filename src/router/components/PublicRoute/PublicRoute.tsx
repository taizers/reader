import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { isToken } from '../../../utils';

type PublicRouteType = {
  component: React.ReactNode;
};

const PublicRoute: FC<PublicRouteType> = (props) => {
  const { component } = props;
  const isAuth = isToken();

  return <>{!isAuth ? component : <Navigate to={'/groups'} />}</>;
};

export default PublicRoute;
