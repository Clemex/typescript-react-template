//https://redux-form.com/6.7.0/examples/material-ui/

import React from 'react';
import {Field, reduxForm, WrappedFieldProps, BaseFieldProps} from 'redux-form';
import {menuItem as MenuItem, renderCheckbox, renderRadioGroup, renderSelectField, renderTextField } from './MaterialUIWrapper';
import Radio, { RadioGroup} from 'material-ui/Radio';
import Select from 'material-ui/Select/Select';
import SelectField from 'material-ui/Select';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values: any) => {
  return sleep(1000).then(() => {
    // simulate server latency
    if (['foo@foo.com', 'bar@bar.com'].includes(values.email)) {
      throw {email: 'Email already Exists'}
    }
  })
}

const validate = values => {
  const errors = {}
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'favoriteColor',
    'notes'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors['email'] = 'Invalid email address'
  }
  return errors
}

type TextInputProps = {
  label: string,
  className?: string
} & WrappedFieldProps

const TextInput = ({ className, input, label, meta: { touched, error, warning }, ...otherProps }) => {
  return (
      <label className={className} {...otherProps}>
          {label}
          <input {...input} placeholder={label} type="text" />
          {touched && ((error && <div>{error}</div>) || (warning && <div>{warning}</div>))}
      </label>
  )
}

const MaterialUiForm = props => {
  const {handleSubmit, pristine, reset, submitting} = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="firstName"
          component={renderTextField}
          label="First Name"
        />
      </div>
      <div>
        <Field name="lastName" component={renderTextField} label="Last Name" />
      </div>
      <div>
        <Field name="email" component={renderTextField} label="Email" />
      </div>
      <div>
        <Field name="sex" component={renderRadioGroup}>
          <Radio value="male" title="male" />
          <Radio value="female" title="female" />
        </Field>
      </div>
      <div>
        <SelectField floatingLabelText="Color" name="Color" value="ff0000">
          <MenuItem value="ff0000" primaryText="Red" open={true}/>
          <MenuItem value="00ff00" primaryText="Green" open={true}/>
          <MenuItem value="0000ff" primaryText="Blue" open={true}/>
        </SelectField>
      </div>
      <div>
        <Field name="employed" component={renderCheckbox} title="Employed" />
      </div>
      <div>
        <Field
          name="notes"
          component={renderTextField}
          label="Notes"
          rows={2}
        />
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'form', // a unique identifier for this form
  validate,
  asyncValidate
})(MaterialUiForm)