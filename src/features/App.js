import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import HomePage from './HomePage';

function App({ classes }) {
    return (
        <div className="app-wrapper">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Redux Blockchain
                    </Typography>
                </Toolbar>
            </AppBar>
            <Switch>
                <Route exact path="/" component={HomePage} />
            </Switch>
      </div>
    );
}

export default App;
