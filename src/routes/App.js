import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import HomePage from './home-page/HomePage';
import ChainPage from './chain-page/ChainPage';

const styles = {
    display: 'flex',
    justify: 'center',
};

function App({ classes }) {
    return (
        <div className="app-wrapper">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        React Blockchain
                    </Typography>
                </Toolbar>
            </AppBar>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/chain" component={ChainPage} />
            </Switch>
      </div>
    );
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
