import React from "react";
import { Text } from "grommet";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const TextLink = styled(Text)`
  &:hover {
    text-decoration: underline;
  }
`;

function AppLink({ to = "/", children = "", ...props }) {
  return (
    <TextLink {...props}>
      <Link to={to} style={{ color: "inherit", textDecoration: "none" }}>
        <strong>{children}</strong>
      </Link>
    </TextLink>
  );
}

AppLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.element.isRequired,
  ]),
  props: PropTypes.any,
};

export default AppLink;
