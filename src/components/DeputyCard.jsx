import React from "react";
import defaultPic from "../app/assets/default-profile.png";
import { Box, Image, Heading, Stack } from "grommet";

import Link from "./Link";
import NotationPill from "./NotationPill";

export default function DeputyCard({ deputy, group, ...otherProps }) {
  const { fullName, profilePic, slug } = deputy;

  return (
    <Box
      elevation="medium"
      animation="fadeIn"
      pad="xsmall"
      round="small"
      width={{ max: "22rem" }}
      {...otherProps}
    >
      <Link to={`/depute/${slug}`}>
        <Stack anchor="bottom-right">
          <Box height="17rem" margin="xsmall" round="xsmall" overflow="hidden">
            <Image fit="cover" fill src={profilePic || defaultPic} />
          </Box>
          <NotationPill
            grade={12}
            style={{ transform: "translate(0, 20px)" }}
          />
        </Stack>
      </Link>
      <Box pad="small" flex direction="column" justify="between">
        <Link to={`/depute/${slug}`} style={{ textDecoration: "none" }}>
          <Heading
            textAlign="center"
            level={2}
            color="accent-1"
            margin={{ vertical: "medium" }}
          >
            {fullName}
          </Heading>
        </Link>
        <Box flex="grow" />

        {group && (
          <Link
            to={`/groupe/${group.slug}`}
            color="dark-4"
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {group.name}
          </Link>
        )}
      </Box>
    </Box>
  );
}
