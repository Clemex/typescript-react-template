import * as React from 'react';
import { WithStyles, withStyles, Paper } from 'material-ui';
import { NumberInput } from "./ui-shared/";
import { Theme } from 'material-ui/styles';
import { defineMessages, FormattedMessage } from 'react-intl';
import { Field, reduxForm, Form, InjectedFormProps, formValueSelector } from 'redux-form'
import { connect } from 'react-redux';


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

export type CounterValueProperties = {
  value: number;
}

export type CounterFormProperties = InjectedFormProps<{}, CounterValueProperties>;

// Base counter form 
export class BaseCounterForm extends React.PureComponent<CounterFormProperties, {invalid:boolean}> {
  constructor( props ) {
    super(props);
    this.state = {
      invalid: false
    };
  }
  componentWillReceiveProps( nextProps: CounterFormProperties ) {
    this.setState({ invalid: nextProps.invalid })
  }
  render(): React.ReactNode {
    const submit = ({value}, dispatch) => {
      dispatch({ type: 'REPLACE', payload: value });
    }
    const { pristine, submitting, reset, handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit(submit)}>
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

const mapStateToProps = (state: any): Partial<CounterValueProperties> => ({
   value: state.counter.counter as number 
});

export const createCounterForm = reduxForm<{}, Partial<CounterValueProperties>>({ form: 'CounterForm' });
export const UnconnectedCounterForm = createCounterForm(BaseCounterForm);
export const CounterForm = connect(mapStateToProps)(UnconnectedCounterForm);