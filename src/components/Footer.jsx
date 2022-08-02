import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright HAIDER ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
