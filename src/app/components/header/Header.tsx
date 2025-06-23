"use client";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { nav_links } from "@/constants";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useScreenSize } from "@/app/hooks/useScreenSize";

export const Header = () => {
  const [open, setIsOpen] = useState(false);
  const { width } = useScreenSize();

  useEffect(() => {
    if (width > 800) {
      setIsOpen(false);
    }
  }, [width]);

  const toggleMenu = () => {
    setIsOpen(!open);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header_top}>
          <div className={styles.logo_image_container}>
            <button
              className={styles.menu__toggle__button}
              onClick={toggleMenu}
            >
              {open ? (
                <FaTimes />
              ) : (
                <Image
                  src="/assets/images/bars.png"
                  height={25}
                  width={36}
                  alt="toggle-icon"
                />
              )}
            </button>
            <Image
              src="/assets/images/Logo4.png"
              height={25}
              width={36}
              alt="logo"
              className={styles.logo_image}
            />
          </div>
          <h1 className={styles.logo}>Logo</h1>
          <div className={styles.menu_buttons}>
            <button>
              <Image
                src="/assets/images/search-normal.png"
                height={24}
                width={24}
                alt="search-icon"
              />
            </button>
            <button>
              <Image
                src="/assets/images/heart.png"
                height={24}
                width={24}
                alt="heart"
              />
            </button>
            <button>
              <Image
                src="/assets/images/shopping-bag.png"
                height={24}
                width={24}
                alt="shopping-bag"
              />
            </button>
            <button>
              <Image
                src="/assets/images/profile.png"
                height={24}
                width={24}
                alt="profile-img"
              />
            </button>
          </div>
        </div>
        <nav>
          <ul className={`${styles.header__nav} ${open && styles.showNav}`}>
            {nav_links.map((link) => (
              <li key={link.id}>
                <Link href={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
