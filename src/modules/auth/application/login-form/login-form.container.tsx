import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { LoginFormView } from './login-form.view';
//import { CognitoUtils } from '@/modules/auth/infrastructure/cognitoUtils';
import { SignInFormElementsType } from '@/modules/auth/domain/auth';

export const LoginFormContainer = function () {
  const router = useRouter();
  //const [utils, setUtils] = useState<CognitoUtils>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  /*useEffect(() => {
    setUtils(new CognitoUtils());
  }, []);*/

  const handleSubmit = (event: React.FormEvent<SignInFormElementsType>) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    const email = event.currentTarget.elements.email.value.trim();
    const password = event.currentTarget.elements.password.value.trim();

    console.log(email)
    console.log(password)
    /*utils
      ?.signIn({ username: email, password })
      .then((user) => {
        if (user) {
          router.push('/meeting');
        } else {
          setErrorMessage('Authentication failure');
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });*/
  };
  return <LoginFormView handleSubmit={handleSubmit} isLoading={isLoading} errorMessage={errorMessage} />;
};
