import React from "react";
import { Box, Button } from "grommet";
import { Previous } from "grommet-icons";
import { useHistory } from "react-router-dom";

export default function BackButton() {
  const history = useHistory();
  return (
    <Button
      onClick={() => history.goBack()}
      icon={<Previous color="accent-1" />}
      label="Retour"
      fill={false}
      plain
    />
  );
}
