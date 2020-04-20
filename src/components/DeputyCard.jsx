import React from "react";
import { Box, Image, Heading, Stack, Text } from "grommet";

import Link from "./Link";
import { useHistory } from "react-router-dom";

export default function DeputyCard({ deputy, group, ...rest }) {
  const history = useHistory();
  const { fullName, profilePic, slug } = deputy;
  const defaultPic = `${process.env.PUBLIC_URL}/assets/default-profile.png`;

  return (
    <Box
      background="light-2"
      elevation="small"
      pad="xsmall"
      round="xsmall"
      width={{ max: "20rem" }}
      hoverIndicator="white"
      onClick={() => history.push(`/depute/${slug}`)}
      {...rest}
    >
      <Link to={`/depute/${slug}`}>
        <Stack anchor="bottom-right">
          <Box height="12rem" margin="xsmall" round="xsmall" overflow="hidden">
            <Image fit="cover" fill src={profilePic || defaultPic} />
          </Box>
          <Box
            flex
            align="center"
            justify="center"
            height="xsmall"
            width="xsmall"
            background="protect"
            round="full"
            responsive={false}
            style={{ transform: "translate(0, 20px)" }}
          >
            <Heading
              style={{ transform: "rotate(-10deg)" }}
              level={3}
              color="white"
            >
              12/20
            </Heading>
          </Box>
        </Stack>
      </Link>
      <Box pad="xsmall" flex direction="column" justify="between">
        <Heading
          textAlign="center"
          level={3}
          size="small"
          color="brand"
          margin={{ vertical: "small" }}
        >
          {fullName}
        </Heading>
        <Box flex="grow" />
        <Text
          color="dark-4"
          size="small"
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {group.name}
        </Text>
      </Box>
    </Box>
  );
}
