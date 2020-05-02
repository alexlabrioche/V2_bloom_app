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
  const { deputies } = useSelector(({ deputies }) => deputies);
  return (
    <ResponsiveGrid gap="medium" rows={rows} columns={columns}>
      {groups.map((group) => (
        <GroupCard
          group={group}
          deputies={deputies.filter((deputy) => deputy.groupId === group.id)}
        />
      ))}
    </ResponsiveGrid>
  );
}
