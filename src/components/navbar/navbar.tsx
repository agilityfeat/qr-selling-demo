import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '@/styles/Navbar.module.scss'

const NavBar = function Navbar({ user }: any) {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className={styles.Navbar} >
        <Image className={styles.StyledLogo} src="/images/logo.png" width={220} height={62} alt="logo" />
    </div>
  );
};

export { NavBar };
