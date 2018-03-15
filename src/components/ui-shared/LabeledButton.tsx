import * as React from 'react';
import { Button } from 'material-ui';

import { StringHelper } from "../../helpers/StringHelper";
import { LabeledButtonProperties } from "../../helpers/Types";

/** Simple wrapper around Material UI button that accepts React international messages or plain text labels. */
export class LabeledButton extends React.PureComponent<LabeledButtonProperties> 
{
    render(): React.ReactNode 
    {
        return (
            <Button onClick={this.props.onClick}>
                {StringHelper.FormattedMessageOrText(this.props.label)}
            </Button>
        );
    }
}