import React, { useEffect } from "react";
import { Box, Heading, Text, Image, Button } from "grommet";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import AppButton from "../components/AppButon";
import { Domain, Facebook, Mail } from "grommet-icons";
import UIGrade from "../components/UIGrade";

import Page from "../app/layout/Page";
import ShoutButton from "../components/ShoutButton";
import Avatar from "../components/Avatar";
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

  function openInNewTab(url) {
    const win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <Page paper goBack title={fullName}>
      <Box
        flex="shrink"
        as="header"
        margin={{ bottom: "medium" }}
        pad={{ bottom: "small" }}
        border={{ color: "light-4", side: "bottom" }}
      >
        <Box direction="row" justify="between">
          <Box direction="row">
            <Avatar
              picture={profilePic}
              size="xsmall"
              margin={{ right: "small" }}
            />
            <Box>
              <Heading level={1} margin="none" truncate>
                {fullName}
              </Heading>
              <Text size="small" color="dark-4">
                <strong>{groupRole}</strong>
              </Text>
              <Text size="large" color="dark-2" truncate>
                {group && group.name}
              </Text>
            </Box>
          </Box>
          <UIGrade grade={grade} alignSelf="start" />
        </Box>
        <Box direction="row" align="center" margin={{ vertical: "medium" }}>
          {email && (
            <AppButton
              icon={<Mail />}
              label="Email"
              onClick={() => alert(email)}
              pad={{ horizontal: "small", vertical: "small" }}
            />
          )}
          {website && (
            <AppButton
              icon={<Domain />}
              label="Site"
              onClick={() => openInNewTab(website)}
              pad={{ horizontal: "small", vertical: "small" }}
            />
          )}
          {facebook && (
            <AppButton
              icon={<Facebook />}
              label="Facebook"
              onClick={() => openInNewTab(facebook)}
              pad={{ horizontal: "small", vertical: "small" }}
            />
          )}
          <Box flex="grow" />
          <ShoutButton grade={grade} />
        </Box>
      </Box>
      <Box as="main" flex pad={{ horizontal: "medium" }}>
        <Box as="article" flex overflow="scroll">
          {fakeLawCards.map((e) => (
            <Box margin="medium" pad="medium" elevation="small">
              Fake Vote Card : {e}
            </Box>
          ))}
        </Box>
      </Box>
    </Page>
  );
}
