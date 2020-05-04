import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Page from "../app/layout/Page";
import GroupsGrid from "../features/groups/GroupsGrid";
import { setExpandedCard } from "../features/deputies/deputiesActions";

export default function GroupsPage() {
  const { expandedCard } = useSelector(({ deputies }) => deputies);
  const dispatch = useDispatch();

  React.useEffect(() => {
    expandedCard && dispatch(setExpandedCard(false));
  }, []);

  return (
    <Page transparent title="Groupes Européen">
      <GroupsGrid />
    </Page>
  );
}
