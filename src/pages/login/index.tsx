import React from 'react';
//import { getServerSideProps } from '@/utils';
import { AuthContainer } from '@/modules/auth/application/auth.container';
import { LoginFormContainer } from '@/modules/auth/application/login-form/login-form.container';

function AuthLandingPage() {
  return (
    <AuthContainer>
      <LoginFormContainer />
    </AuthContainer>
  );
}

export default AuthLandingPage;

//export { getServerSideProps };