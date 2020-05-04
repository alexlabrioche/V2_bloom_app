import React from "react";

import GroupCard from "../../components/GroupCard";
import ResponsiveGrid from "../../components/ResponsiveGrid";
import { useSelector } from "react-redux";

const columns = {
  small: ["auto"],
  medium: ["auto"],
  large: ["auto"],
  xlarge: ["auto"],
};

const rows = {
  small: ["none"],
  medium: ["none"],
  large: ["none"],
  xlarge: ["none"],
};

export default function GroupsGrid() {
  const { groups } = useSelector(({ groups }) => groups);
  const { french } = useSelector(({ deputies }) => deputies);

  const filterRelatedDeputies = (deputies, groupId) => {
    return deputies.filter(
      (deputy) => deputy.groups[deputy.groups.length - 1].groupid === groupId
    );
  };

  return (
    <ResponsiveGrid gap="medium" rows={rows} columns={columns}>
      {groups.map((group) => {
        const relatedDeputies = filterRelatedDeputies(
          Object.keys(french).map((i) => french[i]),
          group.id
        );
        return (
          relatedDeputies.length > 0 && (
            <GroupCard
              key={group.id}
              group={group}
              deputies={relatedDeputies}
            />
          )
        );
      })}
    </ResponsiveGrid>
  );
}
