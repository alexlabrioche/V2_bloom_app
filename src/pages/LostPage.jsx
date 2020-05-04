import React from "react";
import { Heading, Button, Box } from "grommet";
import { useHistory } from "react-router-dom";
import Page from "../app/layout/Page";

export default function LostPage() {
  const history = useHistory();
  return (
    <Page paper title="Accueil">
      <Box flex direction="column" justify="between">
        <Heading>Oups... On s'est perdu ?</Heading>
        <Button
          primary
          onClick={() => history.push("/")}
          label="Retour à l'accueil"
          color="tertiary"
        />
      </Box>
    </Page>
  );
}
