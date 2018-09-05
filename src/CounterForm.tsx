/** 
 * This module demostrates using Redux-form to encapsulate a form that has its own state separate from the main 
 * application but still using the redux store. It submits changes to the main application when the input is valid.   
*/
import React from 'react';
import { defineMessages, FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';
import { Field, reduxForm, Form, InjectedFormProps, FormSubmitHandler, DecoratedComponentClass } from 'redux-form'
import { connect } from 'react-redux';
import { NumberInput } from "./Util";
import {  CounterState, CounterActionCreators } from "./CounterContainer";
import { Paper, Typography } from 'material-ui';

/** Localizable strings defined using react-intl. */
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
  },
  input_value : {
    id: "input_value",
    defaultMessage: "Input value"
  }
});

/** Validates that the passed value is a number and less than or equal to a hundred */
function isValidValue(value) {
  return typeof(value) !== 'number' 
      ? "Only numbers plz" 
      : value > 100
        ? "This number is too darn high!"
        : undefined;
}

/** A wrapper around the Material UI Number input used with Redux-form. */
const NumberInputForm = (props) => (<div>
    <NumberInput
      label={props.label || ''}
      value={props.input.value}
      change={props.input.onChange}
      errorText={(props.meta.touched && (props.meta.error && <span>{props.meta.error}</span>) || (props.meta.warning && <span>{props.meta.warning}</span>)) }
      {...props} 
    />    
  </div>
  );

/** The type of the data managed by Redux-form. Not necessarily the same as the properties. */
export interface CounterFormData {
  value: number;
}

/** The type of the properties exposed to clients of this form. */
export interface CounterFormProps {
  value: number;
}

/** 
 * The form component definition. Notice that we separate the form injected properties and the internationalization context.
 * Also the form automatically communicates its data to the Redux store. 
*/
export class BaseCounterForm 
  extends React.PureComponent<CounterFormProps & InjectedIntlProps & InjectedFormProps<CounterFormData, CounterFormProps>> 
{
  /** Called by redux-form when the submit button is pressed. */
  readonly onSubmit: FormSubmitHandler<CounterFormData, CounterFormProps> =
    ({value}, dispatch) => {
      if (value !== undefined)
        dispatch(CounterActionCreators.replace(value));
    }

  /** Renders the form in all its glory. */
  render() {
    const { 
      invalid, pristine, submitting, reset, handleSubmit, intl
    } = this.props;
    
    const inputLabel = intl.formatMessage(messages.input_value);

    return (
      <Paper elevation={4}>
        <Typography variant="subheading">
          <FormattedMessage {...messages.counter_form_title}/>
        </Typography>
        <Form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <Field
              name='value'
              component={NumberInputForm}
              label={inputLabel}
              validate={isValidValue}         
            />
            <div>
            <button type="submit" disabled={ invalid || pristine || submitting  }>
              <FormattedMessage {...messages.counter_form_submit} />
            </button>
            <button type="button" disabled={ pristine || submitting} onClick={reset}>
              <FormattedMessage {...messages.counter_form_clear} />
            </button>
            </div>
          </div>
        </Form>
      </Paper>
    );
  }
}

/** Add the intl context which is needed explicitly. */
export const CounterFormWithIntl = injectIntl(BaseCounterForm);

/** A Redux-ready version of the form. */
export const ReduxCounterForm: DecoratedComponentClass<CounterFormData, CounterFormProps> 
  = reduxForm<CounterFormData, CounterFormProps>({ form: 'CounterForm', touchOnChange: true })(CounterFormWithIntl);

/** Retrieves the value of the from the redux store. */
function mapStateToProps(state) { 
  return {
    value: (state.counter as CounterState).value
  } 
};

/** The wrapper around the redux-connected version of the form. */
export const CounterForm = connect(mapStateToProps)(ReduxCounterForm);
