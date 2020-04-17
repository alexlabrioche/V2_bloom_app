import React from "react";
import defaultPic from "../app/assets/default-profile.png";
import { Box, Image, Heading, Stack } from "grommet";

import Link from "./Link";
import NotationPill from "./NotationPill";

export default function DeputyCard({
  deputy,
  isInGroup = false,
  ...otherProps
}) {
  const { fullName, profilePic, group, slug, groupSlug } = deputy;
  return (
    <Box
      elevation="medium"
      animation="fadeIn"
      pad="xsmall"
      round="small"
      {...otherProps}
    >
      <Link to={`/depute/${slug}`}>
        <Stack anchor="bottom-right">
          <Box height={"medium"} margin="medium">
            <Image fit="cover" src={profilePic || defaultPic} />
          </Box>
          <NotationPill grade={12} style={{ transform: "translate(0,10px)" }} />
        </Stack>
      </Link>

      <Box pad="small">
        <Link to={`/depute/${slug}`}>
          <Heading textAlign="center" level={2}>
            {fullName}
          </Heading>
        </Link>

        {!isInGroup && (
          <Heading level={6} margin="none">
            <Link to={`/groupe/${groupSlug}`} color="accent-1">
              {group}
            </Link>
          </Heading>
        )}
      </Box>
    </Box>
  );
}
