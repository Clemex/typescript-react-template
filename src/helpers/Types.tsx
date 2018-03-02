import { WithStyles } from 'material-ui';
import { FormattedMessage } from 'react-intl';
import { Style } from 'material-ui/styles/createTypography';

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