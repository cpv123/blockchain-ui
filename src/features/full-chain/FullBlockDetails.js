import React from 'react';
import { 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogActions, 
    Typography, 
    Button 
} from '@material-ui/core';
import moment from 'moment';
import BlockTransactions from './BlockTransactions';

function FullBlockDetails({ block, isOpen, closeView }) {
    const { index, previous_hash, proof, timestamp } = block;
    return (
        <Dialog open={isOpen}>
            <DialogTitle>Block {index}</DialogTitle>
            <DialogContent>
                <div>
                    <Typography variant="subtitle1">
                        <span style={{ fontWeight: 'bold' }}>Previous Hash:</span> {previous_hash}
                    </Typography>
                    <Typography variant="subtitle1">
                        <span style={{ fontWeight: 'bold' }}>Proof:</span> {proof}
                    </Typography>
                    <Typography variant="subtitle1">
                        <span style={{ fontWeight: 'bold' }}>Timestamp:</span> {moment.unix(timestamp).format('MMMM Do YYYY, h:mm:ss a')}
                    </Typography>
                </div>
                <div>
                    <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>Transactions:</Typography>
                    {
                        block.transactions.map(transaction => (
                            <BlockTransactions
                                key={transaction.index}
                                index={transaction.index}
                                sender={transaction.sender}
                                recipient={transaction.recipient}
                                amount={transaction.amount}
                            />
                        ))
                    }
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeView} color="primary">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default FullBlockDetails;