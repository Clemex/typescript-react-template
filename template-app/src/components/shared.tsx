import * as React from 'react';
import { WithStyles, Button, TextField } from 'material-ui';
import Typography from 'material-ui/Typography/Typography';
import { Style } from 'material-ui/styles/createTypography';
import { FormattedMessage } from 'react-intl';

// Can be used to mix in styling properties (e.g. className) to another properties object
export type BaseStyleProps = Partial<WithStyles<'root'>>;

// Represents either plain text string or a message descriptor 
export type StringOrMessage = string | FormattedMessage.MessageDescriptor;

// Properties of a button component
export type ButtonProperties = BaseStyleProps & {
    label?: StringOrMessage;
    click: () => void;
  }
  
// Properties of a number input component
export type NumberInputProps = BaseStyleProps & {
    label?: StringOrMessage;
    value: number;
    change: (value: number) => void;
  }
  
// Properties for a text component, type can be one of:
// | 'display1' | 'display2' | 'display3' | 'display4' | 'headline' | 'title' | 'subheading' | 'body1' | 'body2'  | 'caption';
export type TextProperties = BaseStyleProps & {
  text?: StringOrMessage;  
  type?: Style;
}

// Helper function that either returns the string, or a properly formatted string if given a message
export function FormattedMessageOrText(input?: StringOrMessage) : React.ReactNode {
  if (!input) {
    return "";
  }
  else if (typeof(input) === 'string') {
    return input;
  }
  else {
    return <FormattedMessage {...input}/>;
  }
}

// Number input 
export class NumberInput extends React.PureComponent<NumberInputProps> {
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

// Labeled button input component
export class LabeledButton extends React.PureComponent<ButtonProperties> {
  render(): React.ReactNode {
    return (
      <Button onClick={e => this.props.click()}>
          {FormattedMessageOrText(this.props.label)}
      </Button>
    );
  }
}

// A wrapper around material ui typography component
export class Text extends React.PureComponent<TextProperties> {
  render(): React.ReactNode {
    return (        
      this.props.text
        ? (<Typography {...this.props}>{FormattedMessageOrText(this.props.text)}</Typography>)
        : (<Typography {...this.props} />)
    );
  }
}
