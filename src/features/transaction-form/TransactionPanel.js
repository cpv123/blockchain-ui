import React from 'react';
import Panel from '../../components/Panel';
import TransactionForm from './TransactionForm';

function TransactionPanel() {
    return (
        <Panel title="MAKE A NEW TRANSACTION">
            <TransactionForm />
        </Panel>
    );
}

export default TransactionPanel;