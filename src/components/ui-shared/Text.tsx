import * as React from 'react';
import Typography from 'material-ui/Typography/Typography';

import { StringHelper } from "../../helpers/StringHelper";
import { TextProperties } from "../../helpers/Types";

export class Text extends React.PureComponent<TextProperties> {
    render(): React.ReactNode {
        return (
            this.props.text
                ? (<Typography {...this.props}>{StringHelper.FormattedMessageOrText(this.props.text)}</Typography>)
                : (<Typography {...this.props} />)
        );
    }
}