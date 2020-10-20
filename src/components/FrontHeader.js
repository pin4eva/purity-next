import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const navList = [
  { name: "Home", link: "/" },
  { name: "Products", link: "/" },
  { name: "About Us", link: "/" },
  { name: "Contact Us", link: "/" },
];

const FrontHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper id="header">
      <div className="wrapper">
        <nav className="navbar container ">
          <Link href="/">
            <a className="nav-brand">
              <img src="logo.png" alt="" />
            </a>
          </Link>
          <ul className="navbar nav d-none d-md-flex">
            {navList.map((nav, i) => (
              <li className="nav-item" key={i}>
                <Link href={nav.link}>
                  <a className="nav-link">{nav.name}</a>
                </Link>
              </li>
            ))}
          </ul>
          <i
            className="fas fa-bars d-md-none"
            onClick={() => setIsOpen(!isOpen)}
          ></i>
        </nav>
        <div className={`mobile-nav d-md-none ${isOpen ? "d-flex" : "d-none"}`}>
          <div>
            <ul className="navbar nav flex-column align-items-start ">
              {navList.map((nav, i) => (
                <li className="nav-item" key={i}>
                  <Link href={nav.link}>
                    <a className="nav-link">{nav.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  .nav-brand {
    /* height:3rem; */
    width: 3.5rem;
    img {
      width: 100%;
    }
  }
  .nav-link {
    color: inherit;
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

export default FrontHeader;
