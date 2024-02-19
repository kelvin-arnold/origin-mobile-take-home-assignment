import React from 'react';
import {TError} from '../../../types';
import {AuthContext} from './../../../context';
import {SignInSchemaType} from '../validations';

export const useSignin = () => {
  const authContext = React.useContext(AuthContext);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<TError | null>(null);

  // Fetch Data
  const signinUser = async (user: SignInSchemaType) => {
    setLoading(true);
    setError(null);
    try {
      // Fake authentication
      const dataUser: SignInSchemaType = await new Promise((resolve, _) =>
        setTimeout(() => {
          resolve(user);
        }, 3000),
      );

      authContext.setuserSession({
        username: dataUser.email,
        id: 'FAKSE_ID',
      });
    } catch (e: any) {
      setError({
        message: e ? e.message : 'Something went wrong with authentication',
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    signinUser,
  };
};
