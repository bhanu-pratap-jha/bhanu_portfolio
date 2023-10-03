import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Styles from "../styles/components/Navbar.module.scss";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className={Styles.navbar}>
      <div style={{ display: "flex" }}>
        <div className={Styles.logo}>bhanu-pratap</div>
        <Link href="/">
          <a
            className={
              router.pathname == "/"
                ? `${Styles.navbar_link} ${Styles.active}`
                : `${Styles.navbar_link}`
            }
          >
            _home
          </a>
        </Link>
        <Link href="/about">
          <a
            className={
              router.pathname == "/about"
                ? `${Styles.navbar_link} ${Styles.active}`
                : `${Styles.navbar_link}`
            }
          >
            _about-me
          </a>
        </Link>
        <Link href="/projects">
          <a
            className={
              router.pathname == "/projects"
                ? `${Styles.navbar_link} ${Styles.active}`
                : `${Styles.navbar_link}`
            }
          >
            _projects
          </a>
        </Link>
      </div>
      <Link href="/about#contact">
        <a
          className={
            router.pathname == "/contact"
              ? `${Styles.navbar_link} ${Styles.active}`
              : `${Styles.navbar_link}`
          }
          style={{ borderLeft: "1px solid #1e2d3d" }}
        >
          _contact-me
        </a>
      </Link>
    </div>
  );
};

export default Navbar;
