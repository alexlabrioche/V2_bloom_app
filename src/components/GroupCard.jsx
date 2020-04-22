import React from "react";
import { Box, Heading, Text, Button } from "grommet";
import { FormUp, FormDown } from "grommet-icons";

import Avatar from "./Avatar";
import UIGrade from "./UIGrade";
import getColorFromGrade from "../app/utils/getColorFromGrade";
import DeputiesGrid from "../features/deputies/DeputiesGrid";

export default function GroupCard({ group, deputies, ...rest }) {
  const [expanded, setExpanded] = React.useState(false);
  const grade = Math.ceil(
    deputies.reduce((acc, current) => (acc += current.grade), 0) /
      deputies.length
  );
  const gradeColor = getColorFromGrade(grade);
  return (
    <Box
      background={expanded ? "light-1" : "white"}
      elevation="small"
      round="xxsmall"
      pad="small"
      {...rest}
    >
      <Box as="header" flex direction="row" justify="between">
        <Avatar
          // picture={}
          size="xsmall"
        />

        <UIGrade grade={grade} gradeColor={gradeColor} withLabel />
      </Box>
      <Box
        as="main"
        border={{
          color: "light-4",
          side: "top",
        }}
        margin={{ top: "small" }}
      >
        <Text size="medium" margin={{ top: "xsmall" }} color="dark-3" truncate>
          <strong>Groupe Européen :</strong>
        </Text>
        <Heading level={2} size="large" color="brand" margin="none" truncate>
          {group.name}
        </Heading>
        <Text size="medium" size="small" color="dark-3" truncate>
          {`Ce groupe à ${deputies.length} député${
            deputies.length === 1 ? "" : "s"
          } Français en son sein`}
        </Text>
        <Button
          plain
          hoverIndicator
          icon={
            expanded ? (
              <FormUp color="accent-1" />
            ) : (
              <FormDown color="accent-1" />
            )
          }
          label={
            expanded ? "Moins de détails" : "Voir les députes liés à ce groupe"
          }
          onClick={() => setExpanded((s) => !s)}
          margin={{ vertical: "medium" }}
          focusIndicator={false}
        />

        {expanded && (
          <Box animation={["fadeIn", "slideDown"]}>
            <DeputiesGrid deputies={deputies} />
          </Box>
        )}
      </Box>
    </Box>
  );
}
