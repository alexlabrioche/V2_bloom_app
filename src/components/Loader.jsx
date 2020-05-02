import React from "react";
import styled from "styled-components";
import { Heading, ThemeContext } from "grommet";

const StyledWaveLoader = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 300px;
  height: 30px;
  animation: ocean 0.9s infinite alternate ease-in-out;
  margin: auto;
  vertical-align: middle;
  @keyframes wave {
    0% {
      border-radius: 25%;
    }
    100% {
      border-radius: 50%;
    }
  }
  @keyframes wave-after {
    0% {
      border-radius: 25%;
      left: -50px;
    }
    100% {
      border-radius: 50%;
      left: -42px;
    }
  }
  @keyframes wave-before {
    0% {
      border-radius: 25%;
      left: 44px;
    }
    100% {
      border-radius: 50%;
      left: 36px;
    }
  }
  @keyframes ocean {
    0% {
      top: 0;
    }
    100% {
      top: 10px;
    }
  }
  .loading,
  .loading:after,
  .loading:before {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-bottom-color: ${(p) => p.color};
    box-sizing: border-box;
  }

  .loading {
    position: relative;
    margin: auto;
    margin-bottom: 10px;
    animation: wave 1.1s infinite alternate ease-in-out;
  }

  .loading:after,
  .loading:before {
    position: absolute;
    content: "";
    display: block;
    top: -3px;
  }

  .loading:after {
    left: -42px;
    animation: wave-after 1.1s infinite alternate ease-in-out;
  }

  .loading:before {
    left: 36px;
    animation: wave-before 1.1s infinite alternate ease-in-out;
  }
`;
export default function Loader() {
  const { global } = React.useContext(ThemeContext);
  return (
    <StyledWaveLoader color={global.colors.brand}>
      <div className="loading" />
      <Heading
        level={3}
        size="small"
        width="100%"
        color="brand"
        textAlign="center"
        margin={{ top: "20px" }}
      >
        Chargement
      </Heading>
    </StyledWaveLoader>
  );
}
