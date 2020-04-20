import React, { useEffect } from "react";
import { Box, Heading } from "grommet";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";

import DeputyCard from "../components/DeputyCard";
import ResponsiveGrid from "../components/ResponsiveGrid";

import { setGroup } from "../features/localData/localDataActions";

export default function GroupPage() {
  let { slug } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { groupDetails, groups } = useSelector(({ localData }) => localData);

  useEffect(() => {
    dispatch(setGroup(slug));
  });

  useEffect(() => {
    const group = groups.find((group) => group.slug === slug);
    if (isEmpty(group)) {
      history.push("/");
    }
  }, [history, groups, slug]);

  return (
    <div>
      <Heading level={1} color="accent-1">
        {groupDetails.name}
      </Heading>

      <Box border="top" margin={{ top: "xlarge" }}>
        <Heading level={4}>Députés lié à ce groupe :</Heading>
        <ResponsiveGrid
          gap="medium"
          margin="medium"
          columns="medium"
          rows="xsmall"
        >
          {!isEmpty(groupDetails) &&
            groupDetails.deputies.map((deputy, index) => (
              <DeputyCard deputy={deputy} key={index} />
            ))}
        </ResponsiveGrid>
      </Box>
    </div>
  );
}
