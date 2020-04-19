import React from "react";
import { useSelector } from "react-redux";

import DeputyCard from "../components/DeputyCard";
import ResponsiveGrid from "../components/ResponsiveGrid";

export default function DeputiesPage() {
  const { deputies, groups } = useSelector(({ localData }) => localData);

  return (
    <ResponsiveGrid gap="medium" margin="medium" columns="medium" rows="xsmall">
      {deputies.map((deputy) => (
        <DeputyCard
          deputy={deputy}
          group={groups.find(({ id }) => id === deputy.groupId)}
          key={deputy.id}
          full
        />
      ))}
    </ResponsiveGrid>
  );
}
