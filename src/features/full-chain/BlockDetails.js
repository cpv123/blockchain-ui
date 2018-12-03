import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Button } from '@material-ui/core';
import moment from 'moment';
import FullBlockDetails from './FullBlockDetails';

class BlockDetails extends React.PureComponent {

    static propTypes = {
        block: PropTypes.object.isRequired,
    };

    state = { isFullViewOpen: false };

    handleClick = () => {
        this.setState( state => ({ isFullViewOpen: !state.isFullViewOpen }))
    };

    // Put this in a selector that takes state and props?
    computeTotalAmount(transactions) {
        let totalAmount = 0;
        for (let transaction of transactions) {
            totalAmount += transaction.amount
        }
        return totalAmount;
    }

    render() {

        const { timestamp, transactions } = this.props.block;
        const { isFullViewOpen } = this.state;

        return (
            <React.Fragment>
                <div>
                    <Typography variant="subtitle1">
                        {moment.unix(timestamp).format('MMMM Do YYYY, h:mm:ss a')}
                    </Typography>
                    <Typography variant="subtitle1">
                        Total Transactions: {transactions.length}
                    </Typography>
                    <Typography variant="subtitle1">
                        Amount Sent: {this.computeTotalAmount(transactions)}
                    </Typography>
                    <div style={{ textAlign: 'center' }}>
                        <Button onClick={this.handleClick} color="primary">Full Details</Button>
                    </div>
                </div>
                <FullBlockDetails
                    isOpen={isFullViewOpen}
                    block={this.props.block}
                    closeView={this.handleClick}
                />
            </React.Fragment>
        );
    }
}

export default BlockDetails;