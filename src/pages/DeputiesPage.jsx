import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Page from "../app/layout/Page";
import DeputiesGrid from "../features/deputies/DeputiesGrid";
import { setExpandedCard } from "../features/deputies/deputiesActions";

export default function DeputiesPage() {
  const { french, expandedCard } = useSelector(({ deputies }) => deputies);
  const { groups } = useSelector(({ groups }) => groups);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!expandedCard) {
      dispatch(setExpandedCard(true));
    }
  }, []);

  return (
    <Page transparent title="Euro-Députés">
      <DeputiesGrid
        deputies={Object.keys(french).map((i) => french[i])}
        groups={groups}
      />
    </Page>
  );
}
