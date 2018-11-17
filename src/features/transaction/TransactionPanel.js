import React from 'react';
import Panel from '../../components/Panel';
import TransactionForm from './TransactionForm';

function TransactionPanel() {
    return (
        <Panel title="Make a new transaction">
            <TransactionForm />
        </Panel>
    );
}

export default TransactionPanel;