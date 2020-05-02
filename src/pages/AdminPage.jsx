import React from "react";
import { useSelector } from "react-redux";
import Auth from "../features/auth/Auth";
import Page from "../app/layout/Page";

export default function AdminPage() {
  const { auth } = useSelector(({ firebase }) => firebase);

  return (
    <Page paper title="Admin">
      <Auth />
      <div>{/* <h1>{auth.email}</h1> */}</div>
    </Page>
  );
}
