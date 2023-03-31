import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { SignupFormView } from './signup-form.view';
//import { CognitoUtils } from '@/modules/auth/infrastructure/cognitoUtils';
import { SignUpFormElementsType } from '@/modules/auth/domain/auth';

export const SignupFormContainer = function () {
  const router = useRouter();
  //const [utils, setUtils] = useState<CognitoUtils>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  /*useEffect(() => {
    setUtils(new CognitoUtils());
  }, []);*/

  const handleSubmit = (event: React.FormEvent<SignUpFormElementsType>) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    const name = event.currentTarget.elements.name.value.trim();
    const email = event.currentTarget.elements.email.value.trim();
    const password = event.currentTarget.elements.password.value.trim();

    console.log(name)
    console.log(email)
    console.log(password)

    /*utils
      ?.signUp({ username: email, password, fullName: name, email })
      .then(() => {
        router.replace('/auth/awaiting-approval').then(() => router.reload());
      })
      .catch((error) => {
        setErrorMessage(error.message.split(':')[1]);
      })
      .finally(() => {
        setIsLoading(false);
      });*/
  };

  return <SignupFormView handleSubmit={handleSubmit} isLoading={isLoading} errorMessage={errorMessage} />;
};
