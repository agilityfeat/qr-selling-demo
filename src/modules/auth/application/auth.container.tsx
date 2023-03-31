import React from 'react';
import styles from '@/styles/Auth.module.scss'
import Image from 'next/image';
import { NavBar } from '@/components/navbar/navbar';
type Props = {
  children?: React.ReactNode;
};

export const AuthContainer = function ({ children }: Props) {
  return (
    <>
      <NavBar />
      <div className={styles.AuthContainer}>
        {children}
      </div>
    </>
  );
};
