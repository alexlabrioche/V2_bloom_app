import React from "react";
import { FormField, Form, TextInput, Text, Button } from "grommet";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "./authActions";

export default function LoginForm() {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (user) => {
    dispatch(login(user));
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormField name="email" label="Email">
        <TextInput
          name="email"
          type="email"
          value="alexbakerdeveloper@gmail.com"
          ref={register({ required: true })}
        />
        {errors.username && (
          <Text color="destruct" size="small">
            Ce champs est requis
          </Text>
        )}
      </FormField>
      <FormField name="password" label="Mot de passe">
        <TextInput
          name="password"
          type="password"
          value="Bloom1234"
          ref={register({ required: true })}
        />
        {errors.password && (
          <Text color="destruct" size="small">
            Ce champs est requis
          </Text>
        )}
      </FormField>
      <Button
        margin={{ top: "small" }}
        type="submit"
        primary
        label="Se connecter"
      />
    </Form>
  );
}
