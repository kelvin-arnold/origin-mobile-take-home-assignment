import React from 'react';
import {TError} from '../../../types';
import {AuthContext} from './../../../context';
import {SignUpSchemaType} from '../validations';

export const useSignUp = () => {
  const authContext = React.useContext(AuthContext);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<TError | null>(null);

  // Fetch Data
  const signUp = async (data: SignUpSchemaType) => {
    setLoading(true);
    setError(null);
    try {
      // Fake authentication
      const dataUser: SignUpSchemaType = await new Promise((resolve, _) =>
        setTimeout(() => {
          resolve(data);
        }, 3000),
      );

      authContext.setuserSession({
        username: dataUser.email,
        id: 'FAKSE_ID',
      });
    } catch (e: any) {
      setError({
        message: e ? e.message : 'Something went wrong with registration',
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    signUp,
  };
};
