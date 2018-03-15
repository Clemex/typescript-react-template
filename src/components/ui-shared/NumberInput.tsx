import * as React from 'react';
import { TextField } from 'material-ui';

import { StringHelper } from "../../helpers/StringHelper";
import { NumberInputProps } from "../../helpers/Types";

/** A wrapper around the Material UI text field entry form that only accepts numbers. */
export class NumberInput extends React.PureComponent<NumberInputProps> 
{
    readonly changeHandler = e => this.props.onChange(+e.target.value);

    render(): React.ReactNode 
    {
        const label = StringHelper.FormattedMessageOrText(this.props.label);
        return (
            <TextField         
                error={this.props.error}       
                label={label}
                value={this.props.value}
                onChange={this.changeHandler}
                type="number"
                InputLabelProps={{ shrink: true }}
                margin="normal"
            />
        );
    }
}

/** 
 * A version of the NumberInput component that can be used with ReduxForm.
 * The properties are set to "any", because AFAICT the typings for the Field component
 * of Redux-Form are broken and the Redux-form team does not officially support TypeScript. 
 * https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18279
 * https://github.com/erikras/redux-form/issues/3579
 */
export class NumberInputReduxForm extends React.PureComponent<any> 
{
    render(): React.ReactNode 
    {
        return (
            <NumberInput                
                {...this.props}
                error={this.props.meta.error}
                value={this.props.input.value}
                onChange={this.props.input.onChange}
            />
        );
    }
}

