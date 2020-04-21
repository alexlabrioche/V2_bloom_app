import React from "react";
import { Footer, Text, Anchor } from "grommet";

export default function FooterCmp({ ...rest }) {
  return (
    <Footer {...rest} flex="shrink" alignContent="center">
      <Text size="small">
        &copy;{" "}
        <Anchor
          href="https://www.bloomassociation.org/"
          color="accent-1"
          label="bloomassociation.org"
          size="small"
        />
      </Text>
    </Footer>
  );
}
