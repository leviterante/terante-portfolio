import React from "react";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer id="footer">
      <div className="container">
        <div className="copyright">
          &copy;{year}&nbsp;
          <strong>
            <span>Levi Terante</span> <br />
          </strong>
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
