import * as React from 'react';
import { Button } from 'material-ui';

import { StringHelper } from "../../helpers/StringHelper";
import { ButtonProperties } from "../../helpers/Types";

// Labeled button input component
export class LabeledButton extends React.PureComponent<ButtonProperties> {
    render(): React.ReactNode {
        return (
            <Button onClick={e => this.props.click()}>
                {StringHelper.FormattedMessageOrText(this.props.label)}
            </Button>
        );
    }
}