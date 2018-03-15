import { FormattedMessage } from 'react-intl';
import { Style } from 'material-ui/styles/createTypography';

/** Represents either plain text string or an internationalizable message descriptor */
export type StringOrMessage = string | FormattedMessage.MessageDescriptor;

/** Properties for a labeled button component. */
export interface LabeledButtonProperties {
    label: StringOrMessage;
    click: () => void;
}

/** Properties for an optionally labeled number input component. */
export interface NumberInputProps {
    label?: StringOrMessage;
    value: number;
    onChange: (value: number) => void;
    error?: boolean;
}

/** Properties for a text component, type can be one of:
 *  | 'display1' | 'display2' | 'display3' | 'display4' | 'headline' | 'title' | 'subheading' | 'body1' | 'body2'  | 'caption'; 
 * */
export interface TextProperties {
    text?: StringOrMessage;
    type?: Style;
}