import React from "react";
import { Heading, Paragraph, Box, Button, Text } from "grommet";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Page from "../app/layout/Page";
import useResponsive from "../app/hooks/useResponsive";

export default function HomePage() {
  const history = useHistory();
  const { isMobile, size } = useResponsive();
  const { frenchCount, allCount } = useSelector(({ deputies }) => deputies);
  return (
    <Page paper title="Accueil">
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
        <strong>
          Actuellement {allCount} députés au parlement Européen dont{" "}
          {frenchCount} députés Français.
        </strong>
        <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Accusamus alias hic velit eaque, numquam saepe architecto fugit, iusto
        vero quaerat ullam, facilis quam tempore magnam molestiae consequuntur
        sit soluta nam.
      </Paragraph>

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
