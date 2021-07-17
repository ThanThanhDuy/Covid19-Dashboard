import React from "react";
// import PropTypes from "prop-types";
import OverViewLeft from "./OverViewLeft/OverViewLeft";
import OverViewRight from "./OverViewRight/OverViewRight";

function OverView(props) {
  return (
    <div
      className="overView"
      style={{
        backgroundColor: "#fff",
        width: "100%",
        height: "100vh",
        borderRadius: "4rem 0 0 4rem",
        padding: "4rem",
        transition: "all 0.3s linear",
      }}
    >
      <OverViewLeft />
      <OverViewRight />
      overView
    </div>
  );
}

// OverView.propTypes = {};

export default OverView;
