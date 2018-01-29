import React from 'react'
import { Field, reduxForm, InjectedFormProps, SubmitHandler } from 'redux-form'

export type FormData = {
    firstName: string;
    lastName: string;
    email: string;
};

export type ContactFormProps = InjectedFormProps<FormData> & {
  onSubmit?: SubmitHandler<FormData, ContactFormProps>;
}

export class ContactFormPresentation extends React.PureComponent<ContactFormProps> {
  public render(): JSX.Element {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export const ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactFormPresentation)
