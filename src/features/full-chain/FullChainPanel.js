import React from 'react';
import { CircularProgress } from '@material-ui/core';
import Panel from '../../components/Panel';
import FullChain from './FullChain';

function TransactionPanel({ chainData, isLoading }) {
    return (
        <Panel title="View the full chain">
            { isLoading ? <CircularProgress /> : (
                <FullChain chainData={chainData} />
            )}
            
        </Panel>
    );
}

export default TransactionPanel;
