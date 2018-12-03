import React from 'react';
import { Typography } from '@material-ui/core';

function BlockTransactions({ index, sender, recipient, amount }) {
    return (
        <div style={{ borderLeftStyle: 'solid', paddingLeft: 10, marginBottom: 10 }}>
            <Typography>Index: {index}</Typography>
            <Typography>Sender: {sender}</Typography>
            <Typography>Recipient: {recipient}</Typography>
            <Typography>Amount: {amount}</Typography>
        </div>
    );
}

export default BlockTransactions;