import React from "react";
import { Heading, Paragraph, ResponsiveContext } from "grommet";

import Link from "../components/Link";
import DeputyCard from "../components/DeputyCard";
import ResponsiveGrid from "../components/ResponsiveGrid";
import { useSelector } from "react-redux";

export default function HomePage() {
  const { deputies, groups } = useSelector(({ localData }) => localData);
  return (
    <div>
      <Heading level={1} textAlign="center" size="large">
        Intro Titre{" "}
      </Heading>
      <Paragraph fill>
        Intro texte Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Accusamus alias hic velit eaque, numquam saepe architecto fugit, iusto
        vero quaerat ullam, facilis quam tempore magnam molestiae consequuntur
        sit soluta nam. Intro texte Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Accusamus alias hic velit eaque, numquam saepe
        architecto fugit, iusto vero quaerat ullam, facilis quam tempore magnam
        molestiae consequuntur sit soluta nam.
        <br />
        <Link to="/methode" color="accent-1">
          En savoir plus sur notre méthode
        </Link>
      </Paragraph>

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
    </div>
  );
}
