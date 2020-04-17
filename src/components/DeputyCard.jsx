import React from "react";
import defaultPic from "../app/assets/default-profile.png";
import { Box, Image, Heading, Stack } from "grommet";

import Link from "./Link";

export default function DeputyCard({ deputy, ...otherProps }) {
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
          <Box
            height="3rem"
            width="3rem"
            background="protect"
            pad="large"
            responsive={false}
            round="full"
            flex
            align="center"
            justify="center"
          >
            <Heading
              style={{ transform: "rotate(-10deg)" }}
              level={3}
              responsive={false}
              color="white"
            >
              12
            </Heading>
          </Box>
        </Stack>
      </Link>

      <Box pad="small">
        <Link to={`/depute/${slug}`}>
          <Heading textAlign="center" level={2}>
            {fullName}
          </Heading>
        </Link>

        <Heading level={6} margin="none">
          <Link to={`/groupe/${groupSlug}`} color="accent-1">
            {group}
          </Link>
        </Heading>
      </Box>
    </Box>
  );
}
