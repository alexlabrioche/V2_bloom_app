import React, { useEffect } from "react";
import { Box, Heading } from "grommet";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import DeputyCard from "../components/DeputyCard";
import ResponsiveGrid from "../components/ResponsiveGrid";

import { setGroup } from "../features/deputies/deputiesActions";

export default function GroupPage() {
  let { slug } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { group, groupLoaded } = useSelector(({ deputies }) => deputies);

  useEffect(() => {
    dispatch(setGroup(slug));
  }, [dispatch, slug]);

  useEffect(() => {
    if (groupLoaded && group.deputies.length === 0) {
      history.push("/");
    }
  }, [dispatch, history, group, groupLoaded]);

  return (
    <div>
      <Heading level={1} color="accent-1">
        {group.infos.name}
      </Heading>

      <Box border="top" margin={{ top: "xlarge" }}>
        <Heading level={4}>Députés lié à ce groupe :</Heading>
        <ResponsiveGrid
          gap="medium"
          margin="medium"
          columns="medium"
          rows="xsmall"
        >
          {group.deputies.map((deputy, index) => (
            <DeputyCard deputy={deputy} key={index} isInGroup={true} />
          ))}
        </ResponsiveGrid>
      </Box>
    </div>
  );
}
