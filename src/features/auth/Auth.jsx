import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import { logout } from "./authActions";
import { Button, Box } from "grommet";

const Login = () => {
  const { auth } = useSelector(({ firebase }) => firebase);
  const dispatch = useDispatch();

  return auth.isLoaded && auth.isEmpty ? (
    <LoginForm />
  ) : (
    <Button
      onClick={() => dispatch(logout())}
      label={`Déconnecter ${auth.email}`}
    />
  );
};

export default Login;
