import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Box } from "grommet";
import { logout } from "../features/auth/authActions";
import Page from "../app/layout/Page";
import LoginForm from "../features/auth/LoginForm";
import { Logout } from "grommet-icons";
import EditDeputies from "../features/deputies/EditDeputies";

export default function AdminPage() {
  const [editDeputies, setEditDeputies] = React.useState(false);
  const dispatch = useDispatch();
  const { auth } = useSelector(({ firebase }) => firebase);

  return (
    <Page paper title="Admin">
      {auth.isLoaded && auth.isEmpty ? (
        <LoginForm />
      ) : (
        <Box flex="grow">
          <Box as="header" margin={{ vertical: "large" }} direction="row">
            <Button
              label="Modifier les députés"
              onClick={() => setEditDeputies((s) => !s)}
              disabled={editDeputies}
              margin={{ right: "small" }}
              primary
            />
            <Button label="Ajouter un Texte de loi" />
            <Box flex="grow" />
            <Button
              onClick={() => dispatch(logout())}
              icon={<Logout />}
              label="Se déconnecter"
              color="destruct"
            />
          </Box>
          {editDeputies && (
            <EditDeputies close={() => setEditDeputies(false)} />
          )}
        </Box>
      )}
    </Page>
  );
}
