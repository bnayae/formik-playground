import * as React from "react";
import {
  Formik,
  FormikActions,
  FormikProps,
  Form,
  Field,
  FieldProps
} from "formik";
import { type } from "os";
import * as Yup from "yup";
import timeout from "../Helper";

class FormState {
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  date: Date = new Date();
}

// https://github.com/jquense/yup
const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  date: Yup.date()
    .required()
    .min(new Date())
});

export const FormVerbal: React.FunctionComponent<{}> = () => {
  return (
    <div>
      <h1>My Example</h1>
      <Formik
        initialValues={new FormState()}
        validationSchema={schema}
        onSubmit={async (
          values: FormState, // values parameters
          actions: FormikActions<FormState> // actions
        ) => {
          // Handle submit action
          await timeout(1000);
          console.log({ values, actions });
          //alert(values.lastName);
          actions.setSubmitting(false);
        }}
        render={(formikBag: FormikProps<FormState>) => (
          <Form>
            {}
            <Field
              name="firstName"
              render={({ field, form }: FieldProps<FormState>) => (
                <div>
                  <input type="text" {...field} placeholder="First Name" />
                  {form.touched.firstName && form.errors.firstName
                    ? form.errors.firstName
                    : null}
                </div>
              )}
            />
            <Field
              name="lastName"
              render={({ field, form }: FieldProps<FormState>) => (
                <div>
                  <input type="text" {...field} placeholder="Last Name" />
                  {form.touched.lastName && form.errors.lastName
                    ? form.errors.lastName
                    : null}
                </div>
              )}
            />
            <Field
              name="email"
              render={({ field, form }: FieldProps<FormState>) => (
                <div>
                  <input type="text" {...field} placeholder="Email" />
                  {form.touched.email && form.errors.email
                    ? form.errors.email
                    : null}
                </div>
              )}
            />
            <div>
              <Field name="date" component="input" type="date" />
              {formikBag.touched.date &&
                formikBag.errors.date &&
                formikBag.errors.date}
            </div>
            <button type="submit" disabled={formikBag.isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      />
    </div>
  );
};
