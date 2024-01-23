// LoaderSpinner.jsx
import React from "react";
import { css } from "@emotion/react";
import { RingLoader } from "react-spinners";

const overlayStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* Add this line to center vertically */
  z-index: 999;
`;

const containerStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid red; /* Add a border for testing */
`;


const LoaderSpinner = ({ style }) => {
    return (
      <div css={overlayStyles} style={style}>
        <div css={containerStyles}>
          <RingLoader color={"#008774"} loading={true} size={100} />
          <p>Loading.....</p>
        </div>
      </div>
    );
  };
  

export default LoaderSpinner;
