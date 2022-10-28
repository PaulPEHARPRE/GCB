import React from "react";
import useColor from "./colorHook";
import ToggleSwitch from "./toggleSwitch/ToggleSwitch";

export const ConfirmationModal = () => {
  const { isGrey, toggleBlackAndWhite } = useColor();
  return (
    <React.Fragment>
      <div
        style={{
          width: "200px",
          height: "100px",
          color: "black",
          filter: `${isGrey ? "grayscale(100%)" : ""}`,
        }}
      >
        <ToggleSwitch label={'Switch to black and white mode'}/>
      </div>
    </React.Fragment>
  );
};
