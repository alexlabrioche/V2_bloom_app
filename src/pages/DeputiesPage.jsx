import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Page from "../app/layout/Page";
import DeputiesGrid from "../features/deputies/DeputiesGrid";
import {
  getFrenchDeputies,
  setExpandedCard,
} from "../features/deputies/deputiesActions";

export default function DeputiesPage() {
  const { deputies, expandedCard } = useSelector(({ deputies }) => deputies);
  const { groups } = useSelector(({ groups }) => groups);
  const dispatch = useDispatch();

  React.useEffect(() => {
    deputies.length === 0 && dispatch(getFrenchDeputies());
  }, []);

  React.useEffect(() => {
    if (!expandedCard) {
      dispatch(setExpandedCard(true));
    }
  }, []);

  return (
    <Page transparent title="Euro-Députés">
      <DeputiesGrid deputies={deputies} groups={groups} />
    </Page>
  );
}
