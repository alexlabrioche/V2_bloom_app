import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Page from "../app/layout/Page";
import GroupsGrid from "../features/groups/GroupsGrid";
import {
  setExpandedCard,
  getFrenchDeputies,
} from "../features/deputies/deputiesActions";
import { getGroups } from "../features/groups/groupsActions";

export default function GroupsPage() {
  const { groups } = useSelector(({ groups }) => groups);
  const { deputies, expandedCard } = useSelector(({ deputies }) => deputies);
  const dispatch = useDispatch();

  console.log("groups", groups);

  React.useEffect(() => {
    expandedCard && dispatch(setExpandedCard(false));
  }, []);

  React.useEffect(() => {
    groups.length === 0 && dispatch(getGroups());
    deputies.length === 0 && dispatch(getFrenchDeputies());
  }, []);

  return (
    <Page transparent title="Groupes Européen">
      <GroupsGrid deputies={deputies} groups={groups} />
    </Page>
  );
}
