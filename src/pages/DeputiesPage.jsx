import React from "react";
import { useSelector } from "react-redux";
import { Box } from "grommet";

import Searchbar from "../features/navigation/Search/Search";
import SortDeputies from "../features/SortDeputies/SortDeputies";
import DeputyCard from "../components/DeputyCard";
import ResponsiveGrid from "../components/ResponsiveGrid";

export default function DeputiesPage() {
  const { deputies, groups } = useSelector(({ localData }) => localData);
  const [showSearchbar, setShowSearchbar] = React.useState(false);

  return (
    <>
      <SortDeputies />
      {/* <Searchbar open={showSearchbar} setOpen={setShowSearchbar} /> */}
      <ResponsiveGrid
        gap="medium"
        margin="medium"
        columns="medium"
        rows="xsmall"
      >
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
