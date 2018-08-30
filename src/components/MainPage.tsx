import * as React from 'react';
import { Grid, Paper } from 'material-ui';

/** The three components that make up the main sections of the page */
export interface MainPageProperties {
    sidebar: React.ReactNode;
    header: React.ReactNode;
    content: React.ReactNode;
}

/** The main page. */
export class MainPage extends React.PureComponent<MainPageProperties> {
  render(): React.ReactNode {
     return (
        <Paper>
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
                    {this.props.content}
                </Grid>        
            </Grid>
        </Paper>
      );
  }
}
