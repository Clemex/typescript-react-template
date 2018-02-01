import * as React from 'react';
import { WithStyles, Button, TextField } from 'material-ui';
import Typography from 'material-ui/Typography/Typography';
import { Style } from 'material-ui/styles/createTypography';

export type BaseStyleProps = WithStyles<'root'> & {
    classes: any;
  }

export type ButtonProperties = BaseStyleProps & {
    label: string;
    click: () => void;
  }
  
export type NumberInputProps = BaseStyleProps & {
    label: string;
    value: number;
    change: (value: number) => void;
  }

  
export class NumberInput extends React.PureComponent<NumberInputProps> {
    render(): React.ReactNode {
      return (
        <TextField
          label={this.props.label}
          value={this.props.value}
          onChange={e => this.props.change(+e.target.value)}
          type="number"
          className={this.props.classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
      );
    }
  }

  export class LabeledButton extends React.PureComponent<ButtonProperties> {
    render(): React.ReactNode {
      return (
        <Button onClick={e => this.props.click()}>
            {this.props.label}
        </Button>
      );
    }
  }

  export type TextProperties = {
    text?: string;  
    type?: Style;
  }

  export class Text extends React.PureComponent<TextProperties> {
    render(): React.ReactNode {
      return (
        this.props.text
          ? (<Typography {...this.props}>{this.props.text}</Typography>)
          : (<Typography {...this.props} />)
      );
    }
  }
  