import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { GiReturnArrow } from "react-icons/gi";

const BackToTop = () => {
  return (
    <div>
      <ScrollToTop
        smooth
        style={{
          right: "15px",
          bottom: "15px",
          borderRadius: "50%",
          background: "#149ddd",
          color: "#fff",
          transition: "all 0.4s",
        }}
        component={<GiReturnArrow />}
      />
    </div>
  );
};

export default BackToTop;
