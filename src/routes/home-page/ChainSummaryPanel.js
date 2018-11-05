import React from 'react';
import Panel from '../../components/Panel';
import ChainSummary from './ChainSummary';

function ChainSummaryPanel() {
    return (
        <Panel title="View chain summary">
            <ChainSummary />
        </Panel>
    );
}

export default ChainSummaryPanel;