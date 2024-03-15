/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const FaqSection = ({
  property1,
  className,
  ellipseClassName,
  divClassName,
  text = "Text",
  akarIconsChevron = "/img/akar-icons-chevron-right-1.svg",
  img = "/img/akar-icons-chevron-right.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`FAQ-section ${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="frame">
        <div className="div">
          <div className={`ellipse ${ellipseClassName}`} />
          <div className={`text ${divClassName}`}>{text}</div>
        </div>
        <img
          className="akar-icons-chevron"
          alt="Akar icons chevron"
          src={state.property1 === "hover" ? akarIconsChevron : img}
        />
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

FaqSection.propTypes = {
  property1: PropTypes.oneOf(["hover", "default"]),
  text: PropTypes.string,
  akarIconsChevron: PropTypes.string,
  img: PropTypes.string,
};
