import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Text, Stack, RangeSelector } from "grommet";
import { Ascend, Descend, Sort } from "grommet-icons";
import useDimensions from "react-use-dimensions";

import Searchbar from "../search/Searchbar";
import AppButton from "../../components/AppButon";
import { sortByGrade, sortAlphabetically } from "../localData/localDataActions";

function generateGradesArray({ min, max }) {
  let ret = [max];
  let tempVal = max;
  do {
    tempVal -= 2;
    ret.unshift(tempVal);
  } while (tempVal > min);
  return ret;
}

export default function SortDeputies({ ...rest }) {
  const { alphaOrder, gradesValues } = useSelector(
    ({ localData }) => localData
  );
  const [showSearchbar, setShowSearchbar] = React.useState(false);
  const [values, setValues] = React.useState([0, gradesValues.length - 1]);
  const [parentRef, parentDimensions] = useDimensions();
  const [childRef, childDimensions] = useDimensions();
  const dispatch = useDispatch();

  console.log("values", {
    gradesValues,
    values,
    min: gradesValues[values[0]],
    max: gradesValues[values[1]],
  });
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
            icon={<Ascend color="protect" />}
            label="Meilleures notes"
            onClick={() => dispatch(sortByGrade("desc"))}
          />
          <AppButton
            icon={<Descend color="destruct" />}
            label="Pires notes"
            onClick={() => dispatch(sortByGrade("asc"))}
          />
          <AppButton
            icon={<Sort color="accent-3" />}
            label={alphaOrder === "asc" ? "A-Z" : "Z-A"}
            onClick={() => dispatch(sortAlphabetically())}
          />
          <Box flex="grow" />

          <Stack>
            <Box direction="row" justify="between">
              {gradesValues.map((value) => (
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
              max={gradesValues.length - 1}
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
