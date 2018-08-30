import React from "react";
import { FormattedMessage } from 'react-intl'
import { Button, TextField, WithStyles } from 'material-ui';

/** Represents either plain text string or a message descriptor  */
export type StringOrMessage = string | FormattedMessage.MessageDescriptor;

/** Properties of a number input component */
export interface NumberInputProps {
    label?: StringOrMessage;
    value: number;
    change: (value: number) => void;
}

/** An input field  */
export class NumberInput extends React.PureComponent<NumberInputProps & WithStyles<'root'>> {
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


/** Properties for a text component, type can be one of: 
 * 'display1' | 'display2' | 'display3' | 'display4' | 'headline' | 'title' | 'subheading' | 'body1' | 'body2'  | 'caption'
 */
export interface TextProperties {
    text?: StringOrMessage;
    type?: Style;
}

/** This is a wrapper class around the Typography component from material-UI. */
export class Text extends React.PureComponent<TextProperties> {
    render(): React.ReactNode {
        return (
            this.props.text
                ? (<Typography {...this.props}>{FormattedMessageOrText(this.props.text)}</Typography>)
                : (<Typography {...this.props} />)
        );
    }
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
            <Button onClick={e => this.props.click()}>
                {FormattedMessageOrText(this.props.label)}
            </Button>
        );
    }
}