import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright {year} Bad Bird Studios</p>
    </footer>
  );
}

export default Footer;
