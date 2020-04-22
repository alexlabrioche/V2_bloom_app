import React, { useEffect } from "react";
import { Box, Heading, Text, Image } from "grommet";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import AppButton from "../components/AppButon";
import { Domain, Facebook, Mail } from "grommet-icons";
import UIGrade from "../components/UIGrade";

import Page from "../app/layout/Page";
import WaveGrade from "../components/WaveGrade";
import { setDeputy } from "../features/deputies/deputiesActions";

const fakeLawCards = [...Array(10).keys()];

export default function DeputyPage() {
  let { slug } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { deputyDetails, deputies } = useSelector(({ deputies }) => deputies);
  const { groups } = useSelector(({ groups }) => groups);

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
    groupId,
    groupRole,
    email,
    facebook,
    website,
    profilePic,
    grade,
  } = deputyDetails;
  const group = deputyDetails && groups.find(({ id }) => id === groupId);

  return (
    <Page goBack justify="between" background="light-1">
      <Box fill flex direction="row">
        <Box as="aside" flex pad="small" basis="1/4">
          <Box
            height="small"
            width="auto"
            overflow="hidden"
            round="xxsmall"
            margin={{ bottom: "medium" }}
          >
            <Image fit="cover" src={profilePic} />
          </Box>
          <UIGrade grade={grade} />
          <Box border={{ color: "light-4", side: "top" }}>
            <Box fill margin={{ top: "small" }}>
              <AppButton
                icon={<Domain />}
                label="Site"
                onClick={() => {}}
                pad={{ horizontal: "small", vertical: "small" }}
              />
              <AppButton
                icon={<Facebook />}
                label="Facebook"
                onClick={() => {}}
                pad={{ horizontal: "small", vertical: "small" }}
              />
              <AppButton
                icon={<Mail />}
                label="Mail"
                onClick={() => {}}
                pad={{ horizontal: "small", vertical: "small" }}
              />
            </Box>
          </Box>

          <Box flex="grow" />
          <WaveGrade grade={grade} />
        </Box>
        <Box as="main" flex pad="small" basis="3/4">
          <Heading level={1} margin={{ bottom: "none", top: "none" }}>
            {fullName}
          </Heading>
          <Text size="xlarge" color="dark-4">
            {groupRole}
          </Text>
          <Text size="medium" color="dark-2" truncate>
            <strong>{group && group.name}</strong>
          </Text>
          <Box flex margin={{ top: "medium" }} overflow="scroll">
            {fakeLawCards.map((e) => (
              <Box margin="medium" pad="medium" elevation="small">
                Vote Card : {e}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Page>
  );
}
