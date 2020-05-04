import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  Button,
  TableHeader,
  TableRow,
  TextInput,
  Form,
  FormField,
} from "grommet";
import { useForm, Controller } from "react-hook-form";

import { editTwitterDeputies } from "./deputiesActions";

export default function EditDeputies({ close }) {
  const { french } = useSelector(({ deputies }) => deputies);
  const { loading } = useSelector(({ async }) => async);
  const { control, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (deputies) => {
    dispatch(editTwitterDeputies(deputies));
    !loading && close();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell size="1/4" scope="col" border="bottom">
              <strong>Nom</strong>
            </TableCell>
            <TableCell size="3/4" scope="col" border="bottom">
              <strong>Twitter</strong>
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.keys(french)
            .map((i) => french[i])
            .map((deputy) => (
              <TableRow key={deputy.id}>
                <TableCell scope="row">{deputy.fullName}</TableCell>
                <TableCell>
                  <FormField name={deputy.fullName}>
                    <Controller
                      as={<TextInput />}
                      name={`${deputy.id}`}
                      control={control}
                      defaultValue={deputy.twitter || ""}
                    />
                  </FormField>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <Button
        alignSelf="end"
        margin={{ vertical: "medium" }}
        type="submit"
        primary
        color="protect"
        label="Valider les changements"
      />
    </Form>
  );
}
