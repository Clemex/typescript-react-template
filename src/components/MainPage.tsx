import * as React from 'react';
import { Grid, AppBar, Toolbar, Typography, Button } from 'material-ui';

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
        <div id="main">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" style={{flex:1}}>
                    TypeScript React Template Application
                    </Typography>
                    <a href="https://github.com/clemex/typescript-react-template">
                        <Button>Fork me on GitHub!</Button>
                    </a>
                </Toolbar>
            </AppBar>
            <Grid container spacing={8}>
                <Grid item xs={2}>
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
