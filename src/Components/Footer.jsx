import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-container">
      <footer>
        <p>© Copyright {currentYear} Booksy</p>
      </footer>
    </div>
  );
}

export default Footer;
