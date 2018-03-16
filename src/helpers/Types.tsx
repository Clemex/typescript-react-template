import { FormattedMessage } from 'react-intl';
import { Style } from 'material-ui/styles/createTypography';
import { MouseEvent } from 'react';

/** Represents either plain text string or an internationalizable message descriptor */
export type StringOrMessage = string | FormattedMessage.MessageDescriptor;

/** Common properties for most of our components. */
export interface BaseProperties {
    className?: string;
}

/** Properties for a labeled button component. */
export interface LabeledButtonProperties extends BaseProperties {
    submit?: boolean;
    disabled?: boolean;
    label?: StringOrMessage;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
}

/** Properties for an optionally labeled number input component. */
export interface NumberInputProps extends BaseProperties {
    label?: StringOrMessage;
    value: number;
    onChange: (value: number) => void;
    error?: boolean;
}

/** Properties for a text component, type can be one of:
 *  | 'display1' | 'display2' | 'display3' | 'display4' | 'headline' | 'title' | 'subheading' | 'body1' | 'body2'  | 'caption'; 
 * */
export interface TextProperties extends BaseProperties {
    text?: StringOrMessage;
    textStyle?: Style;
}