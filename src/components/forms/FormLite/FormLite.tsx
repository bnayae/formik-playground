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
import { IExternalFormProps } from "./FormLite.Props";
import timeout from "../../Helper";
import { InnerForm } from "./FormLite.InterForm";
import schema from "./FormLite.Schema";

// Wrap our form with the using withFormik HoC
const FormLite = withFormik<IExternalFormProps, IFormState>({
  // Transform outer props into form values
  mapPropsToValues: (props: IExternalFormProps) => {
    var state = new FormState();
    state.email = props.email || "";
    return state;
  },

  validationSchema: schema,
  handleSubmit: async (
    values: IFormState, // values parameters
    actions: FormikActions<IFormState> // actions
  ) => {
    // Handle submit action
    await timeout(1000);
    console.log({ values, actions });
    //alert(values.lastName);
    actions.setSubmitting(false);
  }
})(InnerForm);

export default FormLite;
