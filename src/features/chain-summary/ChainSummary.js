import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'; 
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { 
    getTotalBlocks, 
    getTotalTransactions,
    getTotalAmountSent
} from '../../reducers/selectors';

const styles = {
    text: {
        margin: 5,
    },
};

class ChainSummary extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        blocks: PropTypes.number.isRequired,
        transactions: PropTypes.number.isRequired,
        amount: PropTypes.number.isRequired,
    };

    render() {

        const { classes, blocks, transactions, amount } = this.props;

        return (
            <div>
                <Typography className={classes.text} variant="h6">Total blocks: {blocks}</Typography>
                <Typography className={classes.text} variant="h6">Total transactions: {transactions}</Typography>
                <Typography className={classes.text} variant="h6">Total amount sent: {amount}</Typography>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    blocks: getTotalBlocks(state),
    transactions: getTotalTransactions(state),
    amount: getTotalAmountSent(state),
});

export default 
    connect(mapStateToProps)(withStyles(styles)(ChainSummary));