import * as React from 'react';
import { TextField } from 'material-ui';

import { StringHelper } from "../../helpers/StringHelper";
import { NumberInputProps } from "../../helpers/Types";

export class NumberInput extends React.PureComponent<NumberInputProps> {
    render(): React.ReactNode {
        const label = StringHelper.FormattedMessageOrText(this.props.label);
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