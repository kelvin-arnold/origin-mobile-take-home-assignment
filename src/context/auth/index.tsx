import React from 'react';
import {TUserSession} from '../../types';

type TAuthContextProps = {
  userSession: TUserSession | undefined;
  setuserSession: (user: TUserSession) => void;
  clearuserSession: () => void;
  loadingSession: boolean;
};

const AuthContext = React.createContext({} as TAuthContextProps);

const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({children}) => {
  const [userSession, setuserSession] = React.useState<
    TUserSession | undefined
  >(undefined);

  const [loadingSession, setLoadingSession] = React.useState<boolean>(false);

  const clearuserSession = () => {
    setLoadingSession(true);
    setTimeout(() => {
      setuserSession(undefined);
      setLoadingSession(false);
    }, 1000);
  };

  const fetchUserSession = () => {
    setLoadingSession(true);
    setTimeout(() => {
      setLoadingSession(false);
    }, 3000);
  };

  React.useEffect(() => {
    if (userSession) {
      fetchUserSession();
    }
  }, [userSession]);

  return (
    <AuthContext.Provider
      value={{
        userSession,
        setuserSession,
        clearuserSession,
        loadingSession,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContext, AuthProvider};
