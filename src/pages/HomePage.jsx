import React from "react";
import {
  Heading,
  Paragraph,
  Box,
  Button,
  Text,
  ResponsiveContext,
} from "grommet";
import { useHistory } from "react-router-dom";

import Page from "../app/layout/Page";

export default function HomePage() {
  const history = useHistory();
  const size = React.useContext(ResponsiveContext);
  const isMobile = size === "small";
  return (
    <Page>
      <Box>
        <Box background="destruct" pad="medium" justify="center" align="center">
          <Heading color="white">ATTENTION</Heading>
          <Text color="white">
            <strong>App en construction : </strong>les notes sont générées
            aléatoirement et ne reflètent en AUCUN cas la réalité.
          </Text>
        </Box>
        <Heading level={1} size="large" textAlign="center" color="brand">
          Bloom Notation
        </Heading>
        <Paragraph fill margin={{ horizontal: size }}>
          <strong>Intro texte</strong> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Accusamus alias hic velit eaque, numquam saepe
          architecto fugit, iusto vero quaerat ullam, facilis quam tempore
          magnam molestiae consequuntur sit soluta nam. Intro texte Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Accusamus alias hic velit
          eaque, numquam saepe architecto fugit, iusto vero quaerat ullam,
          facilis quam tempore magnam molestiae consequuntur sit soluta nam.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          alias corporis, ea corrupti quia provident ut? Facere, a laboriosam
          quidem maiores ducimus voluptatibus sit tempore explicabo ad hic,
          tenetur rem.
        </Paragraph>
      </Box>

      <Box
        margin={{
          top: isMobile ? "none" : "xlarge",
          bottom: isMobile ? "medium" : "none",
        }}
        direction="row"
        justify={isMobile ? "center" : "start"}
      >
        <Button
          label="Voir les Groupes Européens"
          color="accent-1"
          primary
          onClick={() => history.push("/groupes")}
          margin={{ right: "small" }}
        />
        <Button
          onClick={() => history.push("/methode")}
          color="accent-1"
          label="En savoir plus sur la méthode"
        />
      </Box>
    </Page>
  );
}
