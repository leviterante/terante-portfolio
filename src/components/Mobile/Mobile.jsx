import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import { select, on } from "../../assets/js/main";

const Mobile = () => {
  /**
   * Mobile nav toggle
   */
  useEffect(() => {
    on("click", ".mobile-nav-toggle", function (e) {
      select("body").classList.toggle("mobile-nav-active");
    });
  }, []);

  return (
    <i className="mobile-nav-toggle d-xl-none">
      <GiHamburgerMenu />
    </i>
  );
};

export default Mobile;
