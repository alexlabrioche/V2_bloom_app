import React from "react";
import { Footer, Text, Anchor } from "grommet";

export default function FooterCmp({ ...rest }) {
  return (
    <Footer flex="grow" justify="end" align="end">
      <Text size="small">
        &copy;{" "}
        <Anchor
          href="https://www.bloomassociation.org/"
          color="brand"
          label="bloomassociation.org"
          size="small"
        />
      </Text>
    </Footer>
  );
}
