import React, { useEffect } from "react";
import { Box, Heading, Text, Button } from "grommet";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDeputy } from "../features/deputies/deputiesActions";
import { isEmpty } from "lodash";

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
    party,
    email,
    profilePic,
  } = deputy;
  return <Box>{fullName}</Box>;
}
