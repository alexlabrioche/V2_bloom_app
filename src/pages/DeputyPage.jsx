import React, { useEffect } from "react";
import { Box, Heading, Text, Stack, Image, Paragraph, Button } from "grommet";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDeputy } from "../features/localData/localDataActions";
import { isEmpty } from "lodash";
import { Previous } from "grommet-icons";
import AppLink from "../components/Link";
import Page from "../app/layout/Page";
import WaveGrade from "../components/WaveGrade";

export default function DeputyPage() {
  let { slug } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { deputyDetails, deputies } = useSelector(({ localData }) => localData);
  const defaultPic = `${process.env.PUBLIC_URL}/assets/default-profile.png`;

  useEffect(() => {
    const deputy = deputies.find((deputy) => deputy.slug === slug);
    if (isEmpty(deputy)) {
      history.push("/");
    } else {
      dispatch(setDeputy(slug));
    }
  }, [dispatch, deputies, history, slug]);

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
    <Page>
      <Box flex direction="row" align="start" pad={{ vertical: "medium" }}>
        <Button
          onClick={() => history.goBack()}
          icon={<Previous color="accent-1" />}
          label="Retour"
          plain
        />
      </Box>
      <WaveGrade grade={12} variant="protect" />
      <WaveGrade grade={12} variant="medium" />
      <WaveGrade grade={12} variant="destruct" />
      <Stack anchor="top-right">
        <Box flex direction="row" align="start">
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
      </Stack>

      <Text>Parti : {party}</Text>
      <Text>{twitter}</Text>
      <Text>{email}</Text>
      <Text>{facebook}</Text>
      <Text>{website}</Text>
    </Page>
  );
}
