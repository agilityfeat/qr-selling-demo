import React from 'react';
import Link from 'next/link';
import { SignUpFormElementsType } from '@/modules/auth/domain/auth';
import { Error } from '@/components/error/error';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/Auth.module.scss'

interface Props {
  handleSubmit: (e: React.SyntheticEvent<SignUpFormElementsType>) => void;
  isLoading: boolean;
  errorMessage: string;
}

export const SignupFormView = function ({ handleSubmit, isLoading, errorMessage }: Props) {
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
          Full Name
          <input className={styles.StyledInput} type="email" name="email" required />
        </label>

        <label className={styles.StyledInputLabel}>
          Password
          <input className={styles.StyledInput} type="email" name="email" required />
        </label>
        <button className={styles.LoginButton} type="submit" disabled={isLoading}>
          Sign up {isLoading && <FontAwesomeIcon icon={faSpinner} color="#FFFFFF" size="sm" spin />}
        </button>
      </form>
      <p className={styles.StyledFormFooter}>
        <span>Already have an account?</span>
        <Link className={styles.a} href="/login/">Login here</Link>
      </p>
    </div>
  );
};
