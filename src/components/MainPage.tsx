import * as React from 'react';
import { Grid, Paper } from 'material-ui';

/** Used for passing sidebar, header, and main formatted content. */
export interface MainPageProperties {
    sidebar: React.ReactNode;
    header: React.ReactNode;
    main: React.ReactNode;
}

/** A simple predefined layout with a header, sidebar, and main body. */
export class MainPage extends React.PureComponent<MainPageProperties> {
  render(): React.ReactNode {
     return (
        <Paper>
            <a href="https://github.com/Clemex/typescript-react-template">
                <img style={{position: "absolute", top: 0, right: 0, border: 0}} src="https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png" alt="Fork me on GitHub" />
            </a>
            <Grid container spacing={24}>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={10}>
                    {this.props.header}
                </Grid>
                <Grid item xs={2}>
                    {this.props.sidebar}
                </Grid>
                <Grid item xs={10}>
                    {this.props.main}
                </Grid>        
            </Grid>
        </Paper>
      );
  }
}
