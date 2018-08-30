import * as React from 'react';
import { Field, reduxForm, Form, InjectedFormProps } from 'redux-form'
import { connect } from 'react-redux';
import { defineMessages } from 'react-intl';

import { NumberInputReduxForm, LabeledButton, SubheadingText } from "./ui-shared/";
import { CounterAction } from "./Counter/CounterAction";
import { CounterValueProps } from './Counter';
import { Paper } from 'material-ui';

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

const max100 = value  => value && value > 100 ? "We don't accept values over 100 via the form, due to limited internet bandwidth" : null;

const NumberInputForm = (props) => (
  <div>
    <NumberInput
      label={props.label || ''}
      value={props.input.value}
      change={v => props.input.onChange(v)}
      {...props} 
    />
    {props.meta.error && <span>{props.meta.error}</span>}
  </div>
  );

export interface CounterValueProperties {
  value: number;
}

export interface CounterFormData {
  value: number;
}

/** The properties of the Counter form component. */
export type CounterFormProperties = InjectedFormProps<{}, CounterValueProps>;

/** An example of using Redux-form. */
export class BaseCounterForm extends React.PureComponent<CounterFormProperties> 
{
  submit({value}, dispatch) {
    dispatch(CounterAction.createReplaceAction(value));
  }
  readonly myHandleSubmit = (values: CounterFormData, dispatch:any, props: CounterValueProperties ) => {
    console.log(values);
    console.log(dispatch);
    console.log(props);
    dispatch(CounterAction.createReplaceAction(values.value));
  }

  render(): React.ReactNode {
    const { pristine, submitting, reset, handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit(this.myHandleSubmit)}>
        <div>
          <Field
            name='value'
            component={NumberInputForm}
            label="Input Value"
            validate={max100}
          />
          <button type="submit" disabled={ this.state.invalid ||  pristine || submitting  }>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </Form>
    );
  }
}

/** Create a function for creating a Redux form, along with the label used for storing the form data,  */
export const createCounterForm = reduxForm<{}, Partial<CounterValueProps>>({ form: 'CounterForm' });

/** Call the create Counter Form higher-order component to actually create the component.  */
export const UnconnectedCounterForm = createCounterForm(BaseCounterForm);

/** The function for getting the current counter state from the store. */
export const mapStateToProps = (state: any): Partial<CounterValueProps> => ({
   value: state.counter.value as number 
});

/** Create the counter  */
export const CounterForm = connect(mapStateToProps)(UnconnectedCounterForm);