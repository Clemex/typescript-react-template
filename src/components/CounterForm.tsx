import React from 'react';
import { defineMessages } from 'react-intl';
import { Field, reduxForm, Form, InjectedFormProps, FormSubmitHandler, DecoratedComponentClass } from 'redux-form'
import { connect } from 'react-redux';
import { NumberInput } from "./Util";
import {  CounterState, CounterActionCreators } from "./CounterContainer";


/** Localizable strings from React-intl. */
const messages = defineMessages({
  counter_form_submit: {
    id: "counter_form_submit",
    defaultMessage: "submit" ,
  },
  counter_form_clear: {
    id: "counter_form_clear",
    defaultMessage: "clear"  
  },
  counter_form_title: {
    id: "counter_form_title",
    defaultMessage: "A Redux-Form with Validation (Max 100)"
  }
});

/** Validates that the passed value is a function */
function isValidValue(value) {
  return typeof(value) === 'number' && value > 100;
}

/** A wrapper around the Material UI Number input used with Redux-form. */
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

/** The form component definition. */
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
            validate={isValidValue}
          />
          <button type="submit" disabled={ this.props.invalid || this.props.pristine || this.props.submitting  }>
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

/** A Redux-ready version of the form. */
export const ReduxCounterForm: DecoratedComponentClass<CounterFormData, CounterFormProps> 
  = reduxForm<CounterFormData, CounterFormProps>({ form: 'CounterForm' })(BaseCounterForm);

/** Retrieves the value of the  */
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

/** The wrapper around the redux-connected version of the form. */
export const CounterForm = connect(mapStateToProps, mapDispatchToProps)(ReduxCounterForm);