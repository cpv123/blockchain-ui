import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ChainSummaryPanel from './ChainSummaryPanel';
import TransactionPanel from './TransactionPanel';
import MineBlockPanel from './MineBlockPanel';

const styles = {
    root: {
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
};

function HomePage({ classes }) {
    return (
        <div className={classes.root}>
            <TransactionPanel />
            <ChainSummaryPanel />
            <MineBlockPanel />
        </div>
    );
}

export default withStyles(styles)(HomePage);