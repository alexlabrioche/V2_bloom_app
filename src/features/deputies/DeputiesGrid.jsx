import React from "react";

import ResponsiveGrid from "../../components/ResponsiveGrid";
import DeputyCard from "../../components/Card";
import { useSelector } from "react-redux";

const columns = (expanded) => ({
  small: ["flex", "flex"],
  medium: Array.from(Array(expanded ? 2 : 3).fill("flex")),
  large: Array.from(Array(expanded ? 3 : 4).fill("flex")),
  xlarge: Array.from(Array(expanded ? 4 : 5).fill("flex")),
});

const rows = {
  small: ["none", "none", "none"],
  medium: ["none", "none"],
  large: ["none"],
  xlarge: ["none"],
};

export default function DeputiesGrid({ deputies, groups }) {
  const { expandedCard } = useSelector(({ deputies }) => deputies);

  return (
    <ResponsiveGrid
      gap={expandedCard ? "medium" : "small"}
      rows={rows}
      columns={columns(expandedCard)}
    >
      {deputies.map((deputy) => (
        <DeputyCard
          deputy={deputy}
          group={groups ? groups.find(({ id }) => id === deputy.groupId) : null}
          key={deputy.id}
          full
        />
      ))}
    </ResponsiveGrid>
  );
}
