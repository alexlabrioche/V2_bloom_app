import React from "react";
import { useSelector } from "react-redux";
import { Box } from "grommet";

import SortDeputies from "../features/sort/Sort";
import DeputyCard from "../components/DeputyCard";
import ResponsiveGrid from "../components/ResponsiveGrid";

export default function DeputiesPage() {
  const { deputies, groups } = useSelector(({ localData }) => localData);

  return (
    <>
      <SortDeputies margin={{ bottom: "large" }} />
      <ResponsiveGrid gap="small" columns="small" rows="small">
        {deputies.map((deputy) => (
          <DeputyCard
            deputy={deputy}
            group={groups.find(({ id }) => id === deputy.groupId)}
            key={deputy.id}
            full
          />
        ))}
      </ResponsiveGrid>
    </>
  );
}
