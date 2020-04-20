import React from "react";
import { Box, Text, Stack, RangeSelector } from "grommet";
import { Ascend, Descend, Sort } from "grommet-icons";
import Searchbar from "../search/Searchbar";
import AppButton from "../../components/AppButon";
import useDimensions from "react-use-dimensions";

export default function SortDeputies({ ...rest }) {
  const [showSearchbar, setShowSearchbar] = React.useState(false);
  const [values, setValues] = React.useState([3, 7]);
  const [parentRef, parentDimensions] = useDimensions();
  const [childRef, childDimensions] = useDimensions();

  return (
    <Box
      height={`${childDimensions.height}px` || "large"}
      ref={parentRef}
      {...rest}
    >
      <Box
        background="background"
        style={{ zIndex: 2, position: "fixed" }}
        round="xsmall"
        elevation="large"
        width={`${parentDimensions.width}px`}
        pad="xsmall"
        ref={childRef}
        flex
      >
        <Searchbar
          open={showSearchbar}
          setOpen={setShowSearchbar}
          height="3rem"
          label="Rechercher un Député"
          placeholder="Rechercher..."
        />
        <Box border="top" margin={{ bottom: "medium" }} />
        <Box direction="row" width="100%">
          <AppButton
            icon={<Descend color="protect" />}
            label="Meilleures notes"
            onClick={() => {}}
          />
          <AppButton
            icon={<Ascend color="destruct" />}
            label="Pires notes"
            onClick={() => {}}
          />
          <AppButton
            icon={<Sort color="accent-3" />}
            label="Alphabétique"
            onClick={() => {}}
          />
          <Box flex="grow" />

          <Stack>
            <Box direction="row" justify="between">
              {[12, 13, 14, 15, 16, 17, 18, 19, 20].map((value) => (
                <Box
                  key={value}
                  pad={{ horizontal: "xsmall", vertical: "small" }}
                  border={false}
                >
                  <Text style={{ fontFamily: "monospace" }}>{value}</Text>
                </Box>
              ))}
            </Box>
            <RangeSelector
              direction="horizontal"
              invert={false}
              min={0}
              max={9}
              round="xsmall"
              opacity="weak"
              values={values}
              onChange={(values) => setValues(values)}
            />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
