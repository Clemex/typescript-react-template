import * as React from 'react';
import Typography from 'material-ui/Typography/Typography';

import { StringHelper } from "../../helpers/StringHelper";
import { TextProperties } from "../../helpers/Types";
import { Style } from 'material-ui/styles/createTypography';

/** 
 * A wrapper around the typography component of Material UI, that supports internationalization. 
 * The term "Typography" has been replaced with "Text" which is more user friendly, and the 
 * property "variant" is called "textStyle".
 * https://material.io/guidelines/style/typography.html#typography-styles 
 */
export class Text extends React.PureComponent<TextProperties> 
{
    render(): React.ReactNode {
        const content = this.props.text 
            ? StringHelper.FormattedMessageOrText(this.props.text) 
            : null;

        return (<Typography {...this.props} variant={this.props.textStyle || "body1"}>
            {content}
            {this.props.children}
            </Typography>);
    }
}

export function StyledText(style: Style) {
    return (props) => (<Text {...props} textStyle={style}>{props.children}</Text>); 
}

export const ButtonText = StyledText("button");
export const Display1Text = StyledText("display1");
export const Display2Text = StyledText("display2");
export const Display3Text = StyledText("display3");
export const Display4Text = StyledText("display4");
export const HeadlineText = StyledText("headline");
export const TitleText = StyledText("title");
export const SubheadingText = StyledText("subheading");
export const Body1Text = StyledText("body1");
export const Body2Text = StyledText("body2");
export const CaptionText = StyledText("caption");
