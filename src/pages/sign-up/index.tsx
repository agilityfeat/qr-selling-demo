import React from 'react';
//import { getServerSideProps } from '@/utils';
import { AuthContainer } from '@/modules/auth/application/auth.container';
import { SignupFormContainer } from '@/modules/auth/application/signup-form/signup-form.container';

function SignupPage() {
  return (
    <AuthContainer>
      <SignupFormContainer />
    </AuthContainer>
  );
}

export default SignupPage;

//export { getServerSideProps };