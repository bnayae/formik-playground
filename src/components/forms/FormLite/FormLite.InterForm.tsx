import * as React from "react";
import {
  Formik,
  FormikActions,
  FormikProps,
  Form,
  Field,
  FieldProps,
  withFormik
} from "formik";
import FormState, { IFormState } from "./FormLite.State";
import { IFormProps, IExternalFormProps } from "./FormLite.Props";
import timeout from "../../Helper";

// Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
export const InnerForm = (props: IFormProps & FormikProps<IFormState>) => {
  const { touched, errors, isSubmitting, title } = props;
  return (
    <Form>
      <h1>{title}</h1>
      <div>
        <Field type="text" name="firstName" placeholder="First Name" />
        {touched.firstName && errors.firstName && errors.firstName}
      </div>{" "}
      <div>
        <Field type="text" name="lastName" placeholder="Last Name" />
        {touched.lastName && errors.lastName && errors.lastName}
      </div>{" "}
      <div>
        <Field type="email" name="email" placeholder="Email" />
        {touched.email && errors.email && errors.email}
      </div>
      <div>
        <Field name="day" component="input" type="date" />
        {touched.day && errors.day && errors.day}
      </div>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};
