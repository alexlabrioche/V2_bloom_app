import React from "react";
import { useSelector } from "react-redux";
import DeputyCard from "../components/DeputyCard";
import ResponsiveGrid from "../components/ResponsiveGrid";
import Page from "../app/layout/Page";

export default function DeputiesPage() {
  const { deputies, groups, rangeValues } = useSelector(
    ({ localData }) => localData
  );

  return (
    <Page background="transparent" margin="none" elevation="none">
      <ResponsiveGrid gap="small" columns="small" rows="small">
        {deputies
          .filter(
            ({ grade }) =>
              grade >= rangeValues.minGrade && grade <= rangeValues.maxGrade
          )
          .map((deputy) => (
            <DeputyCard
              deputy={deputy}
              group={groups.find(({ id }) => id === deputy.groupId)}
              key={deputy.id}
              full
            />
          ))}
      </ResponsiveGrid>
    </Page>
  );
}
