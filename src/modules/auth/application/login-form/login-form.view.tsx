import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Auth.module.scss'
import { SignInFormElementsType } from '@/modules/auth/domain/auth';
import { Error } from '@/components/error/error';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

interface Props {
  handleSubmit: (e: React.SyntheticEvent<SignInFormElementsType>) => void;
  isLoading: boolean;
  errorMessage: string;
}
export const LoginFormView = function ({ handleSubmit, isLoading, errorMessage }: Props) {
  return (
    <div className={styles.FormContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Login</h2>
        <Error error={errorMessage} />
        <label className={styles.StyledInputLabel}>
          Email
          <input className={styles.StyledInput} type="email" name="email" required />
        </label>

        <label className={styles.StyledInputLabel}>
          Password
          <input className={styles.StyledInput} type="password" name="password" required />
        </label>
        <Link href="/auth/reset-password" className={styles.ForgotPassword}>
            Forgot your password?
        </Link>

        <button className={styles.LoginButton} type="submit" disabled={isLoading}>
          Login {isLoading && <FontAwesomeIcon icon={faSpinner} color="#FFFFFF" size="sm" spin />}
        </button>
      </form>
      <p className={styles.StyledFormFooter}>
        <span>Don't have an account?</span>
        <Link className={styles.a} href="/sign-up">Sign up here</Link>
      </p>
    </div>
  );
};
