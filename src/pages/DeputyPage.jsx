import React, { useEffect } from "react";
import { Box, Heading, Text, Button, Stack, Image, Paragraph } from "grommet";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDeputy } from "../features/deputies/deputiesActions";
import { isEmpty } from "lodash";
import NotationPill from "../components/NotationPill";
import defaultPic from "../app/assets/default-profile.png";
import AppLink from "../components/Link";

export default function DeputyPage() {
  let { slug } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { deputy, deputyLoaded } = useSelector(({ deputies }) => deputies);

  useEffect(() => {
    dispatch(setDeputy(slug));
  }, [dispatch, slug]);

  useEffect(() => {
    if (deputyLoaded && isEmpty(deputy)) {
      history.push("/");
    }
  }, [dispatch, history, deputy, deputyLoaded]);

  const {
    fullName,
    twitter,
    groupRole,
    group,
    groupSlug,
    party,
    email,
    facebook,
    website,
    profilePic,
  } = deputy;
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
                {group}
              </AppLink>
            </Paragraph>
          </Box>
        </Box>
        <NotationPill grade={15} />
      </Stack>

      <Text fill>Parti : {party}</Text>
      <Text fill>{twitter}</Text>
      <Text fill>{email}</Text>
      <Text fill>{facebook}</Text>
      <Text fill>{website}</Text>
    </Box>
  );
}
