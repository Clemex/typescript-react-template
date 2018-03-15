import * as React from 'react';
import { Button } from 'material-ui';

import { StringHelper } from "../../helpers/StringHelper";
import { LabeledButtonProperties } from "../../helpers/Types";

/** Simple wrapper around Material UI button that accepts React international messages or plain text labels. */
export class LabeledButton extends React.PureComponent<LabeledButtonProperties> 
{
    readonly clickHandler = () => this.props.click();

    render(): React.ReactNode 
    {
        return (
            <Button onClick={this.clickHandler}>
                {StringHelper.FormattedMessageOrText(this.props.label)}
            </Button>
        );
    }
}