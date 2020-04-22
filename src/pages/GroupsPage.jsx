import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Page from "../app/layout/Page";
import GroupsGrid from "../features/groups/GroupsGrid";
import { setExpandedCard } from "../features/deputies/deputiesActions";

export default function GroupsPage() {
  const { groups } = useSelector(({ groups }) => groups);
  const { deputies, expandedCard } = useSelector(({ deputies }) => deputies);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (expandedCard) {
      dispatch(setExpandedCard(false));
    }
  }, []);

  return (
    <Page background="transparent" margin="small" elevation="none">
      <GroupsGrid deputies={deputies} groups={groups} />
    </Page>
  );
}
