import React from "react";
import { Box, Heading, Text } from "grommet";
import { useHistory } from "react-router-dom";

import Avatar from "./Avatar";
import UIGrade from "./UIGrade";
import { useSelector } from "react-redux";

export default function DeputyCard({ deputy, group, ...rest }) {
  const { expandedCard } = useSelector(({ deputies }) => deputies);
  const history = useHistory();
  const {
    firstName,
    lastName,
    profilePic,
    slug,
    grade,
    groupRole,
    gradeColor,
  } = deputy;
  return (
    <Box
      background="white"
      elevation={expandedCard ? "small" : "xsmall"}
      pad="small"
      round={expandedCard ? "xsmall" : "xxsmall"}
      flex
      direction={expandedCard ? "column" : "row-reverse"}
      justify={expandedCard ? "start" : "between"}
      hoverIndicator="brand"
      onClick={() => history.push(`/depute/${slug}`)}
      {...rest}
    >
      <Box
        as="header"
        flex="grow"
        direction={expandedCard ? "row" : "row-reverse"}
        justify="between"
      >
        {expandedCard && <Avatar picture={profilePic} size="xsmall" />}
        <UIGrade grade={grade} gradeColor={gradeColor} small={!expandedCard} />
      </Box>

      <Box
        as="main"
        border={
          expandedCard
            ? {
                color: "light-4",
                side: "top",
              }
            : null
        }
        margin={{ vertical: "small" }}
      >
        <Text
          size={expandedCard ? "medium" : "small"}
          margin={{ top: "xsmall" }}
          // color="dark-3"
          truncate
        >
          {firstName}
        </Text>
        <Heading
          level={2}
          size={expandedCard ? "medium" : "small"}
          margin="none"
          truncate
        >
          {lastName}
        </Heading>
      </Box>
      {expandedCard
        ? group && (
            <Box as="footer" direction="row" justify="between" align="end">
              <Box>
                <Text size="small" color="dark-4" truncate>
                  <strong>{groupRole}</strong>
                </Text>
                <Text size="small" color="dark-4" truncate>
                  {group.name}
                </Text>
              </Box>
            </Box>
          )
        : null}
    </Box>
  );
}
