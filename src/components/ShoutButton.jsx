import React from "react";
import { Button, Text } from "grommet";
import getColorFromGrade from "../app/utils/getColorFromGrade";
import { Twitter } from "grommet-icons";

const setShoutAction = (grade) => {
  let action;
  if (grade <= 10) {
    action = "Blamer";
  } else if (grade <= 15) {
    action = "Encourager";
  } else if (grade <= 20) {
    action = "Féliciter";
  }
  return action;
};

export default function ShoutButton({ grade, ...rest }) {
  const action = setShoutAction(grade);
  return (
    <Button
      icon={<Twitter color="white" />}
      label={
        <Text color="white" size="large">
          {action} ce député sur Twitter
        </Text>
      }
      primary
      color={getColorFromGrade(grade)}
      {...rest}
    />
  );
}
