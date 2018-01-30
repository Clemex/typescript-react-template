import React from 'react';
import TextField, { TextFieldProps } from 'material-ui/TextField';
import Radio, { RadioGroup} from 'material-ui/Radio';
import Checkbox, { CheckboxProps } from 'material-ui/Checkbox';
import SelectField from 'material-ui/Select';
import MenuItem from 'material-ui/Menu';
import { InjectedFormProps, WrappedFieldProps } from 'redux-form';

export const renderTextField = (input) => (
  <TextField {...input}/>
)

export const renderCheckbox = (input) => (
  <Checkbox
    checked={input.value ? true : false}
    onChange={input.onChange}
  />
)

export const renderRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
)

export const renderSelectField = (input) => (
  <SelectField
    floatingLabelText={input.label}
    errorText={input.touched && input.error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={input.children}
    {...input.custom}
  />
)

export const menuItem = (input) => (
  <MenuItem
    {...input}
  />
)