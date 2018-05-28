import React from 'react';
import { WithStyles, withStyles, Paper } from 'material-ui';
import { Theme } from 'material-ui/styles';
import { defineMessages, FormattedMessage } from 'react-intl';
import { Field, reduxForm, Form, InjectedFormProps, formValueSelector, SubmitHandler, FormSubmitHandler, DecoratedComponentClass, ConfigProps } from 'redux-form'
import { connect } from 'react-redux';

import { NumberInput } from "./ui-shared/";
import { CounterActionType, CounterState, CounterActionCreators } from "./Counter/CounterContainer";

/** Validate function that returns a message if */
function max100(value): string|null {
  return value && value > 100 ? "We don't accept values over 100 via the form, due to limited internet bandwidth" : null;
}

/** A warpper around the Material UI Number input used with Redux-form. */
const NumberInputForm = (props) => (
  <div>
    <NumberInput
      label={props.label || ''}
      value={props.input.value}
      change={props.input.onChange}
      {...props} 
    />
    {props.meta.error && <span>{props.meta.error}</span>}
  </div>
  );

/** The type of the data managed by Redux-form. Not necessarily the same as the properties. */
export interface CounterFormData {
  value: number;
}

/** The type of the properties exposed to clients of this form. */
export interface CounterFormProps {
  value: number;
  onChange(value: number): void;
}

/** The form component definition.  */
export class BaseCounterForm 
  extends React.PureComponent<CounterFormProps & InjectedFormProps<CounterFormData, CounterFormProps>> 
{
  /** Called by redux-form when the submit button is pressed. */
  readonly onSubmit: FormSubmitHandler<CounterFormData, CounterFormProps> =
    (values, dispatch, props ) => {
      if (this.props.valid && values.value !== undefined)
        this.props.onChange(values.value);
    };

  /** Renders the form in all its glory. */
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div>
          <Field
            name='value'
            component={NumberInputForm}
            label="Input Value"
            validate={max100}
          />
          <button type="submit" disabled={ this.props.invalid ||  this.props.pristine || this.props.submitting  }>
            Submit
          </button>
          <button type="button" disabled={ this.props.pristine || this.props.submitting} onClick={this.props.reset}>
            Clear Values
          </button>
        </div>
      </Form>
    );
  }
}

export const ReduxCounterForm: DecoratedComponentClass<CounterFormData, CounterFormProps> 
  = reduxForm<CounterFormData, CounterFormProps>({ form: 'CounterForm' })(BaseCounterForm);

function mapStateToProps(state) { 
  return {
    value: (state.counter as CounterState).value
  } 
};

function mapDispatchToProps(dispatch) { 
  return { 
    onChange: (value: number): void => dispatch(CounterActionCreators.replace(value)),
  }
}

export const CounterForm = connect(mapStateToProps, mapDispatchToProps)(ReduxCounterForm);