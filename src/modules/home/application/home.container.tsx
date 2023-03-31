import React from 'react';
import styles from '@/styles/Home.module.scss'
import Image from 'next/image';
import { NavBar } from '@/components/navbar/navbar';
type Props = {
  children?: React.ReactNode;
};

export const HomeContainer = function ({ children }: Props) {
  return (
    <>
      <NavBar />
      <div className={styles.HomeContainer}>
        {children}
      </div>
    </>
  );
};
