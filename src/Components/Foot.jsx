import React from "react";

function Foot() {
  const currentYear = new Date().getFullYear();
  return (
      <p>Copyright ⓒ {currentYear}</p>
  );
}

export default Foot;
