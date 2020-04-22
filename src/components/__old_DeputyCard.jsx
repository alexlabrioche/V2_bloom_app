import React from "react";
import { Box, Image, Heading, Stack, Text } from "grommet";
import { useHistory } from "react-router-dom";
import getColorFromGrade from "../app/utils/getColorFromGrade";

export default function DeputyCard({ deputy, group, ...rest }) {
  const history = useHistory();
  const { fullName, profilePic, slug, grade } = deputy;
  const defaultPic = `${process.env.PUBLIC_URL}/assets/default-profile.png`;

  return (
    <Box
      background="white"
      elevation="small"
      pad="xsmall"
      round="xsmall"
      width={{ max: "20rem" }}
      hoverIndicator
      onClick={() => history.push(`/depute/${slug}`)}
      {...rest}
    >
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
          background={getColorFromGrade(grade)}
          round="full"
          responsive={false}
          style={{ transform: "translate(0, 20px)" }}
        >
          <Heading
            style={{ transform: "rotate(-10deg)" }}
            level={3}
            color="white"
          >
            {grade}/20
          </Heading>
        </Box>
      </Stack>
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
        <Text color="dark-4" size="small" truncate>
          {group.name}
        </Text>
      </Box>
    </Box>
  );
}
