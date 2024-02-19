import React from 'react';
import GuestModules from './_guest';
import {AuthContext} from './../context/auth';
import {LoadingView} from '../components';
import LoggedModules from './_logged';

const Modules = () => {
  const {loadingSession, userSession} = React.useContext(AuthContext);

  if (loadingSession) {
    return <LoadingView message="Loading" />;
  }

  return userSession === undefined ? <GuestModules /> : <LoggedModules />;
};

export default Modules;
