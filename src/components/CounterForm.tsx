import * as React from 'react';
import { Field, reduxForm, Form, InjectedFormProps } from 'redux-form'
import { connect } from 'react-redux';

import { Text, NumberInputReduxForm } from "./ui-shared/";
import { CounterAction } from "./Counter/CounterAction";
import { CounterValueProps } from './Counter';

/** A validation function used by the field. */
function max100(value: any) : React.ReactNode {
  return (value && value > 100) 
    ? <Text text="We don't accept values over 100"/>
    : null;
}

/** The properties of the Counter form component. */
export type CounterFormProperties = InjectedFormProps<{}, CounterValueProps>;


/** An example of using Redux-form. */
export class BaseCounterForm extends React.PureComponent<CounterFormProperties> 
{
  submit({value}, dispatch) {
    dispatch(CounterAction.createReplaceAction(value));
  }

  render(): React.ReactNode {
    const { 
      pristine, submitting, reset, handleSubmit 
    } = this.props;
    
    return (
      <Form onSubmit={handleSubmit(this.submit)}>
        <div>
          <Field
            name='value'
            component={NumberInputReduxForm}
            label="Input Value"
            validate={max100}         
          />
          <button type="submit" disabled={ this.props.invalid ||  pristine || submitting  }>
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