import React, { useEffect } from "react";
import { Box, Heading, Text, Stack, Image, Paragraph } from "grommet";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDeputy } from "../features/localData/localDataActions";
import { isEmpty } from "lodash";
import NotationPill from "../components/NotationPill";
import defaultPic from "../app/assets/default-profile.png";
import AppLink from "../components/Link";

export default function DeputyPage() {
  let { slug } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { deputyDetails, deputies } = useSelector(({ localData }) => localData);

  useEffect(() => {
    dispatch(setDeputy(slug));
  }, []);

  useEffect(() => {
    const deputy = deputies.find((deputy) => deputy.slug === slug);
    if (isEmpty(deputy)) {
      history.push("/");
    }
  }, [history, slug]);

  const {
    fullName,
    twitter,
    groupRole,
    party,
    email,
    facebook,
    website,
    profilePic,
    groupName,
    groupSlug,
  } = deputyDetails;

  return (
    <Box>
      <Stack anchor="top-right">
        <Box as="header" flex direction="row" align="start">
          <Box
            height="small"
            width="small"
            round="xsmall"
            margin={{ right: "small" }}
            style={{ overflow: "hidden" }}
          >
            <Image fit="cover" src={profilePic || defaultPic} />
          </Box>
          <Box>
            <Heading level={1} color="brand">
              {fullName}
            </Heading>
            <Paragraph fill>
              est {groupRole} du Groupe Européen{" "}
              <AppLink to={`/groupe/${groupSlug}`} color="accent-1">
                {groupName}
              </AppLink>
            </Paragraph>
          </Box>
        </Box>
        <NotationPill grade={15} />
      </Stack>

      <Text>Parti : {party}</Text>
      <Text>{twitter}</Text>
      <Text>{email}</Text>
      <Text>{facebook}</Text>
      <Text>{website}</Text>
    </Box>
  );
}
