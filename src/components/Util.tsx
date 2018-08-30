import React from "react";
import { FormattedMessage } from 'react-intl'
import { Button, TextField, WithStyles, withStyles } from 'material-ui';

/** Represents either plain text string or a message descriptor  */
export type StringOrMessage = string | FormattedMessage.MessageDescriptor;

/** Properties of a number input component */
export interface NumberInputProps {
    label?: StringOrMessage;
    value: number;
    change: (value: number) => void;
}

/** The input field definition, without the styles information.  */
export class BaseNumberInput extends React.PureComponent<NumberInputProps & WithStyles<'root'>> {
    render(): React.ReactNode {
        const label = FormattedMessageOrText(this.props.label);
        return (
            <TextField
                label={label}
                value={this.props.value}
                onChange={e => this.props.change(+e.target.value)}
                type="number"
                className={(this.props.classes || {})['textField']}
                InputLabelProps={{
                    shrink: true,
                }}
                margin="normal"
            />
        );
    }
}

/** The input field definition, with the styles information.  */
export const NumberInput = withStyles({})<NumberInputProps>(BaseNumberInput);

/** Either returns the string, or a properly formatted string if given a message */
export function FormattedMessageOrText(input?: StringOrMessage): React.ReactNode {
    if (!input) {
        return "";
    }
    else if (typeof (input) === 'string') {
        return input;
    }
    else {
        return <FormattedMessage {...input} />;
    }
}

/** This is a helper function that facilitates providing redux field components with the correct type.  */
export function wrapForReduxFormField(Component) {
    return (p) => (<Component 
        error={p.meta.touched && p.meta.error}
    />);
}

/** Properties of a button component */
export interface ButtonProperties {
    label?: StringOrMessage;
    click: () => void;
}

/** Labeled button input component */
export class LabeledButton extends React.PureComponent<ButtonProperties> {
    render(): React.ReactNode {
        return (
            <Button onClick={this.props.click}>
                {FormattedMessageOrText(this.props.label)}
            </Button>
        );
    }
}