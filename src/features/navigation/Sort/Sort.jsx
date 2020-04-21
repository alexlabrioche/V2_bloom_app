import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Text, Stack, RangeSelector } from "grommet";
import { Ascend, Descend, Sort } from "grommet-icons";

import Searchbar from "../../search/Searchbar";
import AppButton from "../../../components/AppButon";
import {
  sortByGrade,
  sortAlphabetically,
  filterDeputiesByGrade,
} from "../../localData/localDataActions";

export default function Sortbar({ ...rest }) {
  const { alphaOrder, rangeValues } = useSelector(({ localData }) => localData);
  const [showSearchbar, setShowSearchbar] = React.useState(false);
  const dispatch = useDispatch();

  return (
    <Box
      style={{ zIndex: 2 }}
      elevation="medium"
      pad="xsmall"
      width="full"
      {...rest}
    >
      <Searchbar
        open={showSearchbar}
        setOpen={setShowSearchbar}
        height="xxsmall"
        label="Rechercher un Député"
        placeholder="Rechercher..."
      />
      <Box border="top" margin="xsmall" />
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
          label={alphaOrder === "asc" ? "Z-A" : "A-Z"}
          onClick={() => dispatch(sortAlphabetically())}
        />
        <Box flex="grow" />
        <Stack flex alignSelf="center" margin="xsmall">
          <Box height="100%" direction="row" justify="between">
            {rangeValues.scale.map(({ grade }) => (
              <Box
                border={false}
                key={grade}
                pad="small"
                flex
                justify="center"
                align="center"
              >
                <Text style={{ fontFamily: "monospace" }}>
                  <strong>{grade}</strong>
                </Text>
              </Box>
            ))}
          </Box>

          <RangeSelector
            direction="horizontal"
            invert={false}
            min={rangeValues.scale[0].value}
            max={rangeValues.scale.length}
            round="xsmall"
            color="accent-1"
            opacity="weak"
            values={rangeValues.values}
            onChange={(newValues) => dispatch(filterDeputiesByGrade(newValues))}
          />
        </Stack>
      </Box>
    </Box>
  );
}
