import * as React from 'react';
import { Grid, AppBar } from 'material-ui';

/** Used for passing sidebar, header, and main formatted content. */
export interface SimplePageLayoutProperties {
    sidebar: React.ReactNode;
    header: React.ReactNode;
    main: React.ReactNode;
}

/** A simple predefined layout with a header, sidebar, and main body. 
 * This demonstrates how to pass render elements as properties. 
*/
export class SimplePageLayout extends React.PureComponent<SimplePageLayoutProperties> {
  render(): React.ReactNode {
     return (
        <div id="layout">
            <AppBar position="static">
                {this.props.header}
            </AppBar>
            <Grid container spacing={8}>
                <Grid item xs=  {2}>
                    {this.props.sidebar}
                </Grid>
                <Grid item xs={10}>
                    {this.props.main}
                </Grid>        
            </Grid>
        </div>
      );
  }
}
