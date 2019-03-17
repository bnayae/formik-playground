export interface IFormState {
  firstName: string;
  lastName: string;
  email: string;
  day: Date;
}

class FormState implements IFormState {
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  day: Date = new Date();
}

export default FormState;
