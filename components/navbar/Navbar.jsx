import Link from 'next/link';
import React from 'react'
import styles from "./navbar.module.css"
import DarkModeToggle from "../darkmodetoggle/DarkModeToggle"

const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "About",
      url: "/about",
    },
    {
      id: 3,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 4,
      title: "Portfolio",
      url: "/portfolio",
    },
  ];

function Navbar() {
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>
        Spectrum
        </Link>
        <div className={styles.links}>
          <DarkModeToggle/>
        {links.map(link =>(
          <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
        ))}
        </div>
    </div>
  )
}

export default Navbar;