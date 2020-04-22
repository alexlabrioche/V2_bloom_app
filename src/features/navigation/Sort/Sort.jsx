import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, ResponsiveContext } from "grommet";
import {
  Ascend,
  Descend,
  Sort,
  SubtractCircle,
  AddCircle,
} from "grommet-icons";

import Searchbar from "../../search/Searchbar";
import AppButton from "../../../components/AppButon";
import {
  sortByGrade,
  sortAlphabetically,
  setExpandedCard,
} from "../../deputies/deputiesActions";

export default function Sortbar({ ...rest }) {
  const { alphaOrder, gradeOrder, expandedCard } = useSelector(
    ({ deputies }) => deputies
  );
  const dispatch = useDispatch();
  const size = React.useContext(ResponsiveContext);
  const isMobile = size === "small";

  return (
    <Box style={{ zIndex: 20 }} width="auto" {...rest}>
      <Box
        elevation="xlarge"
        margin={{ top: "small", horizontal: "small" }}
        background="white"
        round="xxsmall"
      >
        <Searchbar
          height="xxsmall"
          label="Rechercher un Député"
          placeholder="Rechercher..."
        />
        <Box
          border={{
            color: "light-4",
            side: "top",
          }}
          flex
          direction="row"
          justify="between"
        >
          <Box flex direction="row">
            <AppButton
              icon={
                gradeOrder === "asc" ? (
                  <Descend color="protect" />
                ) : (
                  <Ascend color="destruct" />
                )
              }
              label={
                isMobile
                  ? false
                  : gradeOrder === "asc"
                  ? "Meilleures notes"
                  : "Pires notes"
              }
              onClick={() => dispatch(sortByGrade())}
            />

            <AppButton
              icon={<Sort color="accent-3" />}
              label={isMobile ? false : alphaOrder === "asc" ? "Z-A" : "A-Z"}
              onClick={() => dispatch(sortAlphabetically())}
            />
            <AppButton
              icon={
                expandedCard ? (
                  <SubtractCircle color="accent-1" />
                ) : (
                  <AddCircle color="accent-1" />
                )
              }
              label={
                isMobile
                  ? false
                  : expandedCard
                  ? "Réduire les cartes"
                  : "Agrandir les cartes"
              }
              onClick={() => dispatch(setExpandedCard(!expandedCard))}
            />
          </Box>
          <Box flex="grow" />
        </Box>
      </Box>
    </Box>
  );
}
