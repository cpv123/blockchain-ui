import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'; 
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { 
    totalBlocksSelector, 
    totalTransactionsSelector,
    totalAmountSentSelector
} from '../../utils/selectors';

const styles = {
    text: {
        margin: 5,
    }
};

class ChainSummary extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        blocks: PropTypes.number,
        transactions: PropTypes.number,
        amount: PropTypes.number,
    };

    render() {

        const { classes, blocks, transactions, amount } = this.props;

        return (
            <div>
                <Typography className={classes.text}>Total blocks: {blocks}</Typography>
                <Typography className={classes.text}>Total transactions: {transactions}</Typography>
                <Typography className={classes.text}>Total amount sent: {amount}</Typography>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    blocks: totalBlocksSelector(state),
    transactions: totalTransactionsSelector(state),
    amount: totalAmountSentSelector(state),
});

export default 
    connect(mapStateToProps)(withStyles(styles)(ChainSummary));