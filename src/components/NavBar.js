import { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <nav className={`nav ${show && "nav_black"}`}>
      <img src="/images/Netflix_Logo_PMS.png" alt="logo" className="navlogo" />
    </nav>
  );
}

export default NavBar;
