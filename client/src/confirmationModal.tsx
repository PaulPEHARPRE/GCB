import React from "react";
import camembert from "./assets/camembert.png";
import "./confirmodal.css";
import ToggleSwitch from "./toggleSwitch/ToggleSwitch";

interface ConfirmationModalProps {
  isGrey: boolean;
  toggleBlackAndWhite: () => void;
  byteExchange: number;
  deltaTime: number;
}

export const ConfirmationModal = ({
  isGrey,
  toggleBlackAndWhite,
  byteExchange,
  deltaTime,
}: ConfirmationModalProps) => {
  

  return (
    <React.Fragment>
      <div
        style={{
          width: "full",
          height: "full",
          color: "black",
          filter: `${isGrey ? "grayscale(100%)" : ""}`,
        }}
      >
        <div className="Analysis">
          <img
            src={camembert}
            alt={"camembert"}
            style={{
              width: "700px",
              padding: "20px",
            }}
          />
          <div style={{ flexDirection: "row", display: "flex" }}>
            <p>You have been on this webpage for:&nbsp;&nbsp;&nbsp;&nbsp; </p>
            <p style={{ fontWeight: "bold" }}>
              {" "}
              {"" +
                Math.floor(deltaTime / 60).toString() +
                " min " +
                (deltaTime % 60).toString() +
                "s"}
            </p>
          </div>
          <div style={{ flexDirection: "row", display: "flex" }}>
            <p>The data usage for this webpage is:&nbsp;&nbsp;&nbsp;&nbsp; </p>
            <p style={{ fontWeight: "bold" }}>
              {" "}
              {"" + byteExchange.toString() + " Mb"}
            </p>
          </div>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              paddingBottom: "20px",
            }}
          >
            <p>This represents: &nbsp;&nbsp;&nbsp;&nbsp;</p>
            <div style={{ flexDirection: "column", paddingBottom: "20px" }}>
              <p style={{ fontWeight: "bold" }}>
                {" "}
                {"" + (byteExchange * 0.00081).toString() + " kWh"}
              </p>
              <p style={{ fontWeight: "bold" }}>
                {" "}
                {"" + (byteExchange * 0.00081 * 442).toString() + " g of CO2"}
              </p>
            </div>
          </div>
        </div>

        <div className="ToolBox">
          <ToggleSwitch
            label={"Switch to black and white mode"}
            isGrey={isGrey}
            toggleBlackAndWhite={toggleBlackAndWhite}
          />
          <ToggleSwitch
            label={"Block network activity for this website"}
            isGrey={isGrey}
            toggleBlackAndWhite={() => {}}
          />
        </div>

        <div className="Impact">
          <div style={{ flexDirection: "row", display: "flex" }}>
            <p>By your actions you have saved:&nbsp;&nbsp;&nbsp;&nbsp; </p>
            <p style={{ fontWeight: "bold" }}>
              {" "}
              {isGrey? (deltaTime * 0.001).toFixed(3).toString() + " kWh": " 0 kWh"}
            </p>
            <p style={{ fontWeight: "bold" }}>
              &nbsp;
              {"and"}&nbsp;{" "}
              {isGrey? (deltaTime * 0.001 * 422).toFixed(3).toString() + " g of CO2": "0 g of CO2"}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
