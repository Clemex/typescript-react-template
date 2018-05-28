import React from "react";
import { FormattedMessage } from 'react-intl'
import { StringOrMessage } from "./Types";

export module StringHelper{
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
}